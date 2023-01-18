import axios from "axios";
import React, {useEffect} from "react";
import s from "./users.module.css";
import avatarLogo from "../../assets/img/Avatar.png";

let Users = (props) => {

    useEffect(() => {
        axios.get(`http://localhost:3001/users?page=${props.currentPage}&take=${props.pageSize}`).then(response => {
            props.setUsers(response.data)
        })
    }, [])
    let pageCount = Math.ceil(props.totalCount / props.pageSize)

    let pages = []

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    let changePage = (pageId) => {
        props.selectPage(pageId)
        axios.get(`http://localhost:3001/users?page=${pageId}&take=${props.pageSize}`).then(response => {
            props.setUsers(response.data)
        })
    }

    return (
        <div>
            <h1 className={s.title}>
                Users
            </h1>
            {
                props.users.map(u =>
                        <div className={s.container} key={u.id}>
                            <div className={s.avatar}>
                                <img src={avatarLogo} alt=""/>
                            </div>
                            <div className={s.info}>
                                <div className={s.name}>{u.name + ' ' + u.surname}</div>
                                <div className={s.additionalInfo}>Live in {u.location}</div>
                            </div>
                            <div className={s.followButton}>
                                {!u.followed ? <button onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button> : <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button>}
                            </div>
                        </div>
                )
            }
            <div className={s.pageSelector}>
                {
                    pages.map(p => {
                            return <span key={p} onClick={() => {changePage(p)}} className={props.currentPage === p ? s.selectedPage : ''}>{p}</span>
                        }
                    )
                }
            </div>
        </div>
    )
}

export default Users