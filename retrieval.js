const express = require('express');
const fetch = require('node-fetch');
const fs = require('fs');

const url = 'http://52.58.13.62:8080/quote';

const app = express();

app.get('/star-wars/', (req, res) => {
    fetch(url)
        .then(res => res.text()) 
        .then(body => res.send('A quote from Star Wars is: ' + body))
        .catch(console.log);
});

app.listen(9090, () => {
    console.log('Quote retrieval app listening on port 9090!');
    
    const pid = require('process').pid;

    fs.writeFileSync('./RETRIEVAL.pid', pid);
});
