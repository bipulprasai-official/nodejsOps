const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
    res.send('Hello today will be learning about github and jenkin');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});

//Run app, then load http://localhost:port in a browser to see the output.