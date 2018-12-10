const express=require("express")
const router=express.Router()
const pool=require("../pool")

//测试地址: http://localhost:9090/products?kwords=1&pno=0
router.get("/",(req,res)=>{
           //bodyParser:url.parse(req.url,true)
  var kwords=req.query.kwords;
  var pno=req.query.pno
  //要回发客户端的支持分页的对象
  var output={ pageSize:9 } //每页9个商品
  output.pno=pno;
  var sql="select * from tcc_products where fid=?";
  pool.query(sql,[kwords],(err,result)=>{
    if(err) console.log(err);
    output.count=result.length;//获得总记录数
    output.pageCount=Math.ceil(//计算总页数
      output.count/output.pageSize);
    output.products=//截取分页后的结果集
      result.slice(output.pno*9,output.pno*9+9);

    res.writeHead(200,{
      "Content-Type":"application/json;charset=utf-8",
      "Access-Control-Allow-Origin":"*"
    })
    res.write(JSON.stringify(output))
    res.end()
  })
  //测试地址... products?kwords=i5&pno=1
})

module.exports=router;