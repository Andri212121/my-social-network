import React from "react";
import s from './myPost.module.css'
import {addPostActionCreator, updateNewTextActionCreator} from "../../../../redux/profile-reducer";

let MyPost = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        props.dispatch(updateNewTextActionCreator(newPostElement.current.value));
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
