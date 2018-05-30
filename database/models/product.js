var db=require('../dbconnection');

var prosucts={

    
    getcategory:function(id,callback){
    return  db.query('select p.*,c.* from mattress_product p,mattress_cat c where p.fk_cat_id=c.cid and c.cname=?' ,[id],callback);
    },
    getallcategory:function(callback){  
            return  db.query("select * from mattress_cat",callback);            
    },
    getallproduct:function(callback){  
        return  db.query("select * from mattress_product",callback);            
    },
    getproductById: function(id, callback) {
        return db.query("select * from mattress_product where id=?", [id], callback)
    },
    
};

module.exports=products;