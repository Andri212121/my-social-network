import axios from "axios";
import React from "react";
import s from "./users.module.css";
import avatarLogo from "../../assets/img/Avatar.png";

let Users = (props) => {
    if(props.totalCount === 0) {
        axios.get("http://localhost:3001/users").then(response => {
            props.setUsers(response.data)
        })}
    return(
    <div>
        {
            props.users.map ( u =>
                <div className={s.container} key={u.id}>
                    <div className={s.avatar}>
                        <img src={avatarLogo} alt=""/>
                    </div>
                    <div className={s.info}>
                        <div className={s.name}>{u.name}</div>
                        <div className={s.additionalInfo}>Live in {u.location}</div>
                    </div>
                    <div className={s.followButton}>
                        {!u.followed ? <button onClick={() => {props.follow(u.id)}}>Follow</button> : <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>}
                    </div>
                </div>
            )
        }
    </div>
)
}

export default Users