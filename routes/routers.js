const express = require('express')
const router = express.Router()
router.get('/', (req, res) => {
    res.send('Hello today will be learning about github and jenkin');
});
module.exports = router;