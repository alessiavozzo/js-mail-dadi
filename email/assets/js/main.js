// mail ex

const emailList = ["a.vozzo95@gmail.com", "alessia2@gmail.com","funziono@funziono.com"];
const loginBtn = document.querySelector(".login-btn")


//const userEmail = prompt("Inserisci la tua email");

const emailInput = document.getElementById("email");
//console.log(typeof emailInput);

const h1Element = document.querySelector("h1");

const okMessage = "You can access!"
const noMessage = "You shall not pass!"

/* add event listener */

loginBtn.addEventListener("click", function(e){
    
    e.preventDefault()

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

    let returnMessage;
    
    if(access === true){
        console.log("You can access");
        returnMessage = okMessage;
        h1Element.classList.add("text-white");
        h1Element.classList.remove("text-danger", "display-3", "fw-bold");
    }
    
    else{
        console.log("You shall not pass");
        returnMessage = noMessage;
        h1Element.classList.add("text-danger", "display-3", "fw-bold");
        h1Element.classList.remove("text-white");
    }
    
    h1Element.innerHTML = returnMessage
    
})