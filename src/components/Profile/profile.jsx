import s from './profile.module.css'
import MyPostContainer from "./Profile_components/MyPost/myPostContainer";
import AvatarAndDescriptionContainer
    from "./Profile_components/MyPost/MyPost_components/AvatarAndDescription/avatarAndDescriptionContainer";

let Profile = () => {
    return (
        <div className="profile">
            <div className={s.container}>
                <AvatarAndDescriptionContainer/>
                <MyPostContainer/>
            </div>
        </div>
    )
}

export default Profile