var express = require('express'),
   cons = require('consolidate'),
   app = express(),
   mustacheRender = require("./lib/mustacheRender").mustacheRender,
   port = (process.env.PORT || 3000);
   
  
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

var commonHead = '<link href="/public/stylesheets/application.css" rel="stylesheet" type="text/css" />'+'<script src="/public/javascripts/jquery-1.11.0.min.js" type="text/javascript"></script>';

// routes

app.get('/', function (req, res) {

  var head = commonHead;

  res.render('index', {
            'pageTitle': 'Digital Marketplace',
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


app.get('/supplier.html', function (req, res) {
  
  var head = commonHead;

  res.render('supplier.html', {
            'pageTitle': 'Supplier',
            'head' : head 
            });
});


app.get('/buyer-dashboard.html', function (req, res) {
  
  var head = commonHead;

  res.render('buyer-dashboard.html', {
            'pageTitle': 'Buyer dashboard',
            'head' : head 
            });
});



app.get('/add-project.html', function (req, res) {
  
  var head = commonHead;

  res.render('add-project.html', {
            'pageTitle': 'Add a new project',
            'head' : head 
            });
});


app.get('/listing-no-photo.html', function (req, res) {
  
  var head = commonHead;

  res.render('listing-no-photo.html', {
            'pageTitle': 'Listing',
            'head' : head 
            });
});


app.get('/add-project-example.html', function (req, res) {
  
  var head = commonHead;

  res.render('add-project-example.html', {
            'pageTitle': 'Add project',
            'head' : head 
            });
});

app.get('/add-project-with-compare.html', function (req, res) {
  
  var head = commonHead;

  res.render('add-project-with-compare.html', {
            'pageTitle': 'Add project',
            'head' : head 
            });
});

app.get('/login.html', function (req, res) {
  
  var head = commonHead;

  res.render('login.html', {
            'pageTitle': 'Login to Digital Marketplace',
            'head' : head 
            });
});

app.get('/sign-up.html', function (req, res) {
  
  var head = commonHead;

  res.render('sign-up.html', {
            'pageTitle': 'Sign up to Digital Marketplace',
            'head' : head 
            });
});




app.get('/supplier-dashboard.html', function (req, res) {
  
  var head = commonHead;

  res.render('supplier-dashboard.html', {
            'pageTitle': 'Supplier dashboard',
            'head' : head 
            });
});


app.get('/project.html', function (req, res) {
  
  var head = commonHead;

  res.render('project.html', {
            'pageTitle': 'Project',
            'head' : head 
            });
});


app.get('/saas.html', function (req, res) {
  
  var head = commonHead;

  res.render('saas.html', {
            'pageTitle': 'Software as a service',
            'head' : head 
            });
});


app.get('/savedforlater.html', function (req, res) {
  
  var head = commonHead;

  res.render('savedforlater.html', {
            'pageTitle': 'Saved for later',
            'head' : head 
            });
});



app.get('/share.html', function (req, res) {
  
  var head = commonHead;

  res.render('share.html', {
            'pageTitle': 'Share',
            'head' : head 
            });
});


app.get('/reset.html', function (req, res) {
  
  var head = commonHead;

  res.render('reset.html', {
            'pageTitle': 'Reset password',
            'head' : head 
            });
});


// start the app

app.listen(port);
console.log('');
console.log('Listening on port ' + port);
console.log('');
