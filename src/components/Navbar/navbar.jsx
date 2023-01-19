import s from './navbar.module.css'
import {NavLink} from "react-router-dom";

let Navbar = () => {
    return (
        <div className="nav">
            <div className={s.link}>
                <NavLink to="/profile">Profile</NavLink>
            </div>
            <div className={s.link}>
                <NavLink to="/dialogs">Message</NavLink>
            </div>
            <div className={s.link}>
                <NavLink to="/users">Users</NavLink>
            </div>
        </div>
    )

}

export default Navbar;