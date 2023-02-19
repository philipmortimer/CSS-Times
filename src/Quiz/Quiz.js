import { useState } from 'react'
import { quiz } from './Questions';
import './Quiz.css'

const Quiz = () => {
  const [activeQuestion, setActiveQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [showResult, setShowResult] = useState(false)
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  })
  const [progScore, setProgScore] = useState([0, 0, 0, 0]);
  const [inChosen, setInChosen] = useState(-1);

  const { questions } = quiz
  const { question, choices, correctAnswer } = questions[activeQuestion]


  const onClickNext = () => {
    setProgScore((prev) => {prev[selectedAnswerIndex] += 1; return prev;})
    setSelectedAnswerIndex(null)
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    )
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1)
    } else {
      setActiveQuestion(0)
      setShowResult(true)
    }
  }

  const onAnswerSelected = (answer, index) => {
    setInChosen(index);
    setSelectedAnswerIndex(index)
    if (answer === correctAnswer) {
      setSelectedAnswer(true)
    } else {
      setSelectedAnswer(false)
    }
  }

  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`)

  function getChosenLang() {
    let maxEl = 0;
    let maxVal = -1;
    for (let i = 0; i < progScore.length; i++) {
        if (progScore[i] >= maxVal) {
            maxVal = progScore[i];
            maxEl = i;
        }
    }
    if (maxEl === 0) return ["python", "You're a bit boring, but quite dependable."];
    else if (maxEl ===  1) return ["java", "Everyone says they don't like you, but secretly they love you. Also, you talk too much."];
    else if (maxEl === 2) return ["javascript", "You give everyone you meet a headache. But everyone still spends time with you. With the right framework, you can settle down and live a happy fulfilled life."];
    else return ["HTML", "I love you. Please can I have your number. Like text me xo ;) (07983 929310)"];
  }

  return (
    <div className="quiz-container">
      <h3>Quiz: What programming language are you?</h3>
      {!showResult ? (
        <div>
          <div>
            <span className="active-question-no">
              {addLeadingZero(activeQuestion + 1)}
            </span>
            <span className="total-question">
              /{addLeadingZero(questions.length)}
            </span>
          </div>
          <h2>{question}</h2>
          <ul>
            {choices.map((answer, index) => (
              <li
                onClick={() => onAnswerSelected(answer, index)}
                key={answer}
                className={
                  selectedAnswerIndex === index ? 'selected-answer' : null
                }>
                {answer}
              </li>
            ))}
          </ul>
          <div className="flex-right">
            <button
              onClick={onClickNext}
              disabled={selectedAnswerIndex === null}>
              {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
            </button>
          </div>
        </div>
      ) : (
        <div className="result">
          <h3>Result</h3>
          <p>
            As a programming language, you would be: <span>{getChosenLang()[0]}</span>
          </p>
          <p>
            {getChosenLang()[1]}
          </p>
        </div>
      )}
    </div>
  )
}

export default Quiz