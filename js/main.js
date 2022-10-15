const canvas = $("#trolley")[0];
const ctx = canvas.getContext("2d");

// data needed
let choices = ["linux", "kabanosy"]

// Draw the image
var template = new Image();
template.onload = () => ctx.drawImage(template, 0, 0); 
template.src = '/assets/trolley.png';

// Hide the game ui until the game starts
$("#game, .game").hide() 
$("button").click(() => roundIter());
$("#start > button").click(() => {
    $("#game, .game").show();
    $("#start").hide(); 
})

//https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

function roundIter() {
    
    shuffle(choices);
    $("#game > button").map((i, e) => {e.innerText = choices[i]});

    let upperText = [{text: choices[0], color: "black", font: "Roboto"}];
    let lowerText = [{text: choices[1], color: "black", font: "Roboto"}];

    ctx.drawImage(template, 0, 0);
    textBox(ctx, 750, 180, 300, 100, upperText, 90, [1, 1]);
    textBox(ctx, 750, 400, 300, 100, lowerText, 90, [1, 1]);

}