export interface QuizQuestion {
  id: number;
  question: string;
  code?: string;
  codeLanguage?: string;
  options: string[];
  correctAnswer: number;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What is the primary function of the AURA AI prototype that went missing from Nexora Labs?",
    options: [
      "Real-time threat detection and cybersecurity analysis",
      "Automated code generation and debugging",
      "Natural language processing for customer service",
      "Financial market prediction and trading"
    ],
    correctAnswer: 0
  },
  {
    id: 2,
    question: "In a React application, which hook would you use to perform side effects like data fetching?",
    options: [
      "useState",
      "useEffect",
      "useContext",
      "useReducer"
    ],
    correctAnswer: 1
  },
  {
    id: 3,
    question: "Analyze the following JavaScript code. What will be logged to the console?",
    code: `const arr = [1, 2, 3, 4, 5];
const result = arr
  .filter(x => x % 2 === 0)
  .map(x => x * 2)
  .reduce((acc, val) => acc + val, 0);

console.log(result);`,
    codeLanguage: "javascript",
    options: [
      "12",
      "24",
      "30",
      "15"
    ],
    correctAnswer: 0
  },
  {
    id: 4,
    question: "Which HTTP status code indicates that a resource was successfully created?",
    options: [
      "200 OK",
      "201 Created",
      "204 No Content",
      "301 Moved Permanently"
    ],
    correctAnswer: 1
  },
  {
    id: 5,
    question: "What does the following SQL query return?",
    code: `SELECT COUNT(DISTINCT department) 
FROM employees 
WHERE salary > 50000;`,
    codeLanguage: "sql",
    options: [
      "The total number of employees earning more than 50000",
      "The number of unique departments with employees earning more than 50000",
      "The sum of salaries greater than 50000",
      "The average salary of all departments"
    ],
    correctAnswer: 1
  },
  {
    id: 6,
    question: "In Git, which command would you use to undo the last commit but keep the changes in your working directory?",
    options: [
      "git reset --hard HEAD~1",
      "git reset --soft HEAD~1",
      "git revert HEAD",
      "git checkout HEAD~1"
    ],
    correctAnswer: 1
  },
  {
    id: 7,
    question: "What is the time complexity of binary search on a sorted array?",
    options: [
      "O(n)",
      "O(n log n)",
      "O(log n)",
      "O(1)"
    ],
    correctAnswer: 2
  },
  {
    id: 8,
    question: "Which CSS property is used to create a flexible box layout?",
    options: [
      "display: grid",
      "display: flex",
      "display: inline-block",
      "position: relative"
    ],
    correctAnswer: 1
  },
  {
    id: 9,
    question: "Examine the following Python code. What is the output?",
    code: `def mystery(n):
    if n <= 1:
        return n
    return mystery(n-1) + mystery(n-2)

print(mystery(5))`,
    codeLanguage: "python",
    options: [
      "5",
      "8",
      "13",
      "21"
    ],
    correctAnswer: 0
  },
  {
    id: 10,
    question: "What does CORS stand for in web development?",
    options: [
      "Cross-Origin Resource Sharing",
      "Cross-Origin Request Security",
      "Client-Origin Resource Sharing",
      "Centralized Origin Resource System"
    ],
    correctAnswer: 0
  },
  {
    id: 11,
    question: "In a relational database, what is a foreign key?",
    options: [
      "A unique identifier for each row in a table",
      "A field that links one table to the primary key of another table",
      "An encrypted key used for security",
      "A key that can have duplicate values"
    ],
    correctAnswer: 1
  },
  {
    id: 12,
    question: "What is the purpose of the 'async' keyword in JavaScript?",
    options: [
      "It makes a function run faster",
      "It allows a function to return a Promise",
      "It prevents race conditions",
      "It creates a new thread"
    ],
    correctAnswer: 1
  },
  {
    id: 13,
    question: "Which of the following is NOT a valid HTTP method?",
    options: [
      "GET",
      "POST",
      "DELETE",
      "SEND"
    ],
    correctAnswer: 3
  },
  {
    id: 14,
    question: "What will the following code output?",
    code: `const obj = { a: 1, b: 2, c: 3 };
const { a, ...rest } = obj;
console.log(rest);`,
    codeLanguage: "javascript",
    options: [
      "{ a: 1 }",
      "{ b: 2, c: 3 }",
      "{ a: 1, b: 2, c: 3 }",
      "undefined"
    ],
    correctAnswer: 1
  },
  {
    id: 15,
    question: "In cybersecurity, what does XSS stand for?",
    options: [
      "Extra Security System",
      "Cross-Site Scripting",
      "Extended Server Security",
      "External System Sync"
    ],
    correctAnswer: 1
  }
];
