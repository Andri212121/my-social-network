import React from 'react';
import s from './users.module.css';
import avatarLogo from '../../../assets/img/Avatar.png';

let Users = (props) => {
    return (
        <div className={s.content}>
            <h1 className={s.title}>
                Users
            </h1>
            <div className={s.users}>
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
            </div>
            <div className={s.pageSelector}>
                {
                    props.pages.map(p => {
                            return <span key={p} onClick={() => {
                                props.changePage(p)
                            }} className={props.currentPage === p ? s.selectedPage : ''}>{p}</span>
                        }
                    )
                }
            </div>
        </div>
    )
}

export default Users