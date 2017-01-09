# detect-process

Detect if the running process context is `nodejs`, `phantomjs`, `electron`, or `browser`. Then you can create scripts that e.g. runs both in e.g. electron and the browser. Or at least find a way to determine which elements you will need to include, depending on the context.  

Usage in nodejs: 
~~~js
    var detect = require('detect-process');
    var env = detect.getName();
    console.log(env); // => nodejs, phantom, electron or browser
~~~

Usage in a browser: 
~~~html
    <script src = "dist/detectProcess.js"></script>
    <script>
    var test = detectProcess.getName();
    console.log(test); // => nodejs, phantom, electron or browser
    </script>
~~~

Example in phantomjs: 
~~~js
var filename = './dist/detectProcess.js';
injected = phantom.injectJs(filename);
if (injected) {
    var process = detectProcess.getName();
    console.log(process); // => phantomjs
    phantom.exit(0);
}
~~~

License MIT

