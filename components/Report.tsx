import styles from '../styles/Report.module.css'


interface ReportProps {
  value: number | string;
  text: string;
  backgroundColor?: string;
  color?: string;
}

function Report({value, text, backgroundColor, color}: ReportProps) {
  return (
    <div className={styles.report}>
      <div
        className={styles.value}
        style={{
          backgroundColor: backgroundColor ?? '#FDD60F',
          color: color ?? '#333'
        }}
      >
        {value}
      </div>
      <div className={styles.text}>{text}</div>
    </div>
  )
}

export { Report }