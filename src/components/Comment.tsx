import { DeleteOutlined, LikeOutlined } from '@ant-design/icons';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/9153862?v=4"/>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Haoni Hashimoto</strong>

                            <time 
                                title="14 de Agosto de 2024 às 17:14" 
                                dateTime="2024-08-14 17:14:43">
                                    Cerca de 1 hora atrás
                            </time>

                        </div>
                        <button title='Deletar comentário'>
                            <DeleteOutlined />
                        </button>
                    </header>
                    <p>Muito bom DEV, parabéns!!!</p>
                </div>
                <footer>
                    <button>
                        <LikeOutlined />
                        Aplaudir
                        <span>42</span>
                    </button>
                    
                </footer>
            </div>
        </div>
    );
}