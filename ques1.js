
function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }

    this.questionIndex++;
}

Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}


function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}


function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> <br><br><br><br><br> <br> <br> Your Score "+"<br> ↓"+"<br> "+  quiz.score + " </h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions here
var questions = [
    new Question("Inverse Laplace transform, transform", [ "f(t) to F(s)", "F(s) to f(t)","f′(t) to f(t)","f(t) to f′(t)"], "F(s) to f(t)"),
    new Question("Find the inverse Laplace transform for 1(s+1)2. ", ["t et u(t)", "te-t u(t)","tu(t)","et u(t)"], "te-t u(t)"),
    new Question("Find the inverse Laplace transform for 1(s+1)2+1.", ["te-t u(t)", "e-t sin⁡t u(t)","e-t cos⁡t u(t)", "e-t u(t)"], "e-t sin⁡t u(t)"),
    new Question("Inverse L of (1/S+a)", ["e^at", "e^-at", "e(at)", "e(-at)"], "e^at"),
    new Question("Inverse L(s/s^2+a^2)", ["sin at", "sinh at", "cos at", "cosh at"], "sin at"),
    new Question("Inverse L(1/s^9)", ["t^8/8!","t^9/8!","t^9/9!","t^8/9!"],"t^8/8!"),
    new Question("inverse L of (s/s^2-a^2)",["sin at", "sinh at", "cos at", "cosh at"],"cos at"),
    new Question("L−1(s(3)4)",["4t3","2t2","2t3","3t3"],"2t2"),
    new Question("Laplace transform if sin⁡(at)u(t) is?",["s ⁄ a^2+s^2","a ⁄ a^2+s^2","s^2 ⁄ a^2+s^2","a^2 ⁄ a^2+s^2"],"a ⁄ a^2+s^2"),
    new Question("Laplace transform if cos⁡(at)u(t) is?",["s ⁄ a^2+s^2","a ⁄ a^2+s^2","s^2 ⁄ a^2+s^2","a^2 ⁄ a^2+s^2"],"s ⁄ a^2+s^2"),
    new Question("According to the time-shifting property of Laplace Transform, shifting the signal in time domain corresponds to the ______",["Multiplication by e^-st0 in the time domain","Multiplication by e^-st10 in the time domain","Multiplication by e^-st20 in the time domain","Multiplication by e^st0 in the time domain"],"Multiplication by e^-st0 in the time domain"),
    new Question("Unilateral Laplace Transform is applicable for the determination of linear constant coefficient differential equations with ________",["Zero initial condition","Non-zero initial condition","Zero final condition","Non-zero final condition"]," Zero initial condition"),
    new Question("What is the laplce tranform of the first derivative of a function y(t) with respect to t : y’(t)?",["sy(0) – Y(s)","sY(s) – y(0)","s^2 Y(s)-sy(0)-y'(0)","s^2 Y(s)-sy'(0)-y(0)"],"sY(s) – y(0)"),
    new Question("L^−1 [1] =",["1","δ(t)","u(t)","Doesn′t exist"],"δ(t)"),
    new Question("The classification of PDEs are governed by ________",["Their highest order derivatives","Their least order derivatives","The number of terms","The constants"],"Their highest order derivatives")


];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();