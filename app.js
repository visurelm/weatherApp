const express = require('express');
const morgan = require('morgan');

const app = express();

app.get('/', (req, res) => {
    res.send('HOJOHOJO')
    console.log("HOJOHOJO");
})

module.exports = app;