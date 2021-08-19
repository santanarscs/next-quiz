import styles from '../styles/TitleAnswer.module.css'


interface TitleAnswerProps {
  text: string
}
function TitleAnswer({text}: TitleAnswerProps) {
  return (
    <div className={styles.title}>
      <span className={styles.text}>{text}</span>
    </div>
  )
}

export { TitleAnswer }