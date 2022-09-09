import { useState } from "react";
import "./App.css";
import ProgressBar from 'react-bootstrap/ProgressBar';

const questions = [
  {
    questionText: "Which is the capital city of India ?",
    answerOptions: [
      { answerText: "Bangalore", isCorrect: false },
      { answerText: "Noida", isCorrect: false },
      { answerText: "Hyderabad", isCorrect: false },
      { answerText: "New Delhi", isCorrect: true },
    ],
  },
  {
    questionText:
      "Which country has the largest population ?",
    answerOptions: [
      { answerText: "India", isCorrect: false },
      { answerText: "China", isCorrect: true },
      { answerText: "Australia", isCorrect: false },
      { answerText: "Africa", isCorrect: false },
    ],
  },
  {
    questionText: "Which is the company owned by Elon musk?",
    answerOptions: [
      { answerText: "Intel", isCorrect: false },
      { answerText: "Amazon", isCorrect: false },
      { answerText: "Tesla", isCorrect: true },
      { answerText: "Microsoft", isCorrect: false },
    ],
  },
  {
    questionText: "Which continent is INDIA in ?",
    answerOptions: [
      { answerText: "Asia", isCorrect: true },
      { answerText: "Africa", isCorrect: false },
      { answerText: "South America", isCorrect: false },
      { answerText: "Europe", isCorrect: false },
    ],
  },
];

function App() {
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [rightAns, setRightAns] = useState(0);
  const [wrongAns, setWrongAns] = useState(0);
  const [points, setPoints]= useState(0);

  let rgtper = (rightAns / questions.length)*100;
  let wrgper = (wrongAns/ questions.length)*100;

  function handleAnswer(isCorrect) {
    if (isCorrect) {
      setPoints(points +5);
      setScore(score + 1);
      setRightAns(rightAns +1);
    }else{
      setPoints(points -4);
      setWrongAns(wrongAns+1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  }

  return (
    <div className=" flex-column app">
      <div className="d-flex justify-content-around">
        <div><span>Wright Answer</span>
          <ProgressBar variant="success" now={rgtper} />
        </div>
        <div>
          <span>Points:{points}</span>
        </div>
        <div><span>Wright Answer</span>
          <ProgressBar variant="danger" now={wrgper} />
        </div>
      </div>
      {showScore ? (
        <div className="score-section">
          You  answered  {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section container">
            <div className="question-count">
              <span className="display-1">Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>

          <div className="answer-section container display-4">
            {questions[currentQuestion].answerOptions.map(
              (answerOption, index) => (
                <button
                  onClick={() => handleAnswer(answerOption.isCorrect)}
                  key={index}
                >
                  {answerOption.answerText}
                </button>
              )
            )}
          </div>
           <span>Right ans is 5 points and Wrong ans leads to -4 points</span>

        </>
      )}
    </div>
  );
}

export default App;
