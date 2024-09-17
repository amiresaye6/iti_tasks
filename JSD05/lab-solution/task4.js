const examData = {
  examName: "JavaScript Fundamentals",
  examDuration: 15,
  questions: [
    {
      title: "Which of the following is a JavaScript data type?",
      answers: ["String", "CSS", "HTML", "HTTP"],
      correctAnswer: 0,
      degree: 5
    },
    {
      title: "How do you declare a variable in JavaScript?",
      answers: ["var", "let", "const", "All of the above"],
      correctAnswer: 3,
      degree: 5
    },
    {
      title: "How do you write a comment in JavaScript?",
      answers: ["<!-- This is a comment -->", "// This is a comment", "' This is a comment", "** This is a comment"],
      correctAnswer: 1,
      degree: 5
    },
    {
      title: "Which company developed JavaScript?",
      answers: ["Google", "Microsoft", "Netscape", "Apple"],
      correctAnswer: 2,
      degree: 5
    },
    {
      title: "Which of the following methods can be used to manipulate the DOM in JavaScript?",
      answers: ["getElementById", "querySelector", "innerHTML", "All of the above"],
      correctAnswer: 3,
      degree: 5
    },
    {
      title: "Which symbol is used for comments in multi-line JavaScript?",
      answers: ["/* comment */", "// comment", "<!-- comment -->", "' comment"],
      correctAnswer: 0,
      degree: 5
    },
    {
      title: "How can you convert a string to an integer in JavaScript?",
      answers: ["parseInt()", "parseFloat()", "toString()", "None of the above"],
      correctAnswer: 0,
      degree: 5
    },
    {
      title: "Which JavaScript method is used to access an HTML element by its ID?",
      answers: ["getElementByClass()", "getElementById()", "getElementsByTagName()", "getElementsByName()"],
      correctAnswer: 1,
      degree: 5
    },
    {
      title: "What will `console.log(2 + '2')` output in JavaScript?",
      answers: ["22", "4", "NaN", "Error"],
      correctAnswer: 0,
      degree: 5
    }
  ]
};

let timerInterval;
let supmitted = false;

const setAnswer = (questionIndex, answerIndex) => {
  sessionStorage.setItem(`question_${questionIndex}`, answerIndex);
}

const getAnswer = (questionIndex) => {
  return sessionStorage.getItem(`question_${questionIndex}`);
}

const calculateScore = () => {
  let score = 0;
  examData.questions.forEach((question, index) => {
    const selectedAnswer = getAnswer(index);
    if (selectedAnswer != null && parseInt(selectedAnswer) === question.correctAnswer) {
      score += question.degree;
    }
  });
  return score;
}

const showResult = () => {
  const score = calculateScore();
  const totalDegree = examData.questions.reduce((acc, q) => acc + q.degree, 0);
  const resultMessage = `Your total score is ${score} out of ${totalDegree}.`;

  // Open a new window and display the result
  const resultWindow = window.open("", "Result", "width=400,height=300");
  resultWindow.document.write(`
    <html>
    <head>
      <title>Exam Result</title>
      <style>
        body { font-family: Arial, sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; }
        h1 { color: #333; }
      </style>
    </head>
    <body>
      <h1>${resultMessage}</h1>
    </body>
    </html>
  `);

  clearInterval(timerInterval);
  resultWindow.document.close();
};


document.getElementById("studentName").textContent = sessionStorage.getItem("studentName");
document.getElementById("examName").textContent = examData.examName;
document.getElementById("examTitle").textContent = examData.examName + " Exam";

let currentQuestionIndex = 0;

function renderQuestion(index) {
  const questionData = examData.questions[index];
  const questionContainer = document.getElementById("questionContainer");

  questionContainer.innerHTML = `
    <div class="question-title">${index + 1}. ${questionData.title}</div>
    <div class="answers">
      ${questionData.answers.map((answer, i) => `
        <div>
          <input type="radio" name="question${index}" id="answer${i}" value="${i}" ${getAnswer(index) == i ? 'checked' : ''}>
          <label for="answer${i}">${answer}</label>
        </div>
      `).join('')}
    </div>
  `;

  document.getElementById("prevBtn").disabled = index === 0;
  document.getElementById("nextBtn").disabled = index === examData.questions.length - 1;
}

renderQuestion(currentQuestionIndex);

document.getElementById("prevBtn").addEventListener("click", function () {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    renderQuestion(currentQuestionIndex);
    if (supmitted) {
      document.querySelectorAll('input[type="radio"]').forEach(input => {
        input.disabled = true;
      });
    }
  }
});

document.getElementById("nextBtn").addEventListener("click", function () {
  if (currentQuestionIndex < examData.questions.length - 1) {
    currentQuestionIndex++;
    renderQuestion(currentQuestionIndex);
    if (supmitted) {
      document.querySelectorAll('input[type="radio"]').forEach(input => {
        input.disabled = true;
      });
    }
  }
});

document.getElementById("questionContainer").addEventListener("change", function (event) {
  if (event.target.name.startsWith('question')) {
    const questionIndex = parseInt(event.target.name.replace('question', ''));
    const answerIndex = parseInt(event.target.value);
    setAnswer(questionIndex, answerIndex);
  }
});

document.getElementById("submitBtn").addEventListener("click", function () {
  showResult();
  if (!supmitted) {
    supmitted = true;
  }
});

let timeRemaining = examData.examDuration * 60;

function startTimer() {
  const timerElement = document.getElementById("timer");
  timerInterval = setInterval(() => {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    timerElement.textContent = `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    timeRemaining--;

    if (timeRemaining < 0) {
      clearInterval(timerInterval);
      alert("Time's up!");
      showResult(); // Show result when time's up
    }
  }, 1000);
}

window.onload = startTimer;
