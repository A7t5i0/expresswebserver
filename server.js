var express = require("express");

var app = express();

app.use(express.static('build'));

var server = app.listen(8081, () => {
    var port = server.address().port;
    console.log("server started at http://localhost:%s", port);
})
