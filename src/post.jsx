import React from 'react';
import styles from './assets/post.module.css';

function Post({ title, owner, date, content }) {
    return (
        <div className={styles.post}>
            <div className={styles.postHeader}>
                <div>
                    <h2 className={styles.postTitle}>{title}</h2>
                    <p className={styles.postOwner}>Owner : {owner}</p>
                </div>
                <p className={styles.postDate}>{date}</p>
            </div>
            Content :
            <p className={styles.postContent}>{content}</p>
            <div>
                <button className={styles.postButton}>Edit</button>
                <button className={styles.postButton}>Delete</button>
            </div>
        </div>
    )
}
export default Post