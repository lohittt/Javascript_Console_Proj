
const questions = [
  {
    question: "What is the capital of France?",
    options: [
        { text: "Berlin", isCorrect: false },
        { text: "Madrid", isCorrect: false },
        { text: "Paris", isCorrect: true },
        { text: "Rome", isCorrect: false }
    ]
},
{
    question: "What is the largest planet in our solar system?",
    options: [
        { text: "Earth", isCorrect: false },
        { text: "Mars", isCorrect: false },
        { text: "Jupiter", isCorrect: true },
        { text: "Saturn", isCorrect: false }
    ]
},
{
    question: "What is the chemical symbol for water?",
    options: [
        { text: "H2O", isCorrect: true },
        { text: "O2", isCorrect: false },
        { text: "CO2", isCorrect: false },
        { text: "NaCl", isCorrect: false }
    ]
},
{
    question: "who is the founder of Microsoft?",
    options: [
        { text: "Steve Jobs", isCorrect: false },
        { text: "Bill Gates", isCorrect: true },
        { text: "Mark Zuckerberg", isCorrect: false },
        { text: "Elon Musk", isCorrect: false }
    ]
},
{
    question: "What is the largest ocean on Earth?",
    options: [
        { text: "Atlantic Ocean", isCorrect: false },
        { text: "Indian Ocean", isCorrect: false },
        { text: "Arctic Ocean", isCorrect: false },
        { text: "Pacific Ocean", isCorrect: true }
    ]
}
];
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-btn");
let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = currentQuestion.question;
    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.innerHTML = option.text;
        button.classList.add("btn");
        if (option.isCorrect) {
            button.dataset.correct = option.isCorrect;
        }
        button.addEventListener("click", selectOption);
        optionsElement.appendChild(button);
    });
}

function selectOption(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";
    if (isCorrect) {
        score++;
    }
    Array.from(optionsElement.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        } else {
            button.classList.add("incorrect");
        }
    });
    nextButton.style.display = "block";
}

function resetState() {
    nextButton.style.display = "none";
    while (optionsElement.firstChild) {
        optionsElement.removeChild(optionsElement.firstChild);
    }
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}); 

function endQuiz() {
    resetState();
    questionElement.innerHTML = `Quiz Completed! Your score: ${score} out of ${questions.length}`;  
}

startQuiz();
