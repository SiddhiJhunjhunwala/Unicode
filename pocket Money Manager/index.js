document.getElementById("manage").onclick=function(){
    var x="";
    x=document.getElementById("f1").value; //savings

    var y="";
    y=document.getElementById("f2").value; //expenditure
    var z="";
    z=document.getElementById("f3").value; //description
    var balance="";
    balance=x-y;
    // console.log(x);
    
    document.getElementById("savings").textContent=x;
    document.getElementById("expense").textContent=y;
    document.getElementsByClassName("balance").textContent=balance;
    // alert(balance);
    if(balance<0){
        document.getElementsByClassName("balance").style.color="red";
    }
    if(balance=0){
        document.getElementsByClassName("balance").style.color="red";
    }
    if(balance>0){
        document.getElementsByClassName("balance").style.color="green";
    }
    document.getElementById("describe").innerHTML=innerHTML+"\n"+z;
}
