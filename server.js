var http = require('http'),
    path = require('path'),
    express = require('express'),
    app = express(),
    port = process.env.PORT || 8000,
    server = http.createServer(app);

app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + '/');
// app.set('app', __dirname + '/app');
app.use(express.static(path.join(__dirname, '')));
app.get('/', index);

function index (req, res) {
  res.render('index.html');
}

function log () {
  console.log('server was loaded by ' + port);
}

server.listen(port, log);
