import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import styles from '../styles/Timer.module.css'

interface TimerProps {
  key: any
  duration: number;
  handleFinishTime: () => void
}

function Timer({duration, handleFinishTime }: TimerProps) {
  return (
    <div className={styles.timer}>
      <CountdownCircleTimer
        size={120}
        isPlaying
        onComplete={handleFinishTime}
        colors={[
          ['#BCE596', 0.33],
          ['#F7B801', 0.33],
          ['#ED827A', 0.33],
        ]}
        duration={duration} >
        {({remainingTime}) => remainingTime }
      </CountdownCircleTimer>
    </div>
  )
}

export { Timer }