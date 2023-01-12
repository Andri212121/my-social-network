import s from './profile.module.css'
import AvatarAndDescription from "./Profile_components/MyPost/MyPost_components/AvatarAndDescription/avatarAndDescription";
import MyPostContainer from "./Profile_components/MyPost/myPostContainer";


let Profile = (props) => {
    return (
        <div className="profile">
            <div className={s.container}>
                <AvatarAndDescription/>
                <MyPostContainer store={props.store}/>
            </div>
        </div>
    )
}

export default Profile