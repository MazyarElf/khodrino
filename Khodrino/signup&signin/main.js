let signupbtn=document.getElementById("signupbtn");
let signinbtn=document.getElementById("signinbtn");
let namefield=document.getElementById("namefield");
let title=document.getElementById("title");
let textinput=document.getElementById("textinput");
let telinput=document.getElementById("telinput");
let passinput=document.getElementById("passinput");
let logo=document.getElementById("logo");
var logoerror=0;
signinbtn.onclick=function(){
    namefield.style.maxHeight="0";
    title.innerHTML="ورود";
    signupbtn.classList.add("disable");
    signinbtn.classList.remove("disable");
}
signupbtn.onclick=function(){
    namefield.style.maxHeight="450px";
    title.innerHTML="ثبت نام";
    signinbtn.classList.add("disable");
    signupbtn.classList.remove("disable");
}
logo.onclick=function(){
    if(logoerror==9){
        alert("زیاد بزنی رو لوگو هیچی نمیشه");
        logoerror++
    }
    else if(logoerror>=19){
        alert("همینو میخواستی؟ قهر کرد");
        logo.style.visibility="hidden";
    }
    else{
        logoerror++
    }
}