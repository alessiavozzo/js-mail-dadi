// mail ex

const emailList = ["a.vozzo95@gmail.com", "alessia2@gmail.com","funziono@funziono.com"];

const userEmail = prompt("Inserisci la tua email");
let access = false;

for (let i = 0; i < emailList.length; i++) {
    if(emailList[i] === userEmail){
        access = true;
    }    
    
}

//console.log(access);

if(access === true){
    console.log("You can access");
}

else{
    console.log("You shall not pass");
}

