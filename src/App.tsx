import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";
import styles from './App.module.scss'
import '../src/global.scss'
export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author='Diego Fernandes'
            content='Um post muito legal'
          />
          <Post
            author='Diego Fernandes'
            content='Um post muito legal'
          />
        </main>
      </div>
    </div>
  )
}
