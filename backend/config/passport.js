require("dotenv").config()

//a passport strategy for authenticating with a json web token
//this allows to authenticate endpoint using token
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const { deserializeUser } = require("passport");
const User = mongoose.model("User")

const options = {}
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
options.secretOrKey = process.env.JWT_SECRET;

module.exports = (passport) => {
    passport.use(new JwtStrategy(options, (jwt_payload, done)=>{
        User.findById(jwt_payload.id)
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