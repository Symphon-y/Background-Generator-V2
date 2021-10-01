var h3HexVal1 = document.getElementById("hex1");
var h3HexVal2 = document.getElementById("hex2");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("random");
var copyHex1 = document.getElementById("CopyLColorBtn");
var copyHex2 = document.getElementById("CopyRColorBtn");


var colorPicker = function(){
    body.style.background =
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";

    h3HexVal1.textContent = "HEX: " + color1.value;
    h3HexVal2.textContent = "HEX: " + color2.value;
};


var randomPicker = function(){
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    var randomColor2 = '#'+Math.floor(Math.random()*16777215).toString(16);
    body.style.background =
    "linear-gradient(to right, " 
    + randomColor
    + ", " 
    + randomColor2 
    + ")";

    color1.value = randomColor;
    color2.value = randomColor2;
    

    h3HexVal1.textContent = "HEX: " + color1.value;
    h3HexVal2.textContent = "HEX: " + color2.value;
};


var copyLeftClr = function (text){
    var type = "text/plain";
    var blob = new Blob([h3HexVal1.textContent], { type });
    var data = [new ClipboardItem({ [type]: blob })];

    navigator.clipboard.write(data)
};

var copyRightClr = function (text){
    var type = "text/plain";
    var blob = new Blob([h3HexVal2.textContent], { type });
    var data = [new ClipboardItem({ [type]: blob })];

    navigator.clipboard.write(data)
};

copyHex1.addEventListener("click", copyLeftClr);
copyHex2.addEventListener("click", copyRightClr);
button.addEventListener("click", randomPicker);
color1.addEventListener("input", colorPicker);
color2.addEventListener("input", colorPicker);

