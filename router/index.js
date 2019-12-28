const express = require('express');
const router = express.Router();

const signin = require('./signin/index');

router.use('/signin', signin);



router.get('/', (req, res)=>{
    res.sendFile(__dirname, "../index.html");
})



module.exports = router;