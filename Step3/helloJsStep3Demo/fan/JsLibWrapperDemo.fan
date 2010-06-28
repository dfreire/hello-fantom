using helloJsStep3

@Js
class JsLibWrapperDemo
{
  Void run()
  {
    lib := JsLibWrapper()
    libName := lib.name()
    lib.say("Hello $libName!")
  }
}
