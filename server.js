const express = require('express'),
        app = express(),
        port = process.env.PORT || 3000;
        
const fs = require("fs");




app.get('/', (req, res) => {
        res.send(JSON.parse(fs.readFileSync(`${__dirname}/data/fetched2.json`, "utf-8")))
})


app.get('/data', (req, res) => {
        res.send(JSON.parse(fs.readFileSync(`${__dirname}/data/fetched2.json`, "utf-8")))
})

app.listen(port, () => {
        console.log('server is running on port 3000');
})
