import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { FormEvent, useState } from 'react'

import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.scss'

type Author = {
  avatarUrl: string
  name: string
  role: string
}

type Content = {
  type: string
  content: string
}

type PostProps = {
  author: Author
  content: Content[]
  publishedAt: Date
}

export function Post({author, content, publishedAt}: PostProps) {
  const [newCommentText, setNewCommentText] = useState('')
  const [comments, setComments] = useState<string[]>(['Post muito bacana, hein?'])
  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleCreateNewComment(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeletedOne = comments.filter(comment => comment !== commentToDelete)
    setComments(commentsWithoutDeletedOne)
  }

  function handleNewCommentChange(event: FormEvent<HTMLTextAreaElement>) {
    event.currentTarget.setCustomValidity('')
    setNewCommentText(event.currentTarget.value)
  }

  function handleNewCommentInvalid(event: FormEvent<HTMLTextAreaElement>) {
    event.currentTarget.setCustomValidity('Esse campo é obrigatório')
  }

  const isNewCommentEmpty = newCommentText.length === 0

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {content.map(item => {
          return(
            item.type==='paragraph' ? <p key={item.content}>{item.content}</p> : <p key={item.content}><a href='#'>{item.content}</a></p>
          )
        })}
      </div>
      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          placeholder='Deixe um comentário'
          required
        />
        <footer>
          <button type='submit' disabled={isNewCommentEmpty}>Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          )
        })}
      </div>
    </article>
  )
}