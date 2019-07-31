const express = require('express');
const app = express();
const path = require('path');
const port = 3000 || process.env.PORT;

app.use(express.static(path.join(__dirname, '/dist')));

app.get('/', (req, res) => {
    // res.render('index')
})

app.listen(port, () => console.log('Server Initialised'));