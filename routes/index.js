const express=require("express")
const router=express.Router()
const pool=require("../pool")

router.get("/getIndexProducts",(req,res)=>{
  var output=[]
  var sql1="SELECT * FROM tcc_products where fid=1"
  var sql2="SELECT * FROM tcc_products where fid=2"
  var sql3="SELECT * FROM tcc_products where fid=3"
  var sql4="SELECT * FROM tcc_products where fid=4"
  Promise.all([
    new Promise(function(open){
      pool.query(sql1,[],(err,result)=>{
        if(err) throw err;
        output[0]=result;
        open()
      })
    }),
    new Promise(function(open){
      pool.query(sql2,[],(err,result)=>{
        if(err) throw err;
        output[1]=result;
        open()
      })
    }),
    new Promise(function(open){
      pool.query(sql3,[],(err,result)=>{
        if(err) throw err;
        output[2]=result;
        open()
      })
    }),
    new Promise(function(open){
      pool.query(sql4,[],(err,result)=>{
        if(err) throw err;
        output[3]=result;
        open()
      })
    }),  

  ]).then(function(){
    
    res.writeHead(200,{
    "Content-Type":"application/json;charset=utf-8",
    "Access-Control-Allow-Origin":"*"
    })
    res.write(JSON.stringify(output));
    res.end();
    
  })
})
//接口地址: http://localhost:9090/index/getIndexProducts
module.exports=router;