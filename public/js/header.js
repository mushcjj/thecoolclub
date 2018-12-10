var vm;

$(function(){
  //1. 动态创建link引用header.css
  $("<link rel='stylesheet' href='css/cart.css'>").appendTo("head")
  $("<link rel='stylesheet' href='css/shopping.css'>").appendTo("head")
  //2. ajax请求header.html片段
  $.ajax({
    url:"http://localhost:9090/header.html",
    type:"get",
    success:function(res){
      $("#header").replaceWith(res);
      vm=new Vue({
        el:"#header",
        data:{
          islogin:false,
          uname:"",
          isActive:false,
          uid:null,
          carts:[],
          cartCount:0,
          
        },
        mounted(){//在new Vue()实例对象创建完自动执行

          if(location.search.indexOf("kwords")!=-1){
            this.kword=decodeURI(
              location.search.split("=")[1]
            )
          }

          this.uid=sessionStorage.getItem("uid");
          //console.log(this.uid)
          if(this.uid!=null){
            this.islogin=true
          }else{
            this.islogin=false;
          }

          this.loadCart()
          
          window.addEventListener("scroll",this.scroll)
          
         
        },
        
        computed:{
          getCartSum(){
            var sum = 0;
            for(var item of this.carts){
              sum += item.count * 16.95
            }
            return sum.toFixed(2);
          }
        },
        methods:{
          loadCart(){
            $.ajax({
              url:"http://127.0.0.1:9090/cart/items?uid="+this.uid,
              type:"get",
              dataType:"json",
              success:res=>{
                this.carts=res 
                //console.log(this.carts)
                for(var item of this.carts){
                  this.cartSum += item.count;
                }
                //console.log(this.cartSum)
                this.cartCount=this.carts.length
              }
            })
          },
          search(i){//@click   @keyup
              location.href=
                "list.html?kwords="+i;
               // console.log(i)
          },
          signout(){
            $.ajax({
              url:"http://localhost:9090/users/signout",
              type:"get",
              success:()=>{       
                this.islogin=false 
                sessionStorage.clear();
                this.cartCount=0;
                location.reload();
              }
            })
          },
          //头部的颜色替换事件
          scroll(){
            let _this=this;
            var st=document.documentElement.scrollTop;
            if(st){
              _this.isActive=true;
            }else{
              _this.isActive=false;
            }       
          },
          showCart(){
            this.$refs.cart.style.display="block"
          },
          closeCart(){
            this.$refs.cart.style.display="none"
          },
          tologin(){
            location.href=`login.html?back=${location.href}`
          } ,
          tolist(){
            location.href="list.html?kwords=1"
          },
          add(pid){
            for(var item of this.carts){
              if(item.pid==pid){
                item.count++;
                $.ajax({
                  url:`/cart/update?iid=${item.iid}&count=${item.count}`,
                  type:"get",
                  success:(res)=>{
                      //location.reload();
                      console.log(res)
                  }
                })
                break;
              }
            }
          },
          sub(pid){
            for(var i=0;i<this.carts.length;i++){
              if(this.carts[i].pid==pid){
                this.carts[i].count--;
                if(this.carts[i].count==0){
                  confirm("Do you want to delete it?");
                  $.ajax({
                    url:`/cart/update?iid=${this.carts[i].iid}&count=${this.carts[i].count}`,
                    type:"get",
                    success:(res)=>{
                        //location.reload();
                        console.log(res)
                    }
                  })
                  this.carts.splice(i,1);
                }else{
                  $.ajax({
                    url:`/cart/update?iid=${this.carts[i].iid}&count=${this.carts[i].count}`,
                    type:"get",
                    success:(res)=>{
                        //location.reload();
                        console.log(res)
                    }
                  })
                }
                break;
              }
            }
          }
          
        }
      })
    }
  })
})




 // 特效
 var element = $('#square');
 // when mouseover execute the animation
 element.mouseover(function(){
   // the animation starts
   element.toggleClass('wobble animated');
   // do something when animation ends
   element.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){ 
   // trick to execute the animation again
   $(e.target).removeClass('wobble animated');
   });  
 });

 //特效