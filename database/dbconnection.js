var mysql=require('mysql');

var cnn=mysql.createPool({
 
    host:'localhost',
    user:'root',
    password:'',
    database:'mattress'
    
   });
    module.exports=cnn;