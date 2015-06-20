var express = require('express');
var app = express();

app.use(express.logger('dev'));
app.set('views', __dirname + '/views');
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.locals.basedir = __dirname + "/public";

app.get('/', function(request, response) {
    response.redirect('/index');
});

app.get('/index', function(request, response) {
    response.render('index.jade');
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
