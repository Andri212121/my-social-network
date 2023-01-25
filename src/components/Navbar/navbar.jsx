import s from './navbar.module.css'
import {NavLink} from "react-router-dom";
import avatar from '../../assets/img/Avatar.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser, faMessage, faUsers} from "@fortawesome/free-solid-svg-icons";

let Navbar = () => {
    return (
        <div className={s.content}>
            <div className={s.profile}>
                <div className={s.avatar}>
                    <img src={avatar} alt=""/>
                </div>
                <div className={s.info}>
                    <div className={s.name}>hiuhuhui</div>
                    <div className={s.username}>@uihiuhiuh</div>
                </div>
            </div>
            <p>MENU</p>
            <div className="nav">
                <div className={s.link}>
                    <NavLink to="/profile">
                        <FontAwesomeIcon icon={faUser} className={s.icon}></FontAwesomeIcon>
                        Profile
                    </NavLink>
                </div>
                <div className={s.link}>
                    <NavLink to="/dialogs">
                        <FontAwesomeIcon icon={faMessage} className={s.icon}></FontAwesomeIcon>
                        Message
                    </NavLink>
                </div>
                <div className={s.link}>
                    <NavLink to="/users">
                        <FontAwesomeIcon icon={faUsers} className={s.icon}></FontAwesomeIcon>
                        Users
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar;