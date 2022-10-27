const { strictEqual } = require("assert");
const express = require("express");
const app = express();

const mysql = require("mysql");

const dotenv = require("dotenv");

dotenv.config();

var pool = mysql.createPool({
  // user: process.env.MYSQL_ACCOUNT,
  // password: process.env.MYSQL_PASSWORD,
  user: 'root',
  password: '',
  host: 'localhost',
  port: '3306',
  database: 'Shoppingcart',
  waitForConnections : true,
  connectionLimit : 10 //連線數上限
})

app.get("/api/test", () => {
  console.log("Api is sucessful")
})

pool.getConnection((err,connection) => {
  if(err){
    console.log(err)
  }else{
    console.log("Connection Sucessfully!")
  }
})

app.listen(process.env.PORT || 5000,() => {
  console.log("running!")
})
