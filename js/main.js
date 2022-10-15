const canvas = $("#trolley")[0];
const ctx = canvas.getContext("2d");

// XD
// let goodThings = ["linux", "kabanosy", "coffee"]
let goodThings = [
    ["linux", "https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png"],
    ["kabanosy", "https://tarczynski.pl/upload/images/EXCLUSIVE-Cielece-BEZ-CIENIA-min_60488321cc681_m.png"],
    ["coffee", "https://img.cppng.com/download/2020-06/7-2-coffee-free-download-png.png"],
    ["minecraft", "https://www.minecraft.net/content/dam/games/minecraft/key-art/Minecraft-xbox-one.jpg"],
    ["terraria", "https://cdn.akamai.steamstatic.com/steam/apps/105600/header.jpg?t=1664397885"],
    ["walter white", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsdNsgKnD9LVx4QCiLiZTnPYtfhRK7DA9jeQ&usqp=CAU"],
    ["walter blanco", "https://external-preview.redd.it/BKekod4BKey3e6EG1Q88DN2FfSQwvIoGDHcTWO3Tjmw.png?format=pjpg&auto=webp&s=d523e28d1f62fc634beb81b04ff3a045db3522f5"],
    ["the hicken bros", "https://upload.wikimedia.org/wikipedia/en/a/ae/Los_Pollos_Hermanos_logo.png"],
    ["celeste", "https://pbs.twimg.com/ext_tw_video_thumb/1580618652197715968/pu/img/g38C86wcIiIvHKo3.jpg"],
    ["bed", "https://cdn.shopify.com/s/files/1/0225/2528/0331/products/sydney_bed_natural_king-queen_1_2000x.jpg?v=1587146049"],
    ["jetstream sam", "https://i.ytimg.com/vi/ZJlb9KulMBk/maxresdefault.jpg"],
    ["sundowner", "https://i.kym-cdn.com/entries/icons/facebook/000/018/016/MGR_-_Best_of_Sundowner_0-14_screenshot.jpg"],
    ["Szymon Strumień Odrzutowy", "https://steamuserimages-a.akamaihd.net/ugc/1838033402829795098/E7E7C3411D3F025260E2C81C32516578B2C2CA48/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"],
    ["blåhaj", "https://www.ikea.com/pl/pl/images/products/blahaj-pluszak-rekin__0710175_pe727378_s5.jpg"],
    ["blåhaj junior", "https://www.ikea.com/pl/pl/images/products/blahaj-pluszak-maly-rekin__0716615_pe730956_s5.jpg"],
]
let badThings = [
    ["england", "https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/1200px-Flag_of_England.svg.png"],
    ["france", "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png"],
    ["ubuntu", "https://www.xilinx.com/content/xilinx/en/products/design-tools/embedded-software/ubuntu/_jcr_content/root/parsysFullWidth/xilinxflexibleslab/xilinxflexibleslab-parsys/xilinxcolumns_149128/childParsys-2/xilinximage.img.png/1629757312962.png"],
    ["anime", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Mao_Zedong_portrait.jpg/640px-Mao_Zedong_portrait.jpg"],
    ["javascript", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"],
    ["hungary", "https://i.natgeofe.com/k/16f3666f-97b3-4bc3-bbef-fff2b2084f71/mongolia-yurt_4x3.jpg"],
    ["calculus", "https://i.ytimg.com/vi/WsQQvHm4lSw/maxresdefault.jpg"],
    // ["", ""],
    // ["", ""],
    // ["", ""],
    // ["", ""],
    // ["", ""],
    // ["", ""],
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