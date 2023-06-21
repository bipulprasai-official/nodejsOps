const express = require('express');
const router = require('./routes/routers');
const app = express();
const port = 4000;

app.use(router);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});

//Run app, then load http://localhost:port in a browser to see the output.