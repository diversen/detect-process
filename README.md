# detect-process

Detect is the running process is `nodejs`, `electron`, or `browser`.
Then you may more easy create scripts that runs both in e.g. electron and
the browser. 

Usage in nodejs: 
~~~js
    var detect = require('detect-process');
    var env = detect.getName();
    console.log(env); // => nodejs, electron or browser
~~~

Usage in a browser: 
~~~html
    <script src = "dist/detectProcess.js"></script>
    <script>
    var test = detectProcess.getName();
    console.log(test); // => nodejs, electron or browser
    </script>
~~~
License MIT
