
    var sideme=document.getElementById("sidemenu");
function openmenu(){
    sideme.style.right="0";
}
function closemenu(){
    sideme.style.right="-200px";
}

window.onscroll=function(){
    scrollFunction()
};
var menu=document.getElementById("category");
function scrollFunction(){
if(document.body.scrollTop>20 || document.documentElement.scrollTop>20){
    menu.style.top="-200px";
}
else{
    menu.style.top="69px";
}
}