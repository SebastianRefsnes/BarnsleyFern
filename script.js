canvas = document.getElementById("BernCanv");
ctx = canvas.getContext("2d");
ctx.fillStyle = "black";
ctx.fillRect(0,0,canvas.width,canvas.height);
let points = {x:0,y:0,left:0,right:0,mid:0};

setInterval(draw, 1);

function newPoints(x,y){
  random = Math.random();
  let oldX = x;
  let oldY = y;
  let coords = {x:0,y:0,left:0,right:0,mid:0};


  if(random < 0.01){
    //Do 1% Matrix calculation
    coords.x = 0;
    coords.y = 0.16 * oldY;
    coords.right = 0;
    coords.left = 0;
    coords.mid = 1;


  }else if(random < 0.86){
    //Do 85% Matrix calculation
    coords.x = (0.85 * oldX) + (0.04 * oldY);
    coords.y = (-0.04 * oldX) + (0.85 *oldY) +1.6;
    coords.right = 0;
    coords.left = 0;
    coords.mid = 0;

  } else if(random < 0.93){
    //Do 7% Matrix calculation
    coords.x = (0.2 * oldX) - (0.26 * oldY);
    coords.y = (0.23 * oldX) + (0.22 * oldY) + 1.6;
    coords.left = 0;
    coords.right = 1;
    coords.mid = 0;

    }else{
    //Do 7% Matrix calculation
    coords.x = (-0.15 * oldX) + (0.28 * oldY);
    coords.y = (0.26 * oldX) + (0.24 * oldY) + 0.44;
    coords.right = 0;
    coords.left = 1;
    coords.mid = 0;
    }
    return(coords);
  }

  function map(value,start1,stop1,start2,stop2){
    return (value - start1) / (stop1-start1) * (stop2-start2) + start2;
  }

  function draw(){
     for(let j = 0; j < 10000; j++){
    // ctx.fillStyle = "rgba(255,255,0,0.1)";
    // if(points.right == 1){
    //   ctx.fillStyle = "rgba(255,0,0,1)";
    // }else if (points.left == 1){
    //   ctx.fillStyle = "rgba(0,0,255,1)";
    // }else if (points.mid == 1){
    //   ctx.fillStyle = "rgba(255,255,255,1)"
    // }
    Math.random() < 0.5 ? ctx.fillStyle = "rgba(0,150,0,0.8)" : ctx.fillStyle = "rgba(200,200,200,0.5)"
    ctx.beginPath();
    //ctx.fillRect(map(points.x,-2.1820,2.6558,0,canvas.width), map(points.y,0,9.9983,canvas.height,0), 0.01, 0.01 );
    ctx.arc(map(points.x,-2.1820,2.6558,0,canvas.width),map(points.y,0,9.9983,canvas.height,0) ,.05 ,0 , Math.PI*2);
    ctx.fill();
    points = newPoints(points.x,points.y);
  }
  }
