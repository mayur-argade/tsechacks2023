const app = require('./app')
const connectdb = require('./config/connectdb');

require('dotenv').config();

// connection with database
connectdb();

//creating basic server
app.listen(process.env.PORT, ()=>{
    console.log(`server is running at port: ${process.env.PORT}`);
})
