 import axios from 'axios' ;
 const instance = axios.create({
     baseURL:'https://git.heroku.com/live-tinder-backend.git'
 })
 export default instance;