const express = require('express')
const mysql = require('mysql2')

const  connection = mysql.createConnection({
    host: '', //localhost
    user: '', //default user
    password: '', //password if set  else leave blank
    database: '' //database name
}) 

connection.connect((err) =>{
    if(!err){
        console.log('connected to database')
    }else{
        console.log(err)
    }
})





module.exports = connection