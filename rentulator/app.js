var express     = require("express"),
    app         = express(),
    bodyParser=require("body-parser");

app.get("/",function(req,res){
	res.render("rent");
})

app.listen(3000 || process.env.PORT, process.env.IP, function(){
   console.log("The inCollege Server Has Started !!");
});