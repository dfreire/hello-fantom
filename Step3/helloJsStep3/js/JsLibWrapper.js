fan.helloJsStep3.JsLibWrapper = fan.sys.Obj.$extend(fan.sys.Obj);
fan.helloJsStep3.JsLibWrapper.prototype.$ctor = function() {}
fan.helloJsStep3.JsLibWrapper.make = function() { return new fan.helloJsStep3.JsLibWrapper(); }
fan.helloJsStep3.JsLibWrapper.prototype.name = function() { return LIB.name(); }
fan.helloJsStep3.JsLibWrapper.prototype.say = function(message) { LIB.say(message); }
