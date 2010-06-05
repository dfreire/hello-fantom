fan.helloJsStep1 = {};
fan.helloJsStep1.JsLibWrapperDemo = fan.sys.Obj.$extend(fan.sys.Obj);
fan.helloJsStep1.JsLibWrapperDemo.prototype.$ctor = function()
{
  fan.sys.Obj.prototype.$ctor.call(this);
  var $this = this;
}
fan.helloJsStep1.JsLibWrapperDemo.prototype.$typeof = function() { return fan.helloJsStep1.JsLibWrapperDemo.$type; }
fan.helloJsStep1.JsLibWrapperDemo.prototype.run = function()
{
  var lib = fan.helloJsStep1.JsLibWrapper.make();
  lib.say("Hello JsLib!");
  return;
}
fan.helloJsStep1.JsLibWrapperDemo.make = function()
{
  var self = new fan.helloJsStep1.JsLibWrapperDemo();
  fan.helloJsStep1.JsLibWrapperDemo.make$(self);
  return self;
}
fan.helloJsStep1.JsLibWrapperDemo.make$ = function(self)
{
  return;
}
fan.helloJsStep1.$pod = fan.sys.Pod.$add('helloJsStep1');
with (fan.helloJsStep1.$pod)
{
  fan.helloJsStep1.JsLibWrapperDemo.$type = $at('JsLibWrapperDemo','sys::Obj',[],8192);
  fan.helloJsStep1.JsLibWrapperDemo.$type.$am('run',8192,fan.sys.List.make(fan.sys.Param.$type,[])).$am('make',139268,fan.sys.List.make(fan.sys.Param.$type,[]));
}
"use strict";
var LIB = (function (lib) {
    lib.say = function (message) {
        window.alert(message);
    };
    return lib;
}({}));
fan.helloJsStep1.JsLibWrapperPeer = fan.sys.Obj.$extend(fan.sys.Obj);
fan.helloJsStep1.JsLibWrapperPeer.prototype.$ctor = function(self) {}
fan.helloJsStep1.JsLibWrapperPeer.prototype.say = function(self, message) { LIB.say(message); }
