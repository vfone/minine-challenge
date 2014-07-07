var http = require('http');

var util = require('util');

var querystring = require('querystring');

var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

errorHandler= function(error, request, response, next) {
  response.writeHead(400, {
      'Content': '{"JSON data error": "Sorry, something wrong !"}',
      'Content-Type': 'application/json'
  });
  response.end('{"error": "Could not decode request: JSON parsing failed"}');
};

app.use(errorHandler);

app.post('/', function(request, response){
    try {
        //loading fake data from local for testing...
        body = filterEngine(request.body);
        response.writeHead(200, {
            'Content': body,
            'Content-Type': 'application/json'
        });
        response.end(body);
    } catch (e) {
        response.writeHead(400, {
            'Content': '{"JSON data error": "Sorry, something wrong !"}',
            'Content-Type': 'application/json'
        });
        response.end('{"error": "Could not decode request: JSON parsing failed"}');
    }

}).listen(process.env.PORT || 5000);

console.log('Server running...');



filterEngine = function (data) {
    //core re-structure filter
    var str = '{"response":[';
    var showImage, slug, title, DRM, episodeCount;
    var i = 0;
    var arrData = data.payload;

    arrData.forEach(function (entry) {
        DRM = entry.drm;
        episodeCount = entry.episodeCount;
        if (DRM === true && episodeCount > 0) {
            if (entry.image) {
                showImage = entry.image.showImage;
            } else {
                showImage = '';
            }
            if (entry.slug) {
                slug = entry.slug;
            } else {
                slug = '';
            }
            if (entry.title) {
                title = entry.title;
            } else {
                title = '';
            }
            if (i > 0) {
                str += ',';
            }
            str += '{ "showImage": "' + showImage + '", "slug": "' + slug + '", "title": "' + title + '", "drm": ' + DRM + ', "episodeCount": "' + episodeCount + '"}';
            i++;
        }
    });
    str += '],"output":' + i + '}';
    return str;
};

