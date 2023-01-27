import React from "react";
import MyPost from "./myPost";
import {
    addPostAC,
    updateNewTextAC,
} from "../../../../redux/profile-reducer";
import Post from "./MyPost_components/Post/Post";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts.map(post => <Post postText={post.postText} author={post.author}/>),
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {dispatch(addPostAC())},
        postChange: (text) => {dispatch(updateNewTextAC(text))
        }
    }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost)
export default MyPostContainer
