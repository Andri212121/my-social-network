import React from "react";
import MyPost from "./myPost";
import {addPostActionCreator, updateNewTextActionCreator} from "../../../../redux/profile-reducer";
import Post from "./MyPost_components/Post/Post";

let MyPostContainer = (props) => {

    let state = props.store.getState()

    let posts = state.profilePage.posts.map(post => <Post postText={post.postText} author={post.author}/>);

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let postChange = (text) => {
        props.store.dispatch(updateNewTextActionCreator(text));
    }

    return (<MyPost addPost={addPost} postChange={postChange} newPostText={state.profilePage.newPostText} posts={posts}/>)
}

export default MyPostContainer
