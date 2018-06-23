let express = require('express'),
    router = express.Router(),
    api = require('./api');

router.post('/json',api.updateJson, (req,res)=>{
    res.send("Updated Json");
});

module.exports = router;