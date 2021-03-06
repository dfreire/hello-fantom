This is a container for several "hello world" kind of pods, with the intent of 
learning [Fantom](http://fantom.org) programming language features.

I'm particularly interested in Fantom to JavaScript compilation, and wrapping 
third-party JavaScript libraries in Fantom code. I have decided to break the 
complexity of this task into several steps, each one building upon the 
previous one.

Step 1
======

This is the first step and it represents a simple Fantom class wrapping a 
JavaScript object. In this step, everything goes in the same pod.

**helloJsStep1**:

- **JsLibWrapperDemo.fan** is a Fantom @Js class that uses JsLibWrapper.fan.
- **JsLibWrapper.fan** is a Fantom native class that wraps JsLib.js functions.
- **JsLibWrapper.js** is the JavaScript implementation for the Fantom native 
class. It binds JsLibWrapper.fan calls to JsLib.js.
- **JsLib.js** represents the JavaScript third-party library.

Step 2
======

This is the same thing as step 1, with one relevant difference. Now we have two 
pods instead of one. We have **helloJsStep2** which is the API (i.e. the 
wrapper of the JavaScript library), and **helloJsStep2Demo** which is the 
API-client.

**helloJsStep2**:

- **JsLibWrapper.fan** is a Fantom native class that wraps JsLib.js functions.
- **JsLibWrapper.js** is the JavaScript implementation for the Fantom native 
class. It binds JsLibWrapper.fan calls to JsLib.js.
- **JsLib.js** represents the JavaScript third-party library.

**helloJsStep2Demo**:

- **JsLibWrapperDemo.fan** is a Fantom @Js class that calls uses 
helloJsStep/JsLibWrapper

Step 3
======

This is the same thing as step 2, but with no **sandbox** directory, and instead
 using a WebMod to load JavaScript and HTML files. 
 
The demo runs with:
`fan helloJsStep3Demo/fan/Demo.fan`

Open the web browser in:
http://localhost:8080/
or:
http://localhost:8080/pod/helloJsStep3Demo/res/index.html

**Demo.fan** exemplifies the both ways to access static content stored inside 
existent pods: either build the index dinamically or provide it via an html 
file.

Sandbox Directories
===================

The sandbox directories include html files which can be used to demo the result 
of each step. The purpose is to be able to check things rapidly, and these 
files are not at all intended for distribution.

The JavaScript files in the sandbox directories, were manually extracted from 
the Fantom generated pods. A production environment shouldn't rely on these 
sandbox JavaScript files and should rely on what is actually generated during 
the Fantom build.
 
License Information
===================

Fantom is licensed under the [Academic Free License 3.0](http://fantom.org/doc/docIntro/License.html). 
The JavaScript files included in the sandbox directories were copied from the 
Fantom build, and remain under the Fantom license.

All the code included in this project can be used for free as long as its use 
remains compatible with Fantom licensing terms.

Disclaimer
----------

This software is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.


