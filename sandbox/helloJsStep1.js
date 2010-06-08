fan.helloJsStep1 = {};
fan.helloJsStep1.JsLibWrapper = fan.sys.Obj.$extend(fan.sys.Obj);
fan.helloJsStep1.JsLibWrapper.prototype.$ctor = function() {}
fan.helloJsStep1.JsLibWrapper.make = function() { return new fan.helloJsStep1.JsLibWrapper(); }
fan.helloJsStep1.JsLibWrapper.prototype.name = function() { return LIB.name(); }
fan.helloJsStep1.JsLibWrapper.prototype.say = function(message) { LIB.say(message); }
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
  var libName = lib.name();
  lib.say(fan.sys.Str.plus(fan.sys.Str.plus("Hello ",libName),"!"));
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
  fan.helloJsStep1.JsLibWrapper.$type = $at('JsLibWrapper','sys::Obj',[],8704);
  fan.helloJsStep1.JsLibWrapperDemo.$type = $at('JsLibWrapperDemo','sys::Obj',[],8192);
  fan.helloJsStep1.JsLibWrapper.$type.$am('name',8192,fan.sys.List.make(fan.sys.Param.$type,[])).$am('say',8192,fan.sys.List.make(fan.sys.Param.$type,[new fan.sys.Param('message','sys::Str',false)])).$am('make',139268,fan.sys.List.make(fan.sys.Param.$type,[]));
  fan.helloJsStep1.JsLibWrapperDemo.$type.$am('run',8192,fan.sys.List.make(fan.sys.Param.$type,[])).$am('make',139268,fan.sys.List.make(fan.sys.Param.$type,[]));
}
"use strict";
var LIB = (function (lib) {
    lib.name = function () {
        return "JsLib";
    }
    lib.say = function (message) {
        window.alert(message);
    };
    return lib;
}({}));
