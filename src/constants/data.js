import { assets } from "../assets/images";

const navlinks = [
  {
    id: 0,
    title: "Home",
    url: "/home",
    icon: assets.home,
  },
  {
    id: 1,
    title: "Level",
    url: "/level",
    icon: assets.level,
  },
  {
    id: 2,
    title: "Quiz",
    url: "/quiz",
    icon: assets.quiz,
  },
  {
    id: 3,
    title: "Profile",
    url: "/profile",
    icon: assets.profile,
  },
];


const stats=[
  {
    icon:assets.chemistry,
    title:"Reading",
    progress:100
  },
  {
    icon:assets.fox,
    title:"Writing and language",
    progress:100
  },
  {
    icon:assets.console,
    title:"Math section ",
    progress:100
  },
  {
    icon:assets.console,
    title:"Math section ",
    progress:100
  },
]
const action = ["Practice", "My SAT", "Text"];

const quizData = [
  {
    id: 1,
    title: "Math Quiz",
    time: "30 min",
    questions: [
      {
        id: 1,
        question: "What is 2 + 2?",
        options: ["3", "4", "5"],
        correctAnswer: "4",
      },
      {
        id: 2,
        question: "What is 5 + 3?",
        options: ["8", "6", "7"],
        correctAnswer: "8",
      },
    ],
  },
  {
    id: 2,
    title: "Science Quiz",
    time: "30 min",
    questions: [
      {
        id: 1,
        question: "What is the boiling point of water?",
        options: ["90°C", "100°C", "120°C"],
        correctAnswer: "100°C",
      },
      {
        id: 2,
        question: "What planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter"],
        correctAnswer: "Mars",
      },
    ],
  },
  {
    id: 3,
    title: "History Quiz",
    time: "30 min",
    questions: [
      {
        id: 1,
        question: "Who was the first President of the United States?",
        options: ["George Washington", "Abraham Lincoln", "Thomas Jefferson"],
        correctAnswer: "George Washington",
      },
      {
        id: 2,
        question: "In which year did World War II end?",
        options: ["1945", "1944", "1946"],
        correctAnswer: "1945",
      },
    ],
  },
  {
    id: 4,
    title: "Geography Quiz",
    time: "30 min",
    questions: [
      {
        id: 1,
        question: "Which is the largest continent by area?",
        options: ["Africa", "Asia", "Antarctica"],
        correctAnswer: "Asia",
      },
      {
        id: 2,
        question: "What is the capital city of Australia?",
        options: ["Sydney", "Melbourne", "Canberra"],
        correctAnswer: "Canberra",
      },
    ],
  },
  {
    "id": 5,
    "title": "Math Quiz",
    "time": "60 min",
    "questions": [
      {
        "id": 1,
        "question": "What is the square root of 144?",
        "options": ["10", "12", "14"],
        "correctAnswer": "12"
      },
      {
        "id": 2,
        "question": "If a triangle has angles 90°, 45°, and 45°, what type of triangle is it?",
        "options": ["Equilateral", "Isosceles", "Scalene"],
        "correctAnswer": "Isosceles"
      }
    ]
  }
  
];


export { navlinks, action,stats, quizData };
