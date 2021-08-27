
import QuestionModel from "../model/question"
import styles from '../styles/Quiz.module.css'
import { Button } from "./Button"
import { Question } from "./Question"

interface QuizProps {
  question: QuestionModel;
  lastAnswer: boolean;
  handleAnswerReply: (question: QuestionModel) => void;
  goNextStep: () => void
}

function Quiz({ question, lastAnswer, handleAnswerReply, goNextStep }: QuizProps) {
  
  function answerProvider(index: number) {
    if (question.isNotAnswer) {
      handleAnswerReply(question.replyWith(index))
    }
  }
  
  return (
    <div className={styles.quiz}>
      {question ? (
        <Question
          question={question}
          timeOfReply={300}
          handleResponse={answerProvider}
          handleFinishTime={goNextStep}
        />
        
      ) : false}
      <Button
        onClick={goNextStep}
        text={lastAnswer ? 'Finalizar': 'Próxima'}
      />
    </div>
  )

}

export { Quiz }