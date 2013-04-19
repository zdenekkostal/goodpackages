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

app.use('/', express.static(__dirname + '/app'));

app.get(/\.js$/, function(req, res) {
    console.log('tralala');
    var text = fs.readFileSync('.' + req.originalUrl);
    res.write(wrapDefine(text));
    res.end();
});
