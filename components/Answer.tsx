import styles from '../styles/Answer.module.css'
import AnswerModel from "../model/answer";
import answer from '../model/answer';

interface AnswerProps {
  answer: AnswerModel;
  index: number;
  word: string;
  backgroundColor: string;
  handleResponse: (index: number) => void
}

function Answer({answer, index, word, backgroundColor, handleResponse}: AnswerProps){
  const isShowing = answer.isShowing ? styles.isShowing : ''
  return (
    <div className={styles.answer} onClick={() => handleResponse(index)}>
      <div className={`${isShowing} ${styles.answerContent}`}>
        <div className={styles.front}>
          <div className={styles.word} style={{backgroundColor}}>{ word }</div>
          <div className={styles.value}>{ answer.value }</div>
        </div>
      
        <div className={styles.back}>
          {answer.isCorrect
            ? (
              <div className={styles.correct}>
                <div>A resposta certa é...</div>
                <div className={styles.value}>{answer.value}</div>
              </div>
            )
              : (
              <div className={styles.wrong}>
                <div>A resposta está errada...</div>
                <div className={styles.value}>{answer.value}</div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export { Answer }