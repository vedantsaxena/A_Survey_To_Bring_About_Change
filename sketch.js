var ball;
var database;
var pos;


function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    database = firebase.database();
    var dataref = database.ref("ball/position");
    dataref.on("value",readPos,shorror)
}

function draw(){
    background("yellow");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    database.ref("ball/position").set({
        x:pos.x+x,
        y:pos.y+y
    })
}
function readPos(data){
    pos = data.val();
    ball.x = pos.x;
    ball.y = pos.y;
}
function shorror(){
  console.log("nachos = coke")
}
