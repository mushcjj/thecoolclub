var vm=new Vue({
    el:"#products-list",
    data(){
        return {
            kword:"",
            pno:0,
            pageCount:1,
            total:0,
            list:[]
        }
    },
    methods:{
        handleCurrentChange(val){
            //console.log(val)
            this.pno=val-1
            //console.log(this.pno)


            $.ajax({
                url:`http://localhost:9090/products?kwords=${this.kword}&pno=${this.pno}`,
                type:"get",
                success:(res)=>{
                    console.log(res)
                    this.pageCount=res.pageCount
                    this.total=res.count
                    this.list=res.products
                    console.log(this.list)
                }
            })

        },
        jump(i){
            console.log(i)
            location.href="details.html?pid="+i
        }
    },
    mounted(){
        //alert("舰艇成功")
        if(location.search.indexOf("kwords=")!=-1){
            this.kword=decodeURI(location.search.split("=")[1])
            
        }
        $.ajax({
            url:`http://localhost:9090/products?kwords=${this.kword}&pno=${this.pno}`,
            type:"get",
            success:(res)=>{
                console.log(res)
                this.pageCount=res.pageCount
                this.total=res.count
                this.list=res.products
                console.log(this.list)
            }
        })
        
    },
    updated(){
        
    }
})


       