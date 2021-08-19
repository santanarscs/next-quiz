import Link from 'next/link'
import styles from '../styles/Button.module.css'
interface ButtonProps {
  href?: string;
  text: string;
  onClick?: (e: any) => void
}

function Button({ href, text, onClick }: ButtonProps) {
  
  function renderButton() {
    return (
      <button className={styles.button} onClick={onClick}>
        {text}
      </button>
    )
  }
  return href ? (
    <Link href={href}>
      {renderButton()}
    </Link>
  ) : renderButton()
  
}

export { Button }