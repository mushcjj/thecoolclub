var vm=new Vue({
    el:"#index-products",
    data(){
        return {
            cars:[],cno:2,cbg:"rgb(251,207,169)",
            animals:[],ano:2,abg:"rgb(61,61,160)",
            people:[],pno:2,pbg:"rgb(91,184,183)",
            random:[],rno:2,rbg:"rgb(244,234,180)",    
        }
    },
    methods:{
        cadd(){
            if(this.cno<13){
                this.cno++
                this.cbg=this.cars[this.cno].color
                //console.log(this.cbg)
            }
        },
        cdel(){
            if(this.cno>2){
                this.cno--
                this.cbg=this.cars[this.cno].color
                //console.log(this.cbg)
            }
        },
        aadd(){
            if(this.ano<13){
                this.ano++
                this.abg=this.animals[this.ano].color
                //console.log(this.cbg)
            }
        },
        adel(){
            if(this.ano>2){
                this.ano--
                this.abg=this.animals[this.ano].color
                //console.log(this.cbg)
            }
        },
        padd(){
            if(this.pno<13){
                this.pno++
                this.pbg=this.people[this.pno].color
            }
        },
        pdel(){
            if(this.pno>2){
                this.pno--
                this.pbg=this.people[this.pno].color
            }
        },
        radd(){
            if(this.rno<7){
                this.rno++
                this.rbg=this.random[this.rno].color
            }
        },
        rdel(){
            if(this.rno>2){
                this.rno--
                this.rbg=this.random[this.rno].color
            }
        }
    },
    mounted(){
        $.ajax({
            url:"http://127.0.0.1:9090/index/getIndexProducts",
            success:(res)=>{
                //console.log(res)
                this.cars=res[0];
                this.animals=res[1]
                this.people=res[2]
                this.random=res[3]
               // console.log(this.cars)
            }
            
        })


        /***********************点击轮播 ***********************/

        //cars
        var move = 0;
        var moved = 0;
        var moing = 0
        var movei = 0
        $(".arrow-left").on("click",function(e){
            var myul = $(".cars>.containera>ul");
            var len = myul.children().length;
            e.preventDefault()
            var a= $(this)
            if(!$('.arrow-left').is(".disabled")){
                move--;
                myul.css("marginLeft",move*-370);
                $(".arrow-right").removeClass("disabled")
                if(len-move==len){
                a.addClass("disabled")
                }
            }
        })
        $(".arrow-right").on("click",function(e){
            var myul = $(".cars>.containera>ul");
            var len = myul.children().length;
            var a = $(this)
            e.preventDefault();
            if(!$('.arrow-right').is(".disabled")){
                move++;
                myul.css("marginLeft",move*-370)
                $(".arrow-left").removeClass("disabled")
                if(move==len-4){
                    a.addClass("disabled")
                
                }
               // console.log(move)
            }
        })

        //Animals 
        $(".arrow-prev").on("click",function(e){
            var a_ul =  $(".Animals>.containera>ul");
            var len =a_ul.children().length
            e.preventDefault()
            var a= $(this)
            if(!$('.arrow-prev').is(".disabled")){
                moved--;
                a_ul.css("marginLeft",moved*-370);
                $(".arrow-next").removeClass("disabled")
                if(len-moved==len){
                a.addClass("disabled")
                }
            }
        })
        $(".arrow-next").on("click",function(e){
            var a_ul =  $(".Animals>.containera>ul");
            var len =a_ul.children().length
            var a = $(this)
            e.preventDefault();
            if(!$('.arrow-next').is(".disabled")){
                moved++;
                a_ul.css("marginLeft",moved*-370)
                $(".arrow-prev").removeClass("disabled")
                if(moved==len-4){
                    a.addClass("disabled")
                
                }
            
            }
        })

        //people 
        $(".arrow-z").on("click",function(e){
            e.preventDefault()
            var a= $(this)
            var $ul = a.parent().find("ul")
            var len = $ul.children().length
            if(!$('.arrow-z').is(".disabled")){
                moing--;
                $ul.css("marginLeft",moing*-370);
                $(".arrow-y").removeClass("disabled")
                if(len-moing==len){
                a.addClass("disabled")
                }
            }
        })
        $(".arrow-y").on("click",function(e){
            e.preventDefault();
            var a = $(this)
            var $ul = a.parent().find("ul")
            var len = $ul.children().length 
            if(!$('.arrow-y').is(".disabled")){
                moing++;
                $ul.css("marginLeft",moing*-370)
                $(".arrow-z").removeClass("disabled")
                if(moing==len-4){
                    a.addClass("disabled")
                
                }
            }
        })


        //randow 
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

});










 



