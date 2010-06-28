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

