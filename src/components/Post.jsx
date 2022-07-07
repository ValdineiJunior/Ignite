import { format, formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"
import prBR from 'date-fns/locale/pt-BR'

import { Avatar } from "./Avatar"
import { Comment } from "./Comment"
import styles from "./Post.module.css"

export function Post({author, publishedAt, content }) {
        const publishedDateFormatted = format(publishedAt, "d 'de' LLL 'às' HH:mm'h'",
        { locale: prBR, addSuffix: true,})

        const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, { locale: ptBR,})

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/ValdineiJunior.png" alt="" />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} datatime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p>{line.content}</p>;
                    } else if (line.type === 'link') {
                        return <p><a href="#">{line.content}</a></p>
                    }
                })}
                
            </div>

            <form className={styles.commentForm} action="">
            <strong>Deixe seu feedback</strong>

            <textarea placeholder="Deixe um comentario" name="" id="" cols="30" rows="10"></textarea>
            
            <footer>
            <button type="submit">Publicar</button>
            </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>

        </article>
    )
}