var express = require('express');
var initialFolder = "C:\\AppPythonWeb\\";
var os = new os_func();
var app = express();
var response;

const exec = require('child_process').exec;


app.get('api/v1/executeCode', function(req, res) {
    
    console.log("Received Code Request!");
    os.execCommand('python ' + initialFolder + req.query.foldername + '\\code' + req.query.scriptCount + '.py', function (returnvalue) {
        
        response = returnvalue;
        
        console.log("console for python: " + response);
        
        res.send(response);
        
        console.log("Response Sent!");
    });

});

app.post('api/v1/createFolder', function(req, res) {
    
    console.log("Received Folder Request!");
    os.execCommand('mkdir ' + initialFolder + req.query.foldername, function (returnvalue) {
        
        res.end();
    });

});

app.post('api/v1/receiveScript', function(req, res) {
    
    console.log("Incoming Script!");
    var filePath = initialFolder + req.query.foldername + '\\code' + req.query.scriptCount + '.py';
    
    fs.appendFile(filePath, req.body, function () {
        res.end();
    });
});

app.post('api/v1/endSession', function(req, res) {
    
    console.log("End session!");
    
    os.execCommand('rmdir ' + initialFolder + req.query.foldername, function (returnvalue) {
        
        res.end();
    });
});


app.listen(3000, function () {
    console.log('Listening on port 3000');
});

function os_func() {
    this.execCommand = function(cmd, callback) {
        exec(cmd, (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                return;
            }

            callback(stdout);
        });
    }
}