new Vue({
    el:"#app-details",
    data(){
        return {
            pid:"",
            fname:"",
            details:{},
            products:[],pno:2,pbg:"",
            count:1,
            price:16.95,
            uid:"",
            islogin:false,
        }
    },
    methods:{
        add(){
            if(this.count<=9){
                this.count++
                this.price=(this.count*16.95).toFixed(2)
            }
        },
        del(){
            if(this.count>1){
                this.count--
                this.price=this.count*16.95
            }
        },
        padd(){
            //console.log(this.products.length)
            if(this.pno<(this.products.length-2)){
                this.pno++
                this.pbg=this.products[this.pno].color
            }
        },
        pdel(){
            if(this.pno>2){
                this.pno--
                this.pbg=this.products[this.pno].color
            }
        },
        addToCart(){
            this.uid=sessionStorage.getItem("uid")
            if(this.uid==null){
                confirm("please login first")
                location.href=`login.html?back=${location.href}`
            }else{
                $.ajax({
                    url:`/cart/add?pid=${this.pid}&uid=${this.uid}&count=${this.count}`,
                    type:"get",
                    success:(res)=>{
                        location.reload();
                        //console.log(res)
                    }
                })
            }
            
            
        }
    },
    mounted(){
        this.uid = sessionStorage.getItem("uid")
        
        if(location.search.indexOf("?pid=")!=-1){
            this.pid=decodeURI(location.search.split("=")[1])
        }
        $.ajax({
            url:`/details?pid=${this.pid}`,
            type:"get",
            success:(res)=>{
                this.details=res.details;
                this.fname=res.fname;
                this.products=res.products;
                //console.log(this.products)  
            }
        })
        if(sessionStorage.getItem("uid")==null){
            this.islogin=false;
        }else{
            this.islogin=true;
        }
        
        //对勾

        $(".bai").on("click",function(){
            var $btn=$(this)
            $btn.toggleClass("down")
        })

        //对勾

        //randow 
        var move = 0;
        var moved = 0;
        var moing = 0
        var movei = 0
        $(".slide-z").on("click",function(e){
            e.preventDefault()
            var a= $(this)
            var $ul = a.parent().find("ul")
            var len = $ul.children().length
            if(!$('.slide-z').is(".disabled")){
            movei--;
                $ul.css("marginLeft",movei*-370);
                $(".slide-y").removeClass("disabled")
                if(len-movei==len){
                a.addClass("disabled")
                }
            }
        })
        $(".slide-y").on("click",function(e){
            e.preventDefault();
            var a = $(this)
            var $ul = a.parent().find("ul")
            var len = $ul.children().length 
            if(!$('.slide-y').is(".disabled")){
                movei++;
                $ul.css("marginLeft",movei*-370)
                $(".slide-z").removeClass("disabled")
                if(movei==len-4){
                    a.addClass("disabled")
                }
            
            }
        })
    },
    
})