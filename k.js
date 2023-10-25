var d=Math.floor(Math.random()*100+1);
document.querySelector("#me").innerHTML=localStorage.getItem("me");
document.querySelector("#crush").innerHTML=localStorage.getItem("crush");
document.querySelector("#percent").innerHTML=d+"%";
localStorage.clear();

