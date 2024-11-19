import styles from './Sidebar.module.css'
import { EditOutlined } from '@ant-design/icons';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://plus.unsplash.com/premium_photo-1663023612721-e588768ef403?q=40&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <div className={styles.profile}>
        <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/9153862?v=4"></img>
        <strong>Haoni A. Hashimoto</strong>
        <span>Desenvolvedor Full Stack</span>
      </div>
      <footer>
        <a href="#"><EditOutlined size={20}/>Editar seu perfil</a>
      </footer>
    </aside>
  )
}