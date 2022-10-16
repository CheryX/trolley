const canvas = $("#trolley")[0];
const ctx = canvas.getContext("2d");

// XD
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
    ["gordon freeman", "https://static.wikia.nocookie.net/half-life/images/3/3f/FreemanHL1.png/revision/latest?cb=20210424155951&path-prefix=en"],
    ["jesse pink", "https://static.wikia.nocookie.net/breakingbad/images/0/05/Season_2_-_Jesse.jpg"],
    ["waluigi", "https://mario.wiki.gallery/images/thumb/2/27/SuperMarioParty_Waluigi.png/1200px-SuperMarioParty_Waluigi.png"],
    ["wario", "https://upload.wikimedia.org/wikipedia/en/8/81/Wario.png"],
    // ["", ""], 
]
let badThings = [
    ["england", "https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/1200px-Flag_of_England.svg.png"],
    ["france", "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png"],
    ["ubuntu", "https://www.xilinx.com/content/xilinx/en/products/design-tools/embedded-software/ubuntu/_jcr_content/root/parsysFullWidth/xilinxflexibleslab/xilinxflexibleslab-parsys/xilinxcolumns_149128/childParsys-2/xilinximage.img.png/1629757312962.png"],
    ["anime", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Mao_Zedong_portrait.jpg/640px-Mao_Zedong_portrait.jpg"],
    ["javascript", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"],
    ["hungary", "https://i.natgeofe.com/k/16f3666f-97b3-4bc3-bbef-fff2b2084f71/mongolia-yurt_4x3.jpg"],
    ["calculus", "https://i.ytimg.com/vi/WsQQvHm4lSw/maxresdefault.jpg"],
    ["tuff golem", "https://minecraft-tutos.com/wp-content/uploads/2022/10/minecraft-tuff-golem.png"],
    ["rascal", "https://www.minecraft.net/content/dam/games/minecraft/screenshots/rascal_Tile_1x1_277x277.jpg"],
    ["sniffer", "https://preview.redd.it/61vyudktptr91.png?auto=webp&s=d60bbdee9e2ad1d08415d98b1679ec21b0cf4634"],
    ["spanish people", "https://media.istockphoto.com/photos/frenchman-with-french-baguettes-picture-id108224580?k=20&m=108224580&s=612x612&w=0&h=xVpZq1ArRq_UJJdISrWYMn45lBORs2-3afoY7x5u2KI="],
    ["french", "https://i.pinimg.com/originals/0d/28/46/0d2846c03ee4353c5f771dbe6853535c.jpg"],
    ["mistral (she is french)", "https://static.wikia.nocookie.net/metalgear/images/a/a1/MistralPortrait.png"],
    ["trygonometry", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Circle-trig6.svg/1200px-Circle-trig6.svg.png"],
    ["the german language", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Legal_status_of_German_in_Europe.svg/1200px-Legal_status_of_German_in_Europe.svg.png"],
    ["regex", "https://www.computerhope.com/jargon/r/regular-expression.gif"],
    ["c++", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png"],
    ["arch linux", "https://cdn0.iconfinder.com/data/icons/flat-round-system/512/archlinux-512.png"],
    ["the collatz conjecture", "https://w7.pngwing.com/pngs/933/793/png-transparent-collatz-conjecture-mathematics-theorem-sequence-looking-up-blue-computer-wallpaper-graph-of-a-function.png"],
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

const delay = ms => new Promise(res => setTimeout(res, ms));
async function roundIter() {
    
    // Good or bad option
    let array = (Math.floor(Math.random() * 2)) ? goodThings : badThings

    shuffle(array);
    $("#game > button").map((i, e) => {e.innerText = array[i][0]});
    await $("#game > button").attr('disabled','disabled');

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

    await delay(200);
    await $("#game > button").removeAttr('disabled');

}