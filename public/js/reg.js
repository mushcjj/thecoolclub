var vm = new Vue({
    el:"#reg-app",
    data:{
        uname:"",
        upwd:"",reupwd:"",
        phone:"",

        isuname:false,unameRes:"",
        isupwd:false,upwdRes:"",
        isreupwd:false,reupwdRes:"",
        isphone:false,phoneRes:"",
        iscode:false,codeRes:"",

        code:"",
        sum:"",
    },
    methods:{
        reg(){
            //console.log(this.uname,this.upwd,this.phone)
            //console.log(this.isuname,this.isupwd,this.isreupwd,this.isphone,this.iscode)
            if(this.isuname&&this.isupwd&&this.isreupwd&&this.isphone&&this.iscode){
                $.ajax({
                    url:"http://127.0.0.1:9090/users/reg",
                    data:{uname:this.uname,upwd:this.upwd,phone:this.phone},
                    type:"post",
                    dataType:"json",
                    success:(res)=>{
                        //console.log(res)
                        if(res.code==1){
                            confirm("back to login")
                            location.href="login.html"
                        }else{
                            alert("user has exised")
                        }
                    }    
                })
            }else{
                alert("has error with message!")
            }
            
        },
        unameBlur(){
            var unameReg =/^\w{3,18}$/
            if(this.uname==""){
                this.isuname=false
                this.unameRes="Can't be empty!"
            }else if(unameReg.test(this.uname)){
                this.isuname=true
                this.unameRes="✔"
            }else{
                this.isuname=false
                this.unameRes="3~8 leters or digits"
            }
        },
        upwdBlur(){
            var upwdReg = /^\w{6,18}$/
            if(this.upwd==""){
                this.isupwd=false
                this.upwdRes="Can't be empty!"
            }else if(upwdReg.test(this.upwd)){
                this.isupwd=true
                this.upwdRes="✔"
            }else{
                this.isupwd=false
                this.upwdRes="6~18 leters or digits"
            }
        },
        reupwdBlur(){
            if(this.reupwd==this.upwd){
                this.isreupwd=true
                this.reupwdRes="✔"
            }else{
                this.isreupwd=false
                this.reupwdRes="Input password again!"
            }
        },
        phoneBlur(){
            var phoneReg = /^[0-9]{11}$/
            if(this.phone==""){
                this.isphone=false
                this.phoneRes="Can't be empty!"
            }else if(phoneReg.test(this.phone)){
                this.isphone=true
                this.phoneRes="✔"
            }else{
                this.isphone=false
                this.phoneRes="Input current phone!"
            }
        },
        codeBlur(){
            var upperCode = this.code.toUpperCase();
            var upperSum = this.sum.toUpperCase();
            //console.log(upperCode,upperSum)
            if(this.code==""){
                this.codeRes="Can't be empty!";
                this.iscode=false;
            }else if(upperCode==upperSum){
                this.codeRes="✔"
                this.iscode=true;
            }else{
                this.iscode=false;
                this.codeRes=""
                this.getNext();
            }
        },




        getNext(){
            //验证码
            var c3=document.getElementById("c3");
            var ctx=c3.getContext("2d");
            ctx.fillStyle=rc(180,233);
            ctx.fillRect(0,0,120,30);
            var pool="ABCDEFGHIJKLMN1234567890abcdefjhizklmnopqrstuvwxyz";
            var sum=""
            for(var i=0;i<4;i++){
                var c=pool[rn(0,pool.length)];
                ctx.textBaseline = "top";
                ctx.fillStyle = rc(80,180);
                ctx.font = "20px SimHei";
                ctx.fillText(c,i*25+5,5);
                sum += c;
            }
            this.sum=sum
            console.log(this.sum)
            for(var i=0;i<5;i++){
                ctx.strokeStyle = rc(0,255);
                ctx.beginPath();
                ctx.moveTo(rn(0,120),rn(0,30));
                ctx.lineTo(rn(0,120),rn(0,30));
                ctx.stroke();
            }
            for(var i=0;i<20;i++){
                ctx.fillStyle = rc(0,255);
                ctx.beginPath();
                ctx.arc(rn(0,120),rn(0,30),0.5,0,2*Math.PI);
                ctx.fill();
            }
            function rn(min,max){
                var n = Math.random()*(max-min)+min
                return Math.floor(n)
            }
            function rc(min,max){
                var r = rn(min,max);
                var g = rn(min,max);
                var b = rn(min,max);
                return `rgb(${r},${g},${b})`;
            }
        }
    },
    mounted(){
        this.getNext();
        
        
        
        
    }

})



































