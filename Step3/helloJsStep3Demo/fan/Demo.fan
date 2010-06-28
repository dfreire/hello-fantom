using util
using web
using webmod
using wisp

class Demo : AbstractMain
{
  @Opt { help = "http port" }
  Int port := 8080

  override Int run()
  {
    wisp := WispService
    {
      it.port = this.port
      it.root = DemoMod()
    }
    return runServices([wisp])
  }
}

const class DemoMod : WebMod
{

  override Void onGet()
  {
    name := req.modRel.path.first
    if (name == null)
      onIndex // http://localhost:8080
    else if (name == "pod")
      onPodFile // http://localhost:8080/pod/helloJsStep3Demo/res/index.html
  }

  Void onIndex()
  {
    res.headers["Content-Type"] = "text/html; charset=utf-8"
    res.out.docType
    res.out.html
    res.out.head
      res.out.title.w("Demo").titleEnd
      res.out.includeJs(`/pod/sys/sys.js`)
      res.out.includeJs(`/pod/web/web.js`)
      res.out.includeJs(`/pod/gfx/gfx.js`)
      res.out.includeJs(`/pod/dom/dom.js`)
      res.out.includeJs(`/pod/helloJsStep3/helloJsStep3.js`)
      res.out.includeJs(`/pod/helloJsStep3Demo/helloJsStep3Demo.js`)
    res.out.headEnd
    res.out.body
    res.out.script.w(getJs()).scriptEnd
    res.out.bodyEnd
    res.out.htmlEnd
  }

  Str getJs()
  {
    Str js := "var demo = fan.helloJsStep3Demo.JsLibWrapperDemo.make();\n"
    js += "demo.run();\n"
    return js
  }

  Void onPodFile()
  {
    File file := ("fan://" + req.uri[1..-1]).toUri.get
    if (!file.exists) { res.sendErr(404); return }
    FileWeblet(file).onService
  }

}