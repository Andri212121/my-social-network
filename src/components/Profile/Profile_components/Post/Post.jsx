import s from './Post.module.css'

let Post = (props) => {
    return (
        <div className={s.content}>
            <div className={s.media}>
                <div className={s.logo}>
                    <img
                        src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
                        alt=""/>
                </div>
                <div className={s.textContent}>
                    <div className={s.userName}>
                        {props.author}
                    </div>
                    <div className={s.text}>
                        {props.postText}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post