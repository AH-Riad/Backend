const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.listen (port, ()=>{
    console.log(`App is listening on port ${port}`);
});

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req,res)=>{
    res.render("home.ejs");
});

app.get("/hello", (req, res)=>{
    res.send("hello! This is a  test path");
});

//Roll dice
app.get("/rolldice",(req,res)=>{
    let diceVal=Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{diceVal});
}); 

//Instagram
app.get("/ig/:username", (req, res)=>{
    const instData = require("./data.json");
    let {username} = req.params;
    const data = instData[username];
    console.log(data);
    if(data){
        res.render ("insta.ejs", {data});
    }else{
        res.render("error.ejs");
    }

    // console.log(instData);
    // const followers =  ["Adam", "Bob","Steve", "Abc"];
    // let {username} = req.params;
    // console.log(username);
    // res.render("insta.ejs", { username, followers });
});



 
app.get("/*", (req, res)=>{
    res.send("Error404: Web page could not be found");
});