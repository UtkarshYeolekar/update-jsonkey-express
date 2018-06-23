let express = require('express'),
    bodyparser = require('body-parser'),
    app = express(),
    apiroutes = require('./apiroutes');


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use('/api',apiroutes);

app.get("/",(req,res)=>{
    res.send("Server Listening");
})


app.listen(4000,(err)=>{
if(err)
    return;
console.log("Server Started");
});