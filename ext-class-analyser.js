'use strict';
var seeker = require('ext-class-seeker'),
    fileRunner = require('js-file-seeker'),
    dependencie = require('ext-class-dependencies'),
    errorSeeker = require('ext-class-error-seeker'),
    fs = require('fs'),
    showPath = process.argv[2];
    if(existFile('./files/config.json')) {
        var options = require('./files/config.json')
    } else {
        console.error('ERROR: config.json is not available in files folder');
        return 0;
    }


var classDependencies = {};
function existFile (path){
    try {
        return fs.statSync(path).isFile();
    } catch(err) {
        return false;
    }
}
if(!options.extClassAnalyser.newDependencieRun && existFile(options.extClassAnalyser.saveDependenciePath)){
    classDependencies = require(options.extClassAnalyser.saveDependenciePath);
} else {
    var dir = options.jsFileSeeker.projectFolder,
        files = fileRunner.start(dir, options.jsFileSeeker.skipPaths);
    classDependencies = seeker.goThroughFiles(files, options.extClassSeeker.fastRunFiles);
}
if(options.extClassAnalyser.saveDependencies) {
    fs.writeFile(options.extClassAnalyser.saveDependenciePath, JSON.stringify(classDependencies, null, 2), function (err) {});
}
if(options.extClassAnalyser.lookForErrors){
    var sortedErorrs = errorSeeker.begin(classDependencies, options.errorSeeker);
    console.log('Found Errors in ' + Object.keys(sortedErorrs).length + ' Files');
    if(options.extClassAnalyser.saveErrors){
        fs.writeFile(options.extClassAnalyser.saveErrorsPath,JSON.stringify(sortedErorrs,null,2), function(err){});
    } else {
        console.log(JSON.stringify(sortedErorrs,null,2));
    }
}

dependencie.makeTextFile(classDependencies, [showPath], options.extClassDependencies.namespaceColors);
console.log('Got ' + Object.keys(classDependencies.classes).length + ' Ext-Classes');