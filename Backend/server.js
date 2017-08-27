var express = require('express');
var fs = require('fs');
var bodyParser= require('body-parser');
var initialFolder = "C:\\AppPythonWeb\\";
var jsonParser = bodyParser.json()  
var os = new os_func();
var app = express();
var response;


const exec = require('child_process').exec;

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

//app.use(bodyParser());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: false }))

app.all('*', function(req, res,next) {
        /**
         * Response settings
         * @type {Object}
         */
        var responseSettings = {
            "AccessControlAllowOrigin": req.headers.origin,
            "AccessControlAllowHeaders": "Content-Type,X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5,  Date, X-Api-Version, X-File-Name",
            "AccessControlAllowMethods": "POST, GET, PUT, DELETE, OPTIONS",
            "AccessControlAllowCredentials": true
        };

        /**
         * Headers
         */
        res.header("Access-Control-Allow-Credentials", responseSettings.AccessControlAllowCredentials);
        res.header("Access-Control-Allow-Origin",  responseSettings.AccessControlAllowOrigin);
        res.header("Access-Control-Allow-Headers", (req.headers['access-control-request-headers']) ? req.headers['access-control-request-headers'] : "x-requested-with");
        res.header("Access-Control-Allow-Methods", (req.headers['access-control-request-method']) ? req.headers['access-control-request-method'] : responseSettings.AccessControlAllowMethods);
        res.header("Content-Type", "application/json");

        if ('OPTIONS' == req.method) {
            res.send(200);
        }
        else {
            next();
        }


    });

app.get('/api/v1/executeCode', function(req, res) {
    
    console.log("Received Code Request!");
    os.execCommand('python ' + initialFolder + req.query.foldername + '\\code' + req.query.scriptCount + '.py', function (returnvalue) {
        
        response = returnvalue;
        
        console.log("console for python: " + response);
        
        //res.send("{\"body\":{\"output\":\"" + response + "\"}}");
        res.send(response);
        
        console.log("Response Sent!");
    });

});

app.post('/api/v1/createFolder', function(req, res) {
    
    console.log("Received Folder Request!");
    os.execCommand('mkdir ' + initialFolder + req.query.foldername, function (returnvalue) {
        
        res.end();
    });

});

app.post('/api/v1/receiveScript',  function(req, res) {
    
    console.log("Incoming Script!");
    var filePath = initialFolder + req.query.foldername + '\\code' + req.query.scriptCount + '.py';
    var body = req.body;
    var count = 0;
    console.log("content: " + req.body);
    
    fs.writeFile(filePath, body, function() {
            res.end();
        })
    /*
    req.on('data', function(data) {
        console.log("content: " + data);
        //body += JSON.stringify(req.body, null, 2);
        body += data;
        console.log("content: " + body);
        
    });
    

    req.on('end', function (){
        fs.writeFile(filePath, body, function() {
            res.end();
        })});
        */
    
});

app.post('/api/v1/endSession', function(req, res) {
    
    console.log("End session!");
    
    os.execCommand('rmdir ' + initialFolder + req.query.foldername, function (returnvalue) {
        
        res.end();
    });
});


app.listen(3000, function () {
    console.log('Listening on port 3000');
});