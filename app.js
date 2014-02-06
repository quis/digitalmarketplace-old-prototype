var express = require('express'),
    cons = require('consolidate'),
    app = express(),
    mustacheRender = require("./lib/mustacheRender").mustacheRender;

// Application settings
app.engine('html', cons.mustache);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

// Middleware to serve static assets
app.use('/public', express.static(__dirname + '/public'));
app.use('/public', express.static(__dirname + '/govuk/public'));

// middleware to wrap mustache views in govuk template

app.use(mustacheRender);

//

var commonHead = '<link href="/public/stylesheets/application.css" rel="stylesheet" type="text/css" />';

// routes

app.get('/', function (req, res) {

  var head = commonHead;

  res.render('index', {
            'pageTitle': 'index',
            'head' : head 
            });
  
});

app.get('/sample', function (req, res) {
  
  var head = commonHead;

  res.render('sample', {
            'pageTitle': 'sample',
            'head' : head 
            });
});

app.get('/search_results.html', function (req, res) {
  
  var head = commonHead;

  res.render('search_results.html', {
            'pageTitle': 'Search results',
            'head' : head 
            });
});

app.get('/listing.html', function (req, res) {
  
  var head = commonHead;

  res.render('listing.html', {
            'pageTitle': 'Listing page',
            'head' : head 
            });
});

// start the app

app.listen(3000);
console.log('');
console.log('Listening on port 3000');
console.log('');
