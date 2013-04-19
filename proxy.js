var express = require("express");
var app = express();
app.use(express.bodyParser());

var fs = require('fs');

var wrapDefine = function(text) {
   return [
      'define(function(require, exports, module) {',
      text,
      '});\n'
   ].join('\n');
};

app.listen(1235);
console.log('port: 1235');

app.get('/', function(req, res) {
    res.sendfile(__dirname + '/app/index.html');
});

app.get(/.*lib.*/, express.static(__dirname + '/app'));

app.get(/.*[pages|packages]\/.+\.js$/, function(req, res) {
    var text = fs.readFileSync('app' + req.originalUrl);
    res.write(wrapDefine(text));
    res.end();
});