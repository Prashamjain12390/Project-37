var database, gameState;
var canvas, quizGame;
var count;
var gameState, allContestants;

function preload() {
    null;
    undefined;
}

function setup() {
    database = firebase.database();
    canvas = createCanvas(1200, 700);
    quizGame = new Quiz();
    quizGame.askQuestion();
    database.ref("contestantCount").on("value", (data) => {
        count = parseInt(data.val());
    });

}

function draw() {
    background(255, 192, 203);
    database.ref("/gameState").on("value", (data) => {
        gameState = data.val();
        if (data.val() === 1 && count === 2) {
            background(255, 255, 0);
            if(allContestants !== undefined){
                fill("blue");
                textSize(20);
                textAlign(CENTER)
                text("*Note:Contestant who answered Correct is highlighted in green",600,450)
            }
               for (plr in allContestants) {
            var correct = "2";
            if (correct === allContestants[plr].answer){
                textFont("Verdana");
                textSize(30);
                fill("Green");
                text(allContestants[plr].name+" : "+allContestants[plr].answer,600,550);
            }
            
            else{
                textFont("Verdana");
                textSize(30);
                fill("red")
                     text(allContestants[plr].name+" : "+allContestants[plr].answer,600,625);
           
            }
        }
   
        }
    });
}