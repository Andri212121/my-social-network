import s from './profile.module.css'
import AvatarAndDescription from "./Profile_components/MyPost/MyPost_components/AvatarAndDescription/avatarAndDescription";
import MyPostContainer from "./Profile_components/MyPost/myPostContainer";


let Profile = () => {
    return (
        <div className="profile">
            <div className={s.container}>
                <AvatarAndDescription/>
                <MyPostContainer/>
            </div>
        </div>
    )
}

export default Profile