import s from './profile.module.css'
import AvatarAndDescription from "./Profile_components/AvatarAndDescription/avatarAndDescription";
import MyPost from "./Profile_components/MyPost/myPost";
import Post from "./Profile_components/Post/Post";


let Profile = (props) => {
    let posts = props.profilePage.posts.map(post => <Post postText={post.postText} author={post.author}/>);

    return (
        <div className="profile">
            <div className={s.container}>
                <AvatarAndDescription/>
                <MyPost newPostText={props.profilePage.newPostText} dispatch={props.dispatch}/>
                {posts}
            </div>
        </div>
    )
}

export default Profile