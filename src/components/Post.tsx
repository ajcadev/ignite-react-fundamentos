import styles from './Post.module.scss'

type PostProps = {
  author: string
  content: string
}

export function Post({author, content}: PostProps) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/ajcadev.png" />
          <div className={styles.authorInfo}>
            <strong>Cardoso</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="11 de maio às 08:13" dateTime="2022-05-11 08:13:30">Publicado há 1h</time>
      </header>
      <div className={styles.content}>
        <p>Fala galera 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉<a href='#'>jane.design/doctorcare</a></p>
        <p>
          <a href='#'>#novoprojeto</a>{' '}
          <a href='#'>#nlw</a>{' '}
          <a href='#'>#rocketseat</a>
        </p>
      </div>
    </article>
  )
}