
const {Client}=require("pg")
const express = require('express')
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))
require('dotenv').config()
const client = new Client({
    host: "localhost",
    user: "postgres",
    port:5432,
    password: process.env.PG_PASSWORD,
    database: "dvdrental"
})


client.connect();

//asynchro side to pass the api
app.get('/',async(req,res)=>{
    try{
        const dvd =  await client.query('SELECT * FROM actor');
        res.json(dvd.rows);
    } 
    catch(err){
        console.log(err.message)
    }
})

//synchro side to test the query
client.query(`Select * from actor`,(err,res)=>{
    if(!err){
        console.log(res.rows);
    }
    else{
        console.log(err.message);
    }
    client.end;

})

// listen for the client side port
app.listen(process.env.PORT || 3000, ()=>{
    console.log("server has started on port 3000")
})