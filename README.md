# detect-process

Detect is the running process is `nodejs`, `electron`, or `browser`

Usage in nodejs: 

    var detect = require('detect-process');
    var env = detect.getName();
    console.log(env); // => nodejs, electron or browser

Usage in a browser: 

    <script src = "dist/detectProcess.js"></script>
    <script>
    var test = detectProcess.getName();
    console.log(test);
    </script>

License MIT
