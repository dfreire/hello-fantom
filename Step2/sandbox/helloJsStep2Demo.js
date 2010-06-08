fan.helloJsStep2Demo = {};
fan.helloJsStep2Demo.JsLibWrapperDemo = fan.sys.Obj.$extend(fan.sys.Obj);
fan.helloJsStep2Demo.JsLibWrapperDemo.prototype.$ctor = function()
{
  fan.sys.Obj.prototype.$ctor.call(this);
  var $this = this;
}
fan.helloJsStep2Demo.JsLibWrapperDemo.prototype.$typeof = function() { return fan.helloJsStep2Demo.JsLibWrapperDemo.$type; }
fan.helloJsStep2Demo.JsLibWrapperDemo.prototype.run = function()
{
  var lib = fan.helloJsStep2.JsLibWrapper.make();
  var libName = lib.name();
  lib.say(fan.sys.Str.plus(fan.sys.Str.plus("Hello ",libName),"!"));
  return;
}
fan.helloJsStep2Demo.JsLibWrapperDemo.make = function()
{
  var self = new fan.helloJsStep2Demo.JsLibWrapperDemo();
  fan.helloJsStep2Demo.JsLibWrapperDemo.make$(self);
  return self;
}
fan.helloJsStep2Demo.JsLibWrapperDemo.make$ = function(self)
{
  return;
}
fan.helloJsStep2Demo.$pod = fan.sys.Pod.$add('helloJsStep2Demo');
with (fan.helloJsStep2Demo.$pod)
{
  fan.helloJsStep2Demo.JsLibWrapperDemo.$type = $at('JsLibWrapperDemo','sys::Obj',[],8192);
  fan.helloJsStep2Demo.JsLibWrapperDemo.$type.$am('run',8192,fan.sys.List.make(fan.sys.Param.$type,[])).$am('make',139268,fan.sys.List.make(fan.sys.Param.$type,[]));
}
