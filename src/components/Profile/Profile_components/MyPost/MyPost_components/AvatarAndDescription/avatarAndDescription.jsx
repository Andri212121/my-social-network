import s from './avatarAndDescripton.module.css'
import avatar from '../../../../../../assets/img/Avatar.png'

let AvatarAndDescription = (props) => {
    console.log(props.profile.photos.small)
    return (
        <div>
            <div className={s.baner}>
                <div className={s.media}>
                    <img className={s.logo}
                         src={props.profile.photos.small === null ? avatar : props.profile.photos.small}
                         alt=""/>
                    <div className={s.info}>
                        <div className={s.name}>{props.profile.name + ' ' + props.profile.surname}</div>
                        <div className={s.date}>Date of Birth: {props.profile.dayOfBirth + '.' + props.profile.monthOfBirth + '.' + props.profile.yearOfBirth}</div>
                        <div className={s.city}>City: {props.profile.location}</div>
                        <div className={s.education}>Education: {props.profile.education}</div>
                        <div className={s.website}>Web site: www.qq.com</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AvatarAndDescription