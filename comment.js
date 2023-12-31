// Create web server
// Run: node comment.js
// URL: http://localhost:3000
var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');

// Create web server
var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url,true).pathname;
    var title = queryData.id;

    if(pathname === '/') {
        if(title === undefined) {
            // Home
            var title = 'Welcome';
            var description = 'Hello, Node.js';
            var template = `
                <!doctype html>
                <html>
                <head>
                <title>WEB1 - ${title}</title>
                <meta charset="utf-8">
                </head>
                <body>
                <h1><a href="/">WEB</a></h1>
                <ul>
                    <li><a href="/?id=HTML">HTML</a></li>
                    <li><a href="/?id=CSS">CSS</a></li>
                    <li><a href="/?id=JavaScript">JavaScript</a></li>
                </ul>
                <h2>${title}</h2>
                <p>${description}</p>
                </body>
                </html>
            `;
            response.writeHead(200);
            response.end(template);
        } else {
            // Other
            var template = `
                <!doctype html>
                <html>
                <head>
                <title>WEB1 - ${title}</title>
                <meta charset="utf-8">
                </head>
                <body>
                <h1><a href="/">WEB</a></h1>
                <ul>
                    <li><a href="/?id=HTML">HTML</a></li>
                    <li><a href="/?id=CSS">CSS</a></li>
                    <li><a href="/?id=JavaScript">JavaScript</a></li>
                </ul>
                <h2>${title}</h2>
                <p>${description}</p>
                </body>
                </html>
            `;
            response.writeHead(200);
            response.end(template);
        }
    } else if(pathname === '/create') {
        var title = 'WEB - create';
        var template = `
