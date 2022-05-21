let cvs = document.getElementById("canvas");
let ctx = cvs.getContext("2d");

let bird = new Image();
let bg = new Image();
let fg = new Image();
let pipeUp = new Image();
let pipeBottom = new Image();

bird.src = "images/kosmolet.png";
bg.src = "images/fon.png";
fg.src = "images/fg.png";
pipeUp.src = "images/pipeUp.png";
pipeBottom.src = "images/pipeBottom.png";
let gap = 100;

//Звуковые файлы
var fly = new Audio();
var score_audio = new Audio();

fly.src = "audio/fly.mp3";
score_audio.src = "audio/score.mp3";

//При нажатии на кнопку какую-либо
document.addEventListener("keydown", moveUp);
function  moveUp() {
    yPos -= 30;
    fly.play();
}
// Создание блоков
let pipe = [];

pipe[0] = {
    x: cvs.width,
    y: 0
}



let score = 0;
//Позиция птицы
let xPos = 1000;
let yPos = 350;
let grav = 1.5;



function draw() {

    ctx.drawImage(bg, 0, 0);
    for(let i = 0; i < pipe.length; i++)
    {
        ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y);
        ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + gap);

        pipe[i].x--;


        if(pipe[i].x == 1400) {
            pipe.push({
                x : cvs.width,
                y : Math.floor(Math.random() * pipeUp.height) - pipeUp.height
            });
        }
        if(yPos + bird.height >= cvs.height - fg.height) {
            window.location.reload();
        }
        if(xPos + bird.width >= pipe[i].x && xPos <= pipe[i].x + pipeUp.width
            && (yPos <= pipe[i].y + pipeUp.height || yPos + bird.height >= pipe[i].y + pipeUp.height
            + gap) || yPos <= 0)  {
            window.location.reload();

            //location.reload() //перезагрузка страницы
        }
        if(pipe[i].x == 1000) {
            score++;
            score_audio.play();
        }

    }


    ctx.drawImage(fg, 0, cvs.height - fg.height);
    ctx.drawImage(bird, xPos, yPos );


    yPos += grav;

    ctx.fillStyle = "#000";
    ctx.font = "24px Verdana";
    ctx.fillText("Счёт: " + score, 10, cvs.height - 20);

    requestAnimationFrame(draw);
}
draw();
