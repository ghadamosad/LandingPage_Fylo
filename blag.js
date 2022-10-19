function validation(){
    let form=document.getElementById("form");
    let email= document.getElementById("email").value;
    let text = document.getElementById("text");
    let pattern= /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;;
    if(email.match(pattern)){
        text.innerHTML = "Your Email Is Valid";
        text.style.color="#00ff00"
    }
    else{
        text.innerHTML="Please Enter Valid Email";
        text.style.color = "#ff0000";
    }
    if(email == ""){
        text.innerHTML=" ";
        text.style.color = "#00ff00";
    }

}