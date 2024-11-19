import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header className={styles.header}>
                <div className={styles.author}>
                    <Avatar src="https://avatars.githubusercontent.com/u/9153862?v=4" />
                    <div className={styles.authorInfo}> 
                        <strong>Haoni Hashimoto</strong>
                        <span>Desenvolvedor Full Stack</span>
                    </div>
                </div>
                <time title="14 de Agosto de 2024 às 17:14" dateTime="2024-08-14 17:14:43">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galera!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sagittis quam quis porttitor accumsan. Mauris ultrices pulvinar imperdiet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed eget magna id eros vulputate tristique ac porttitor eros. Vestibulum blandit sodales metus, a mollis justo hendrerit vitae. In nec bibendum purus, eu tincidunt ex. Vivamus eget est sit amet leo scelerisque fermentum. Nulla scelerisque feugiat sapien, a mattis orci tempor in. Sed ultrices pretium viverra. Cras nisl leo, consequat sed mattis in, rhoncus nec elit. Morbi a mauris urna. Vivamus eros velit, finibus vulputate metus vel, volutpat scelerisque lectus. Praesent sodales ac felis vel sollicitudin. Proin sed ex suscipit, elementum diam quis, malesuada lacus.</p>
                <p>
                    <a href='#'>#treino </a>  
                    <a href='#'>#novoprojeto </a> 
                    <a href='#'>#react </a>
                </p>
            </div>
            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                
                <textarea 
                    placeholder="Escreva um comentário..."
                />

                <footer>
                    <button type="submit">Publicar</button>
                </footer>

            </form>

            <Comment />
            <Comment />
            <Comment />
        </article>
    );
}