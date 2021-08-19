
import { useRouter } from 'next/router'
import { Button } from '../components/Button';
import { Report } from '../components/Report';
import styles from '../styles/Result.module.css'
export default function result() {
  const router = useRouter();

  const { total, corrects } = router.query
  
  const percentage = Math.round((Number(corrects) / Number(total)) * 100)
  
  return (
    <div className={styles.result}>
      <h1>Resultado finalizar</h1>
      <div style={{display: 'flex'}}>
        <Report
          text="Perguntas"
          value={Number(total)}
        />
        <Report
          text="Corretas"
          value={Number(corrects)}
          backgroundColor="#9cd2a4"
        />
        <Report
          text="Percentual"
          value={`${percentage}%`}
          backgroundColor="#DE6A33"
        />
      </div>
      <Button href="/" text="Tentar novamente"/>
    </div>
  )

}