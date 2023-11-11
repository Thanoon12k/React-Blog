import React from 'react';
import styles from './assets/post.module.css';
const now =new Date()
const nowdate=now.toDateString()

function Post({ title="N/A", date=nowdate, content="no content post" }) {  
    return (
        <div className={styles.post}>
            <div className={styles.postHeader}>
                <div>
                    <h2 className={styles.postTitle}>{title}</h2>
                  
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