import { PencilLine } from "phosphor-react"

import styles from './Sidebar.module.css'

export function Sidebar() {
    return (
        <aside className={styles.sidebar} >
            <img className={styles.cover} src="https://images.unsplash.com/photo-1519750783826-e2420f4d687f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40" alt="" />

            <div className={styles.profile}>
                <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/43623234?v=4" alt="" />

                <strong>Valdinei de Paula Junior</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar ser perfil
                </a>
            </footer>
        </aside>
    )
}