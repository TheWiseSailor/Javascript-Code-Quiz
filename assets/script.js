//AS A coding boot camp student
//I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
//SO THAT I can gauge my progress compared to my peers
//GIVEN I am taking a code quiz
//WHEN I click the start button
//THEN a timer starts and I am presented with a question
//WHEN I answer a question
//THEN I am presented with another question
//WHEN I answer a question incorrectly
//THEN time is subtracted from the clock
//WHEN all questions are answered or the timer reaches 0
//THEN the game is over
//WHEN the game is over
//THEN I can save my initials and score

//Make the questions
// Instructer said that we have to dio a minimum of 5 questions
const questions = [
  {
    question: "Where do we put JavaScript code in an HTML document?",
    answers: [
      "<js>",
      "<scripting>",
      "<script>",
      "<javascript>",
      "<type.scripter>",
    ],
    correctAnswer: 2,
  },
  {
    question:
      "How do you display 'Hello World' in a pop-up alert box using JavaScript?",
    answers: [
      "alertBox('Hello World');",
      "msg('Hello World');",
      "msgBox('Hello World');",
      "alert('Hello World');",
      "box ('Hello world');",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "how do you write an 'if' statement in Javascript to make it to where it codes only if 'i' is equal to 5?",
    answers: [
      "if i == 5 then",
      "if i = 5 then",
      "if (i == 5)",
      "if i = 5",
      "if i <= 5",
    ],
    correctAnswer: 3,
  },
  {
    question: "How do you start a 'for' loop in javascript?",
    answers: [
      "for (i <= 5; i++)",
      "for (i = 0; i <= 5)",
      "for i = 1 to 5",
      "for (i = 0; i <= 5; i++)",
      "for (i = 0; i <= 5; i+++)",
    ],
    correctAnswer: 2,
  },
  {
    question: "Which of the following is NOT a Javascript data type?",
    answers: ["if(i<>5)", "if i=!5 then", "if i!=5)", "if i <>5", "if i =5"],
    correctAnswer: 2,
  },
  {
    question: "Which of the following is NOT a Javascript data type?",
    answers: ["Number", "Boolean", "String", "function", "null"],
    correctAnswer: 4,
  },
];
