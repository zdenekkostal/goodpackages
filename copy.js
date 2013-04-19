var fs = require('fs');

var deps = [];
var path = './app/packages';
var files = fs.readdirSync(path + '/coffee');

for (var i = 0; i < 100; i++) {

    var newPath = path + '/' + 'package' + i + '/';
    fs.mkdirSync(newPath);

    var smallPackage = 'package' + i;
    var bigPackage = 'Package' + i;

    deps.push('var ' + bigPackage + ' = ' + 'require("packages/' + smallPackage + '/' + smallPackage + '");');

    files.forEach(function(file) {
        var fileStr = fs.readFileSync(path + '/coffee/' + file, 'utf8');

        fileStr = fileStr.replace(/coffee/g, smallPackage);
        fileStr = fileStr.replace(/Coffee/g, bigPackage);

        var newFile = file === 'coffee.js' ? smallPackage + '.js' : file;

        fs.writeFileSync(newPath + '/' + newFile, fileStr);
    });

}

deps.push('$("body").append("<hr><p>PAGE LOADED!!!</p>");')

fs.writeFileSync('app/pages/index.js', deps.join('\n'))