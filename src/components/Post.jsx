import { format, formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"
import prBR from 'date-fns/locale/pt-BR'
import { useState } from "react"

import { Avatar } from "./Avatar"
import { Comment } from "./Comment"
import styles from "./Post.module.css"



export function Post({author, publishedAt, content }) {
    const [comments, setComments] = useState([
        'Post muito bacana',
    ])

    const [newCommentText, setNewCommentText] = useState ('')

    const publishedDateFormatted = format(publishedAt,"d 'de' LLL 'às' HH:mm'h'",
    { locale: prBR, addSuffix: true,})
    const publishedDateRelativeToNow =formatDistanceToNow(publishedAt, { locale: ptBR,})

    function handleCreateNewComment() {
        event.preventDefault()

        setComments([...comments, newCommentText]);
        setNewCommentText('')

    }

    function handleNewCommentChange() {
        setNewCommentText(event.target.value)
    }

    function deleteComment(commentToDelete) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete
        })

        setComments(commentsWithoutDeletedOne)
    }

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
                        return <p key={line.content}>{line.content}</p>;
                    } else if (line.type === 'link') {
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                    }
                })}
                
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm} action="">
            <strong>Deixe seu feedback</strong>

            <textarea 
            name="comment"
            placeholder="Deixe um comentario"
            onChange={handleNewCommentChange}
            value = {newCommentText}
            cols="30"
            rows="10"></textarea>
            
            <footer>
            <button type="submit">Publicar</button>
            </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment 
                        key={comment} 
                        content={comment} onDeleteComment={deleteComment} />
                })}
            </div>

        </article>
    )
}