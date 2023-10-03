var main=document.querySelector("#main");
var cursor=main.querySelector(".circle");

main.addEventListener("mousemove", function(detsils){

    cursor.style.left=detsils.x+"px";
    cursor.style.top=detsils.y+"px";

})