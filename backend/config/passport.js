require("dotenv").config()

//a passport strategy for authenticating with a json web token
//this allows to authenticate endpoint using token
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const { deserializeUser } = require("passport");
const User = mongoose.model("User")
//options is an object literal containing options to control
// how the token is extracted from tje request or verified
const options = {}

//jwtFromRequest (REQUIRED) function that accepts a resuest as the 
//only parameter and returns either the jwt as a string or null

//fromAuthHeaderAsBearerToken creates an extractor that looks for the JWT in the auth header
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
options.secretOrKey = process.env.JWT_SECRET;

module.exports = (passport) => {
    passport.use(new JwtStrategy(options, (jwt_payload, done)=>{
        User.findById(jwt_payload.id)
        //jwt_payload is an object literal containing the decoded JWT payload
        //done is a passport callback that has error first as an argument
        .then(user => {
            if(user) {
                //if the user is found return null
                return done(null, user)
            }else{
            //if no user found
            return done(null, false)
            }
        })
        .catch(error => console.log(error))
    }))
}