import axios from "axios"

//this utility will ass the authorixed users JWT to the request header
//any routes that are protected will require the jwr in order to access them


const setAuthToken = token =>{
    if(token){
        //apply the token to every request header

        axios.defaults.headers.common['Authorization'] = token
        console.log(axios.defaults.headers.common)
    }else{
        delete axios.defaults.headers.common["Authorization"];
    }
}
export default setAuthToken;