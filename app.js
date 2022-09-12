const randomNumber1 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);

document.querySelectorAll("img")[0].setAttribute("src",`images/dice${randomNumber1}.png`);

const randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber2);

document.querySelectorAll("img")[1].setAttribute("src",`images/dice${randomNumber2}.png`);

//If else statement //

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Win ahhhh";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Win ahhhh";
} else {
    document.querySelector("h1").innerHTML = "Draw"
}
