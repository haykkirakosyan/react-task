import {Link} from 'react-router-dom';


export default function Home(){
    return(
        <div>
            <h1>Welcome</h1>
            <Link to="/singin">Sing In</Link>
            <br/>
            <Link to='/login'>Login</Link>
        </div>
    )

}