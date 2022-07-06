import { Header } from './components/Header'
import {Post} from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'

import './global.css'


export function App() {

  return (
    <>
    <Header/>
      
      <div className={styles.wrapper}>
      <Sidebar/>
      <main>
      <Post 
        author = "Valdinei de Paula Junior"
        content = " Lorem ipsum, dolor sit amet consectetur adipisicing elit. "
      />
      <Post 
        author = "Valdinei de Paula"
        content = "Quisquam necessitatibus sed quasi natus consequuntur dicta fuga "
      />
      </main>
      </div>
    </>
  )
}