class Quiz {
    constructor() {
        this.title = createElement('h2');
        this.question = createElement('p');
        this.nameInput = createInput('');
        this.ansInput = createInput('');
        this.submit = createButton('Submit');
        this.o1 = createElement('span');
        this.o2 = createElement('span');
        this.o3 = createElement('span');
        this.o4 = createElement('span');
        this.allO = [this.o1, this.o2, this.o3, this.o4];
    }
    askQuestion() {

        this.title.html("Quiz Game!");
        this.question.html("Quesion : What starts and ends with the letter 'E', but has only one letter?");
        this.question.attribute("class", "q");
        this.question.position(200, 280);
        this.nameInput.attribute("placeholder", "Enter Your Name");
        this.nameInput.position(400, 550);
        this.nameInput.attribute("id", "name");
        this.ansInput.attribute("placeholder", "Enter Answer to the Quesion");
        this.ansInput.position(800, 550);
        this.ansInput.attribute("type","number");
        this.ansInput.attribute("max","4");
        this.ansInput.attribute("min","1");
        this.submit.attribute("id", "submitBtn")
        this.submit.position(680, 575);
        this.o1.html("1.) Everyone");
        this.o1.position(200, 450);
        this.o2.html("2.) Envelope");
        this.o2.position(200, 500);
        this.o3.html("3.) Estimate");
        this.o3.position(200, 550);
        this.o4.html("4.) Example");
        this.o4.position(200, 600);

        this.submit.mousePressed(() => {
            if (count < 2) {
                database.ref("/").update({
                    contestantCount: count + 1
                });
                var contestantRoot = "contestant/contestant" + count;

                database.ref(contestantRoot).update({
                    name: document.getElementById("name").value,
                    answer: this.ansInput.value()
                });

                this.displayAnswers();
            } else {
                alert("Max Cotestants Reached.")
            }
        });
    }



    displayAnswers() {
        database.ref('/').update({
            gameState: 1
        });
        this.title.html("Result of the Quiz!");
        this.question.hide();
        this.ansInput.hide();
        this.nameInput.hide();
        this.submit.hide();
        for (var i = 0; i < this.allO.length; i++) {
            this.allO[i].hide();
        }
        database.ref("contestant").on("value", (data) => {
            allContestants = data.val();
        });
        if (allContestants != undefined) {
            fill("#fff0000");
            textSize(20);
            text("*NOTE:goOGLEW")
        }
      }
}