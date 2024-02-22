// ex dadi

const maxNumber = 6

const userNumber = Math.floor(Math.random() * maxNumber) + 1;
console.log(userNumber);

const computerNumber = Math.floor(Math.random() * maxNumber) + 1;
console.log(computerNumber);

if(userNumber > computerNumber){
    console.log("Hai vinto!");
}

else if (userNumber < computerNumber){
    console.log("Ha vinto il computer");
}

else if (userNumber === computerNumber){
    console.log("Pareggio");
}
