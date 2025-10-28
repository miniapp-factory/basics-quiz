"use client";

import { useState } from "react";

const questions = [
  {
    question: "What is the primary purpose of a blockchain?",
    options: [
      "To store data in a centralized database",
      "To provide a decentralized ledger",
      "To create a new programming language",
      "To replace all traditional currencies",
    ],
    answer: 1,
  },
  {
    question: "Which of the following is a consensus mechanism used by Bitcoin?",
    options: ["Proof of Stake", "Proof of Work", "Delegated Proof of Stake", "Byzantine Fault Tolerance"],
    answer: 1,
  },
  {
    question: "What does ERC-20 stand for?",
    options: [
      "Ethereum Request for Comments 20",
      "Ethereum Request for Code 20",
      "Ethereum Request for Contract 20",
      "Ethereum Request for Consensus 20",
    ],
    answer: 0,
  },
];

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleOptionClick = (index: number) => {
    if (index === questions[current].answer) {
      setScore(score + 1);
    }
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setShowResult(true);
    }
  };

  if (showResult) {
    return (
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-2xl font-semibold">Quiz Completed!</h2>
        <p className="text-lg">
          You scored {score} out of {questions.length}
        </p>
      </div>
    );
  }

  const q = questions[current];

  return (
    <div className="w-full max-w-md rounded-lg border p-6">
      <h3 className="mb-4 text-xl font-medium">{q.question}</h3>
      <ul className="space-y-2">
        {q.options.map((opt, idx) => (
          <li key={idx}>
            <button
              onClick={() => handleOptionClick(idx)}
              className="w-full rounded-md bg-muted p-3 text-left hover:bg-muted/80"
            >
              {opt}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
