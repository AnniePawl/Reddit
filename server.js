// Express Modules & Objects
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hey Bitch'))

// Server Start
app.listen(port, () => console.log(`Cool so your app is actually listening on port ${port}!`))

