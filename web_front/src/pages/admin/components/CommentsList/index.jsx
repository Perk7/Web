import React, { useState, useEffect } from 'react';
import { DotLoader } from 'react-spinners';

import { getComments, removeComment } from '../../../../apiService';

import styles from './styles.module.css'

export default function CommentsList() {
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    updateCommentsList()
  }, []);

  function updateCommentsList() {
    getComments()
        .then(data => {
          setComments(data)
          setLoading(false)
        })
  }

  function handleDelete(commentId) {
    removeComment(commentId)
      .then(status => {
        if (status) updateCommentsList()
        else alert('Ошибка при удалении комментария')
      })
  };

  return (<>{
    loading
      ? ( <DotLoader size={60} color={"#CCC"} /> )
      : (
        <div className={styles.adminPanel__wrapper}>
          {comments.length === 0 ? (
            <h1 className={styles.adminPanel__list_empty}>Нет комментариев</h1>
          ) : (
            <ul className={styles.adminPanel__list}>
              {comments.map((comment) => (
                <li className={styles.adminPanel__listItem} key={comment.timestamp}>
                  <strong>{comment.username}</strong>
                  <pre>{comment.text}</pre>
                  <p>
                    {new Date(comment.timestamp).toLocaleDateString() +
                    " " +
                    new Date(comment.timestamp).toLocaleTimeString()}
                  </p>
                  <button onClick={() => handleDelete(comment.timestamp)}>Удалить</button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )
  }</>)
}