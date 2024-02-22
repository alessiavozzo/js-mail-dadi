// mail ex

const emailList = ["a.vozzo95@gmail.com", "alessia2@gmail.com","funziono@funziono.com"];
const loginBtn = document.querySelector(".login-btn")


//const userEmail = prompt("Inserisci la tua email");

const emailInput = document.getElementById("email");
//console.log(typeof emailInput);

/* add event listener */

loginBtn.addEventListener("click", function(){
    
    const userEmail = emailInput.value;
    //console.log(typeof userEmail);
    //console.log(userEmail);
    
    let access = false;
    
    for (let i = 0; i < emailList.length; i++) {
        if(emailList[i] === userEmail){
            access = true;            
        }
    } 
    
    console.log(access);
    
    if(access === true){
        console.log("You can access");
    }
    
    else{
        console.log("You shall not pass");
    }

})