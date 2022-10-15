const canvas = $("#trolley")[0];
const ctx = canvas.getContext("2d");

// XD
// let goodThings = ["linux", "kabanosy", "coffee"]
let goodThings = [
    ["linux", "https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png"],
    ["kabanosy", "https://tarczynski.pl/upload/images/EXCLUSIVE-Cielece-BEZ-CIENIA-min_60488321cc681_m.png"],
    ["coffee", "https://img.cppng.com/download/2020-06/7-2-coffee-free-download-png.png"],
]
let badThings = [
    ["england", "https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/1200px-Flag_of_England.svg.png"],
    ["france", "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png"],
    ["ubuntu", "https://www.xilinx.com/content/xilinx/en/products/design-tools/embedded-software/ubuntu/_jcr_content/root/parsysFullWidth/xilinxflexibleslab/xilinxflexibleslab-parsys/xilinxcolumns_149128/childParsys-2/xilinximage.img.png/1629757312962.png"],
]
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
    
    // Good or bad option
    let array = (Math.floor(Math.random() * 2)) ? goodThings : badThings

    shuffle(array);
    $("#game > button").map((i, e) => {e.innerText = array[i][0]});

    let upperText = [{text: array[0][0], color: "black", font: "Roboto"}];
    let lowerText = [{text: array[1][0], color: "black", font: "Roboto"}];

    ctx.drawImage(template, 0, 0);    

    textBox(ctx, 750, 80, 300, 100, upperText, 50, [1, 1]);
    
    var img1 = new Image();
    img1.onload = () => ctx.drawImage(img1, 760, 180, 280, 180); 
    img1.src = array[0][1];
    
    textBox(ctx, 800, 550, 300, 100, lowerText, 50, [1, 1]);
    
    var img2 = new Image();
    img2.onload = () => ctx.drawImage(img2, 800, 400, 280, 180); 
    img2.src = array[1][1];

}