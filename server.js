const express = require('express')
const app = express()
const exphbs = require('express-handlebars');
const port = process.env.PORT || 3000
const path = require('path') // research the path native node module
const bodyParser = require('body-parser')

app.set('views', path.join(__dirname, 'views'));

app.engine('hbs', exphbs({
  defaultLayout: "main",
  extname: ".hbs",
  helpers: require("handlebars-helpers")(),
  layoutsDir: __dirname + '/views/layouts/',
  partialsDir: __dirname + '/views/partials/'
}));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
require('./data/clientbird-comingsoon-db.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(process.env.PORT || port)