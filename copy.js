var fs = require('fs');

var path = './app/packages';
var files = fs.readdirSync(path + '/coffee');

for (var i = 0; i < 10; i++) {

    var newPath = path + '/' + 'package' + i + '/';
    fs.mkdirSync(newPath);

    var smallPackage = 'package' + i;
    var bigPackage = 'Package' + i;

    files.forEach(function(file) {
        var fileStr = fs.readFileSync(path + '/coffee/' + file, 'utf8');

        fileStr = fileStr.replace(/coffee/g, smallPackage);
        fileStr = fileStr.replace(/Coffee/g, bigPackage);

        var newFile = file === 'coffee.js' ? smallPackage + '.js' : file;

        fs.writeFileSync(newPath + '/' + newFile, fileStr);
    });
}

