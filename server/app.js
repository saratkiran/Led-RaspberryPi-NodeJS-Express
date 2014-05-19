
/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , path = require('path');

var servo = require('control');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.use(express.static(path.join(__dirname, 'public')));
  app.engine('html', require('ejs').renderFile);
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', function (req, res)
{
    res.render('index.html');
});
app.get('/on', servo.on);
app.get('/off', servo.off);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
