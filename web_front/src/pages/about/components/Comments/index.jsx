import React, { useEffect, useState } from 'react'

import styles from './styles.module.css'
import { addComment, getComments } from '../../../../apiService'

export default function Comments() {
  const [comments, setComments] = useState([])

  const [username, changeUserName] = useState('')
  const [textComment, changeTextComment] = useState('')

  function addNewComment() {
    const commentObject = {
      username, 
      text: textComment,
      timestamp: Date.now()
    }

    addComment(commentObject)
      .then(status => {
        if (status) {
          changeUserName('')
          changeTextComment('')
          getCommentsList()
        }
        
        else alert("Не удалось добавить комментарий")
      })
  }

  function getCommentsList() {
    getComments().then(list => setComments(list))
  }

  useEffect(() => {
    getCommentsList()
  }, [])

  return (
    <section className={styles.comments__wrapper}>
      <div className={styles.comments__form}>
        <h3>Ваш комментарий</h3>

        <input 
          type="text" name="nickname" placeholder='Ваше имя' 
          value={username} onChange={ev => changeUserName(ev.currentTarget.value)} 
          className={styles.comments__input}
        />
        <textarea
          name="comment" placeholder='Комментарий...' 
          value={textComment} onChange={ev => changeTextComment(ev.currentTarget.value)} 
          className={styles.comments__input}
        />
        <button disabled={!username || !textComment} onClick={addNewComment}>Отправить</button>
      </div>
      {comments.length
          ? <ul className={styles.comments__list}>
              {comments.map(comment => (
                <li className={styles.comments__listItem} key={comment.username + comment.text[0]}>
                  <div className={styles.comments__itemName}>{comment.username}</div>
                  <pre className={styles.comments__itemText}>{comment.text}</pre>
                  <div className={styles.comments__itemTime}>{
                    new Date(comment.timestamp).toLocaleDateString() +
                    " " +
                    new Date(comment.timestamp).toLocaleTimeString()
                  }</div>
                </li>
              ))}
            </ul>
          : <h3 className={styles.comments__emptyListTitle}>Здесь пока нет комментариев</h3>
      }
    </section>
  )
}