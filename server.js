// Express Modules & Objects
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
// Use Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Express Validator
// Add after body parser initialization!
app.use(expressValidator());

// HANDLEBARS MATERIAL
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


app.get('/', (req, res) => res.render('index', {}))


// Import Routes 
// TO-DO: What the difference here? 
require('./controllers/posts.js')(app);
require('./models/post')(app);


// Server Start
app.listen(port, () => console.log(`Cool so your app is actually listening on port ${port}!`))

// Set Database
require('./data/reddit-clone-db');

// TODO: What does this line do ?
module.exports = app;
