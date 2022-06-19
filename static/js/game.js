const radius = 30;
const gap = 10;
var magicNumber = 3;
var numRight = 0;
var numWrong = 0;
var numMissed = 0;
//var colors = ["rgb(80,81,79)", "rgb(242,95,92)", "rgb(255,224,102)", "rgb(36,123,160)", "rgb(112,193,179)", "rgb(149,102,225)"]
//var CurrentColor = "rgb(36,123,160)"
var colors = ["red", "green", "blue", "yellow", "black"]
var CurrentColor = "blue"

var canvas;
var ctx;

var GameFirstClick = 0;
var GameLastClick = 0;

var components = [];

 (function repeat() {
    magicNumber = Math.floor(Math.random()*8)+1;
    //CurrentColor = colors[Math.floor(Math.random()*colors.length)];
    setTimeout(repeat, 7000);
})(); 

function start() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    canvas.addEventListener('click', (e) => {
        mousePoint = getCursorPosition(e);

        GameLastClick = Date.now(); 
        if (GameFirstClick==0){
            GameFirstClick = Date.now();
        }

        components.forEach(circle => {
            if (isIntersect(mousePoint, circle)) {
                var correctText = ":)";
                var incorrectText = ":(";
                if (circle.color == CurrentColor)
                {
                    circle.text = correctText;
                    //circle.color = "rgb(100,255,100)"; //green
                    numRight++;
                    console.log("num right: " + numRight + ", num wrong: " + numWrong + ", num missed: " + numMissed);
                }
                else if (circle.text != correctText && circle.text != incorrectText)
                {
                    circle.text = incorrectText;
                    //circle.color = "rgb(255,100,100)"; //red
                    numWrong++;
                    console.log("num right: " + numRight + ", num wrong: " + numWrong + ", num missed: " + numMissed);
                }
            }
        });
    });

    setInterval(updateGame, 25);

}

function component(x, y, text, color) {
    this.radius = radius;
    this.text = text;
    this.x = x;
    this.y = y;
    this.origY = y;
    //this.color = colors[Math.floor(Math.random()*colors.length)];
    this.color = color;
    this.yVelocity = 1;
    this.move = function() {
        this.x = this.x + 2;
        this.y += this.yVelocity;
        if (this.y > this.origY + 5 || this.y < this.origY - 5)
        {
            this.yVelocity = this.yVelocity * -1; //bouncy bouncy
        }
    }
    this.draw = function() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        ctx.fill();
        ctx.fillStyle = "black";
        ctx.stroke();
        ctx.font = "20px Arial";
        ctx.fillText(this.text, this.x-5, this.y+5)
    }
}

function updateComponentList() {
    //add new components if there's room
    var lowestX = Number.MAX_VALUE;

    components.forEach(component => {
        lowestX = Math.min(lowestX, component.x);
    });

    if (lowestX > radius + gap)
    {
        //var randInt = Math.floor(Math.random() * 3) + magicNumber - 1; //If magicNumber is 3, random is from 2 to 4
        //components.push(new component(-1*radius, 50, randInt.toString(), "rgb(36,123,160)"));
        var randColor = colors[Math.floor(Math.random()*colors.length)]
        components.push(new component(-1*radius, 50, " ", randColor));
    }
    

    //remove components that have fallen off the edge already

    componentsfiltered = components.filter(component => component.x < canvas.getBoundingClientRect().width + radius)

    components.forEach(component => {
        if (!componentsfiltered.includes(component) && component.color == CurrentColor){
            numMissed++
            console.log("num right: " + numRight + ", num wrong: " + numWrong + ", num missed: " + numMissed);
        }
    })
    
    components=componentsfiltered
}

function updateGame() {
    clear();
    magictext();
    components.forEach(component => {
        component.move();
        component.draw();
    });
    updateComponentList();
}

function clear() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.beginPath();
    ctx.font = "20px Roboto";
    ctx.fillText("Click all the ",130,145);
}

function magictext() {
    ctx.beginPath();
   // ctx.font = "30px Roboto";
   // ctx.fillText(magicNumber,236,145);
    ctx.fillStyle = CurrentColor;
    ctx.arc(256, 135, 17, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
} 

function isIntersect(point, circle) {
    return Math.sqrt((point.x-circle.x) ** 2 + (point.y - circle.y) ** 2) < circle.radius;
}

function getCursorPosition(event) {
    const rect = canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    return {x: x, y: y};
}

