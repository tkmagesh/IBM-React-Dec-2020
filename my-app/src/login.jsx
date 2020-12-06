import { useState, Fragment } from 'react';
import App from './App';

const Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [validUser, setValidUser] = useState(false);
    const onLoginClick = () => {
        if (userName === 'user' && password === 'password'){
            setValidUser(true);
        }
    }
    return(
        <Fragment>
            { validUser ? 
                (<App/>)  
                :
                (
                    <div>
                        <div>
                            <label> User Name : </label>
                            <input type="text" onChange={ evt => setUserName(evt.target.value)} />
                        </div>
                        <div>
                            <label> Password : </label>
                            <input type="password" onChange={ evt => setPassword(evt.target.value)} />
                        </div>
                        <input type="button" value="Login" onClick={onLoginClick} />
                    </div>
                )
            }
        </Fragment>

    )
}

export default Login;