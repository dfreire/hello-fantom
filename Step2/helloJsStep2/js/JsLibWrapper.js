fan.helloJsStep2.JsLibWrapper = fan.sys.Obj.$extend(fan.sys.Obj);
fan.helloJsStep2.JsLibWrapper.prototype.$ctor = function() {}
fan.helloJsStep2.JsLibWrapper.make = function() { return new fan.helloJsStep2.JsLibWrapper(); }
fan.helloJsStep2.JsLibWrapper.prototype.name = function() { return LIB.name(); }
fan.helloJsStep2.JsLibWrapper.prototype.say = function(message) { LIB.say(message); }
