require("dotenv").config()
const express = require("express")
const app = express();
const cors = require("cors")
const port = process.env.PORT || 8000
const passport = require("passport")

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
//passport middleware
app.use(passport.initialize());

require("./confige/passport")(passport)

app.get("/", (req, res)=>{
    res.status(200).json({message: " Smile, you're being watched from the backend👀"})
    // res.send("Backend home route")
})

app.listen(port, ()=>{
    console.log("I couldnt see what rome typed in time")
})