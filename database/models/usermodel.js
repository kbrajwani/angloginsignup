var db=require('../dbconnection');

var users={

    
    user_login:function(user,callback){
    return  db.query('select * from user_tbl where email=? and password=?',[user.email,user.password],callback);
    },
    sign_up:function(user,callback){
        
        return db.query('insert into user_tbl values(?,?,?,?,?,?,?,?,?)',[user.email,user.uname,user.password,user.address,user.mobile_no,user.gender,null,null,null],callback);
    },
    getalluser:function(callback){  
            return  db.query("select * from user_tbl",callback);
            console.log("hey");
    },
    getUsersById: function(id, callback) {
        return db.query("select * from user_tbl where email=?", [id], callback)
    },
    updateUsers: function(id, User, callback) {
        return db.query("update user_tbl set uname=?,gender=?,mobile_no=? where email=?", [User.uname, User.gender, User.mobile,id], callback);
    },
    changePassword: function(id, User, callback) {
        return db.query("update user_tbl set password=? where email=?", [User.password, id], callback);
    }
};

module.exports=users;