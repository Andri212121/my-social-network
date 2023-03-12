import {connect} from "react-redux";
import Header from "./header";
import {authMe} from "../../api/api";

let HeaderAPIContainer = () => {

    let auth = () => {
        authMe().then(
            // response => {

            // }
        )
    }

    return (
        <Header auth={auth}/>
    )
}

const mapStateToProps = (state) => {
    return {
        currentAuthUserId: state.profilePage.currentAuthUserId
    }
}
const mapDispatchToProps = () => {
    return {
    }
}

const HeaderContainers = connect(mapStateToProps, mapDispatchToProps)(HeaderAPIContainer)

export default HeaderContainers