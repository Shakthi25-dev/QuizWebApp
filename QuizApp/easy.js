const questions = [
    {
        question: "What does HTML stand for?",
        answers: ["Hyper Transfer Markup Language", "Hyper Text Markup Language", "High Text Machine Learning", "Hyperlink and Text Management Language"],
        correct: 1
    },
    {
        question: "Which language is used for styling web pages?",
        answers: ["HTML", "CSS", "JavaScript", "Python"],
        correct: 1
    },
    {
        question: "What does CSS stand for?",
        answers: ["Cascading Style Sheets", "Creative Style System", "Computer Style Sheet", "Coded Style Sheet"],
        correct: 0
    },
    {
        question: "Which JavaScript function is used to print something to the console?",
        answers: ["console.print()", "print()", "console.log()", "log.console()"],
        correct: 2
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadNextQuestion() {
    if (currentQuestionIndex >= questions.length) {
        document.getElementById("qns").innerHTML = "Quiz Completed!";
        document.getElementById("ans").style.display = "none";
        document.getElementById("result").innerHTML = `Your score: ${score}/${questions.length}`;
        document.getElementById("result").style.display = "block";
        return;
    }
    
    let q = questions[currentQuestionIndex];
    document.getElementById("qns").innerHTML = q.question;
    document.getElementById("ans1").innerHTML = q.answers[0];
    document.getElementById("ans2").innerHTML = q.answers[1];
    document.getElementById("ans3").innerHTML = q.answers[2];
    document.getElementById("ans4").innerHTML = q.answers[3];
    
    document.getElementById("ans1").onclick = () => checkAnswer(0);
    document.getElementById("ans2").onclick = () => checkAnswer(1);
    document.getElementById("ans3").onclick = () => checkAnswer(2);
    document.getElementById("ans4").onclick = () => checkAnswer(3);
}

function checkAnswer(selected) {
    if (selected === questions[currentQuestionIndex].correct) {
        score++;
    }
    currentQuestionIndex++;
    loadNextQuestion();
}

document.addEventListener("DOMContentLoaded", loadNextQuestion);
