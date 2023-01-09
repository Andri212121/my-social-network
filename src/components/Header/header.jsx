import s from './header.module.css'

let Header = () => {
return(
    <header>
        <div className={s.logo}>
            <img src="https://www.radiustheme.com/demo/wordpress/themes/cirkle/wp-content/uploads/2021/11/logo_light.svg" alt=""/>
        </div>
    </header>
)

}

export default Header;