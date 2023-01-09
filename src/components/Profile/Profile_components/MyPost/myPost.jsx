import React from "react";
import s from './myPost.module.css'

let MyPost = (props) => {

    let newPostElement = React.createRef();
    let addPost = () => {
        props.dispatch({type: "ADD-POST"});
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch({type: "UPDATE-NEW-POST-TEXT", newText: text});
    }

    return (
        <div className={s.content}>
            <div className={s.media}>
                <h1 className={s.name}>My post</h1>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                <div className={s.button}>
                    <button onClick={addPost}>Send</button>
                </div>

            </div>
        </div>

    )
}

export default MyPost
