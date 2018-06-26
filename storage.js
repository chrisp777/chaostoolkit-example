const express = require('express');
const fs = require('fs');
const sw = require('star-wars-quotes');

const app = express();

app.get('/quote/', (req, res) => {
    res.send(sw());
});

app.listen(8080, () => {
    console.log('Quote storage app listening on port 8080!');

    const pid = require('process').pid;

    fs.writeFileSync('./STORAGE.pid', pid);
});