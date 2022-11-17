var startButton = document.getElementById("start-btn")

var questionContainerElement = document.getElementById("question-container")

var questionElement = document.getElementById("question")

var answerButtonsElement = document.getElementById("answer-buttons")

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener("click", startGame);

function startGame() {
    console.log("Started")
    startButton.classList.add("hide")
    shuffledQuestions = questions.sort(() => Math.random() - 0.5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove("hide")
    setNextQuestion()

}

function setNextQuestion() {
    showQuestion()

}

function showQuestion(question) {
    questionElement.innerText = question.question

}

function selectAnswer() {

}

var questions = [
    {
        question: "The first question",
        answers: [
            { text: "answer 1", correct: true},
            { text: "answer 2", correct: false},
            { text: "answer 3", correct: false},
            { text: "answer 4", correct: false}
        ]
    }
]