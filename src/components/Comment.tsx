import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.scss'

type CommentProps = {
  content: string
}

export function Comment({content}: CommentProps){
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/ajcadev.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego Fernandes</strong>
              <time title="11 de maio às 08:13" dateTime="2022-05-11 08:13:30">Cerca de 1h atrás</time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}