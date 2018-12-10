const express=require("express")
const router=express.Router()
const pool=require("../pool")

router.get("/",(req,res)=>{
  var pid=req.query.pid;
  //console.log(pid);
  var output={details:{},products:[],fname:""};
  var sql1="SELECT * FROM tcc_products where pid=?";
  var sql2="select * from tcc_products where fid=(select fid from tcc_products where pid=?)"
  var sql3="select fname from tcc_products_family where fid=(select fid from tcc_products where pid=?)"
  Promise.all([
    new Promise(function(open){
      pool.query(sql1,[pid],(err,result)=>{
        if(err) throw err;
        //console.log(result[0])
        output.details=result[0]
        open();
        
      })
    }),
    new Promise(function(open){
      pool.query(sql2,[pid],(err,result)=>{
        if(err) throw err;
        //console.log(result)
        output.products=result;
        open();
      })
    }),
    new Promise(function(open){
      pool.query(sql3,[pid],(err,result)=>{
        if(err) throw err;
        //console.log(result)
        output.fname=result[0].fname;
        open()
      })
    })
  ]).then(()=>{
    res.writeHead(200,{
      "Content-Type":"application/json;charset=utf-8",
      "Access-Control-Allow-Origin":"*"
    })
    res.write(JSON.stringify(output));
    res.end();
    //console.log("响应完成!");
  })

  
})

module.exports=router;