import { Header } from "./components/Header";
import styles from './App.module.scss'
import '../src/global.scss'
import { Post } from "./Post";
import { Sidebar } from "./components/Sidebar";
export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Diego Fernandes"
            content="Curso de ReactJS"
          />
        </main>
      </div>
    </div>
  )
}
