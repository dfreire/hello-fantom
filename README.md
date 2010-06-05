
This is a container for several "hello world" kind of pods, with the intent of 
learning [Fantom](http://fantom.org) programming language features.

I'm particularly interested in Fantom to JavaScript compilation, and wrapping 
third-party JavaScript libraries in Fantom code 
(see http://fantom.org/sidewalk/topic/1109). I have decided to break the 
complexity of this task into several steps, each one building uppon the 
previous one. The result of each step can be used as a staring template for 
similar  projects.

helloJsStep1
============

This is the first step and it represents a simple Fantom class wrapping a 
JavaScript object. In this step, everything goes in the same pod.

- **JsLibWrapperDemo.fan** is a Fantom @Js class that calls JsLibWrapper.fan.
- **JsLibWrapper.fan** is a Fantom native class that wrapps JsLib.js functions.
- **JsLibWrapperPeer.js** is the JavaScript peer for the Fantom native class. 
It binds JsLibWrapper.fan calls to JsLib.js.
- **JsLib.js** represents the JavaScript third-party library.

Sandbox
=======

The sandbox includes html files which can be used to demo the result of each 
step. The purpose is to be able to check things rapidly, and these files are not
 at all intented for distribuction.

The JavaScript files in the sandbox, were manually extracted from the Fantom 
generated pods. A production environment shouldn't rely on these sandbox 
JavaScript files and should rely on what is actually generated during the Fantom
 build.
 
License Information
===================

Fantom is licensed under the [Academic Free License 3.0](http://fantom.org/doc/docIntro/License.html). The JavaScript files included in 
the sandbox directory were created by the Fantom build.

All the code included in this project can be used for free as long as its use 
remains compatible with Fantom licesing terms.

Disclaimer
----------

This software is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
Lesser General Public License for more details.


