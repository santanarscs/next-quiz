import React from "react";
import QuestionModel from "../model/question";
import styles from '../styles/Question.module.css'
import { Answer } from "./Answer";
import { Timer } from "./Timer";
import { TitleAnswer } from "./TitleAnswer";

interface QuestionProps {
  question: QuestionModel;
  timeOfReply?: number;
  handleResponse: (index: number) => void
  handleFinishTime: () => void
}

const words = [
  { value: 'A', color: '#F2C866' },
  { value: 'B', color: '#F266BA' },
  { value: 'C', color: '#85D4F2' },
  { value: 'D', color: '#BCE596'},
]

function Question({ question, handleResponse, handleFinishTime, timeOfReply }: QuestionProps) {

  function renderAnswer() {
    return question.answers.map((answer, index) =>
    (<Answer
      key={`${question.id}-${index}`}
      answer={answer}
      index={index}
      word={words[index].value}
      backgroundColor={words[index].color}
      handleResponse={handleResponse}
    />)
    )
  }
  return (
    <div className={styles.question}>
      <TitleAnswer text={question.title} />
      <Timer
        key={question.id}
        duration={timeOfReply ?? 10}
        handleFinishTime={handleFinishTime}
      />
      {renderAnswer()}
    </div>
  )
}

export { Question }