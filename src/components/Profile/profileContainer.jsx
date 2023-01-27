import {connect} from "react-redux";
import Profile from "./profile";
import {setProfileAC} from "../../redux/profile-reducer";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import axios from "axios";


let ProfileAPIContainer = (props) => {
    const {id} = useParams()

        useEffect( () => {
                if (id !== undefined) {
                    axios.get(`http://localhost:3001/profile/${id}`).then(response => {
                        props.setProfile(response.data)
                    })
                }
            }
            , [])

    return (
        <Profile/>
    )
}

    const mapStateToProps = () => {
        return {
        }
    }
    const mapDispatchToProps = (dispatch) => {
        return {
            setProfile: (profile) => {
                dispatch(setProfileAC(profile))
            }
        }
    }

const ProfileContainers = connect(mapStateToProps, mapDispatchToProps)(ProfileAPIContainer)

export default ProfileContainers