var randomnumber1 = Math.floor(Math.random()*6)+1;  //random number generation
var randomnumber2 = Math.floor(Math.random()*6)+1;


var randomImage1 = "./images/dice" + randomnumber1 + ".png";             //updating dice values
document.querySelectorAll("img")[0].setAttribute("src" , randomImage1);

var randomImage2 = "./images/dice" + randomnumber2 + ".png";             //updating dice values
document.querySelectorAll("img")[1].setAttribute("src" , randomImage2);


if(randomnumber1 > randomnumber2) {                                     //checking the results
    document.querySelector("h1").innerHTML="🚩Player 1 Wins!";
}
else if(randomnumber1 < randomnumber2) {
    document.querySelector("h1").innerHTML="Player 2 Wins!🚩";
}
else {
    document.querySelector("h1").innerHTML="Draw!";
}