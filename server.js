// Express Modules & Objects
const express = require('express');
const app = express();
const port = 3000;

// HANDLEBARS MATERIAL
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => res.render('index', {}))


// Import Routes 
require('./controllers/posts.js')(app);

// Server Start
app.listen(port, () => console.log(`Cool so your app is actually listening on port ${port}!`))


