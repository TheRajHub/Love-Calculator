var me=document.getElementById("ME");
var crush=document.getElementById("crush");
function val(){
    if(me.value==""||crush.value==""){
        alert("Dont leave the text box Empty");
        return false;
    }
    else{
        localStorage.setItem("me",me.value);
        localStorage.setItem("crush",crush.value);
        return true;
    }
}


