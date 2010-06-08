fan.helloJsStep2 = {};
fan.helloJsStep2.JsLibWrapper = fan.sys.Obj.$extend(fan.sys.Obj);
fan.helloJsStep2.JsLibWrapper.prototype.$ctor = function() {}
fan.helloJsStep2.JsLibWrapper.make = function() { return new fan.helloJsStep2.JsLibWrapper(); }
fan.helloJsStep2.JsLibWrapper.prototype.name = function() { return LIB.name(); }
fan.helloJsStep2.JsLibWrapper.prototype.say = function(message) { LIB.say(message); }
fan.helloJsStep2.$pod = fan.sys.Pod.$add('helloJsStep2');
with (fan.helloJsStep2.$pod)
{
  fan.helloJsStep2.JsLibWrapper.$type = $at('JsLibWrapper','sys::Obj',[],8704);
  fan.helloJsStep2.JsLibWrapper.$type.$am('name',8192,fan.sys.List.make(fan.sys.Param.$type,[])).$am('say',8192,fan.sys.List.make(fan.sys.Param.$type,[new fan.sys.Param('message','sys::Str',false)])).$am('make',139268,fan.sys.List.make(fan.sys.Param.$type,[]));
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
