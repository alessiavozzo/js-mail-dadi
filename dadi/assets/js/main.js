// ex dadi

const maxNumber = 6


const h1Element = document.querySelector("h1");

const btnPlay = document.querySelector(".btn-play")

const userDice = document.querySelector(".number-left")

const computerDice = document.querySelector(".number-right")



btnPlay.addEventListener("click", function(){
    
    const userNumber = Math.floor(Math.random() * maxNumber) + 1;
    //console.log(userNumber);
    
    const computerNumber = Math.floor(Math.random() * maxNumber) + 1;
    //console.log(computerNumber);
    
    userDice.innerHTML = userNumber
    computerDice.innerHTML = computerNumber

    let winner;

    if(userNumber > computerNumber){
        winner = "You win!"
        userDice.style.color = "green"
        computerDice.style.color = "black"
    }
    
    else if (userNumber < computerNumber){
        winner = "Loser..."
        computerDice.style.color = "green"
        userDice.style.color = "black"
    }
    
    else if (userNumber === computerNumber){
        winner = "It's a tie...loser"
    }

    h1Element.innerHTML = winner

})





