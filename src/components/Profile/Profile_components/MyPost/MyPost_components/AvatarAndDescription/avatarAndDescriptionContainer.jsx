import {connect} from "react-redux";
import AvatarAndDescription from "./avatarAndDescription";
import {setProfileAC} from "../../../../../../redux/profile-reducer";

let AvatarAndDescriptionAPIContainer = (props) => {
    return (
        <AvatarAndDescription
        profile={props.profile}
        />
    )
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setProfile: (profile) => {
            dispatch(setProfileAC(profile))
        }
    }
}

const AvatarAndDescriptionContainer = connect(mapStateToProps, mapDispatchToProps)(AvatarAndDescriptionAPIContainer)

export default AvatarAndDescriptionContainer