//鼠标点击扑克牌事件
//图片加入stand类，并加入购买div
var pic=document.getElementsByName("cards")[0]


pic.onclick=function () {

    var pic = this;
    var buy = pic.nextElementSibling;
    if (pic.className !== "stand"){
        pic.className = "stand"
         buy.className = "";
        pic.style.transform="skewX(0deg)"
        pic.style.width="180px";
        pic.style.height="250px";
    }else{
        pic.className="";
        pic.style.width="150px";
        pic.style.height="220px";
        pic.style. transform="skewX(-8deg)";
        buy.className="buy";
    }
}
