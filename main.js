var canvas = new fabric.Canvas('myCanvas');

var playerx = 30;
var playery = 30
;

var block_height = 30;
var block_width = 30;

var player_object = "";
var block_object = "";

function player_update() {
    fabric.Image.fromURL("player.png", function(img) {
            player_object = img;
            player_object.scaleToWidth(150);
            player_object.scaleToHeight(150);
            player_object.set({
                top: playery,
                left: playerx
            });
            canvas.add(player_object)
        }

    );
}

function new_image(get_img) {
    fabric.Image.fromURL(get_img, function(img) {
        block_object = img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top: playery,
            left: playerx
        });
        canvas.add(block_object);
    });
}
canvas.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    if (keyPressed == "38") {
        up();
    }
    if (keyPressed == "40") {
        down();
    }
    if (keyPressed == "37") {
        left();
    }
    if (keyPressed == "39") {
        right();
    }
    if (keyPressed == "87") {
        new_image("wall.jpg");
        console.log("w");

    }

if (keyPressed == '71') {
    new_image('ground.png');
    console.log("g");
}
if (keyPressed == '76') {
    new_image('light_green.png');
    console.log("l");
}
if (keyPressed == '84') {
    new_image('trunk.jpg');
    console.log("t");
}
if (keyPressed == '82') {
    new_image('roof.jpg');
    console.log("r");
}
if (keyPressed == '89') {
    new_image('yellow_wall.png');
    console.log("y");
}
if (keyPressed == '68') {
    new_image('dark_green.png');
    console.log("d");
}
if (keyPressed == '85') {
    new_image('unique.png');
    console.log("u");
}
if (keyPressed == '67') {
    new_image('cloud.jpg');
    console.log("c");
}
if (e.shiftKey == true && keyPressed == '80') {
    console.log("p and shift pressed together");
    block_width = block_width + 10;
    block_height = block_height + 10;
    document.getElementById("Current_Width").innerHTML = block_width;
    document.getElementById("Current_Height").innerHTML = block_height;
}
if (e.shiftKey && keyPressed == '77') {
    console.log("m and shift pressed together");
    block_width = block_width - 10;
    block_height = block_height - 10;
    document.getElementById("Current_Width").innerHTML = block_width;
    document.getElementById("Current_Height").innerHTML = block_height;
}
}

                       