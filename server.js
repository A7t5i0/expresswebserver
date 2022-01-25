var express = require("express");

var app = express();

app.use(express.static('build'));

app.use('/css', express.static(__dirname + '/build/statoc/css'));
app.use('/js', express.static(__dirname + '/build/static/js'));
app.use('/images', express.static(__dirname + '/build/static/images'));

var server = app.listen(8081, () => {
    var port = server.address().port;
    console.log("server started at http://localhost:%s", port);
})