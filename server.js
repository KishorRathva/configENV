// const dotenv = require('dotenv');
// dotenv.config();
const {
    port,
    masterKey
} = require('./config/config');
console.log(`your port is ${process.env.PORT}`);
console.log(`your API_KEY is ${process.env.API_KEY}`);



// The dotenv.config()
// function from the dotenv npm package will read the.env file, assign the variables to process.env, and
// return an object(named parsed) containing the content.it will also
// throw an error
// if it failed.