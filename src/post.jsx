import styles from './assets/post.module.css';
import { Link } from "react-router-dom"


function Post({ post }) {
   
    if (!post) {
        return null;
    }
    return (
        <div className={styles.post}>
            <div className={styles.postHeader}>
                <div>
                    <h2 className={styles.postTitle}>{post.title}</h2>

                </div>
                <p className={styles.postDate}>{post.date}</p>
            </div>
            Content :
            <p className={styles.postContent}>{post.content}</p>
            <Link to="/post" >Read More</Link> 
            <div>
                <button className={styles.postButton}>Edit</button>
                <button className={styles.postButton}>Delete</button>
            </div>
        </div>
    )
}
export default Post