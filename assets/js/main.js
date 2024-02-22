// mail ex

const userEmail = prompt("Inserisci la tua email");

const emailList = ["a.vozzo95@gmail.com", "alessia2@gmail.com","funziono@funziono.com"];

let access = false;

for (let i = 0; i < emailList.length; i++) {
    if(emailList[i] === userEmail){
        access = true;
    }    
    
}

console.log(access);