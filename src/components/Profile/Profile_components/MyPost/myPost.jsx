import React from "react";
import s from './myPost.module.css'

let MyPost = (props) => {

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        props.postChange(newPostElement.current.value);
    }
    return (
        <div>
            <div className={s.content}>
                <div className={s.media}>
                    <h1 className={s.name}>My post</h1>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                    <div className={s.button}>
                        <button onClick={onAddPost}>Send</button>
                    </div>
                </div>
            </div>
            {props.posts}
        </div>
    )
}

export default MyPost
