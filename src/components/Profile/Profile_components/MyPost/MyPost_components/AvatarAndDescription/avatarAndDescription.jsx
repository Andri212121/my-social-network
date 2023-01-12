import s from './avatarAndDescripton.module.css'

let AvatarAndDescription = () => {
    return (
        <div>
            <div className={s.baner}>
                <div className={s.media}>
                    <img className={s.logo}
                         src="https://www.radiustheme.com/demo/wordpress/themes/cirkle/wp-content/uploads/avatars/1/60af1abf02c8c-bpfull.jpg"
                         alt=""/>
                    <div className={s.info}>
                        <div className={s.name}>Name Surname</div>
                        <div className={s.date}>Date of Birth: 21 august</div>
                        <div className={s.city}>City: Kiev</div>
                        <div className={s.education}>Education: NAU</div>
                        <div className={s.website}>Web site: www.qq.com</div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AvatarAndDescription