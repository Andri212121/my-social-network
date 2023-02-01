import s from './header.module.css'
import axios from "axios";

let Header = () => {

    let auth = () => {
        axios.get(`http://localhost:3001/auth/me`,
            {
                headers: {
                    'Access-Control-Allow-Origin': 'http://localhost:3001',
                    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                    'Access-Control-Allow-Credentials': 'true',
                },
                withCredentials: true
            }
        ).then(
        //     response => {
        // }
        )
    }

return(
    <header>
        <div className={s.logo}>
            <img src="https://www.radiustheme.com/demo/wordpress/themes/cirkle/wp-content/uploads/2021/11/logo_light.svg" alt=""/>
        </div>
        <button onClick={() => { auth() }}>
sing in
        </button>
    </header>
)

}

export default Header;