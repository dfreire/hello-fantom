fan.helloJsStep1.JsLibWrapper = fan.sys.Obj.$extend(fan.sys.Obj);
fan.helloJsStep1.JsLibWrapper.prototype.$ctor = function() {}
fan.helloJsStep1.JsLibWrapper.make = function() { return new fan.helloJsStep1.JsLibWrapper(); }
fan.helloJsStep1.JsLibWrapper.prototype.say = function(message) { LIB.say(message); }

