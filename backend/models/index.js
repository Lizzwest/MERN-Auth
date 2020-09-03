const mongoose = require("mongoose")

//mongo connection
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
});

//mongoose connection object 
const db = mongoose.connection

//set up an event listener  to fire once when the connections "opens"
//console log what host and port its runnign

db.once("open", ()=>{
    console.log(`Connect to MongoDB at ${db.host}:${db.port}`)

})

db.on("error", (error)=>{
    console.log(`Database error\n${error}`)
})

module.exports.User = require('./User')