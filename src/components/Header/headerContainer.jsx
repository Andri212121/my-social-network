import {connect} from "react-redux";
import Header from "./header";


let HeaderAPIContainer = () => {


    return (
        <Header/>
    )
}

const mapStateToProps = () => {
    return {}
}
const mapDispatchToProps = () => {
    return {}
}

const HeaderContainers = connect(mapStateToProps, mapDispatchToProps)(HeaderAPIContainer)

export default HeaderContainers