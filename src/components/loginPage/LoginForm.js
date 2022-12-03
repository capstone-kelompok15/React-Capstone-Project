import { useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';

const LOGIN_BASE_DATA = {
    username: '',
    password: ''
}

const ERROR_MESSAGE_BASE_DATA = {
    usernameMsg: '',
    passwordMsg: ''
}

const LoginForm = () => {
    const [ loginFormData, setLoginFormData ] = useState(LOGIN_BASE_DATA);
    const [ showPassword, setShowPassword ] = useState(false);
    const [ errorMessages, setErrorMessages ] = useState(ERROR_MESSAGE_BASE_DATA);

    const onChange = e => {
        const name = e.target.name;
        const value = e.target.value;

        setLoginFormData(prev => ({
            ...prev,
            [name] : value
        }));
    }

    const navigate = useNavigate();

    const toRegisterOnClick = () => {
        navigate('/register')
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let usernameMsg = false;
        let passwordMsg = false;

        if(loginFormData.username === ''){
            setErrorMessages(prev => ({
                ...prev,
                usernameMsg: 'Please input your username'
            }));
            usernameMsg = true;
        } else {
            setErrorMessages(prev => ({
                ...prev,
                usernameMsg: ''
            }));
            usernameMsg = false;
        }

        if(loginFormData.password === ''){
            setErrorMessages(prev => ({
                ...prev,
                passwordMsg: 'Please input your password'
            }));
            passwordMsg = true;
        } else {
            setErrorMessages(prev => ({
                ...prev,
                passwordMsg: ''
            }));
            passwordMsg = false;
        }

        login(usernameMsg, passwordMsg);

    }

    const login = (usernameMsg, passwordMsg) => {
        if(usernameMsg || passwordMsg){
            return;
        }
        navigate('/home/dashboard');
    }

    const passwordIconOnClick = () => {
        setShowPassword(prev => !prev);
    }

    return(
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mt-4" style={{width: '400px'}}>
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                        name="username"
                        type="text"
                        placeholder="Enter username"
                        value={loginFormData.username}
                        onChange={onChange}
                        style={{borderColor: `${errorMessages.usernameMsg === '' ? '' : '#D62D33'}`}}
                    />
                    {errorMessages.usernameMsg === '' ? <></> : <div className='error-message'>{errorMessages.usernameMsg}</div>}
                </Form.Group>
                <Form.Group className="mt-4 password-form-group">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        name='password'
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Enter password"
                        value={loginFormData.password}
                        onChange={onChange}
                        style={{borderColor: `${errorMessages.passwordMsg === '' ? '' : '#D62D33'}`}}
                    />
                    {showPassword ?
                        <BsEyeFill size={25} className="password-icon" onClick={passwordIconOnClick}/> : 
                        <BsEyeSlashFill size={25} className="password-icon" onClick={passwordIconOnClick}/>
                    }
                    {errorMessages.passwordMsg === '' ? <></> : <div className='error-message'>{errorMessages.passwordMsg}</div>}
                </Form.Group>
                <div className='d-flex justify-content-end mt-2'>
                    <div className="forgot-password-text">
                        Forget password?
                    </div>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <input type={'submit'} className="button-primary d-flex justify-content-center mt-5" value={'Login'}/>
                    <div className="mt-4 not-registered">Not registered yet? <span onClick={toRegisterOnClick}>Create an account</span></div>
                </div>
            </Form>
        </>
    );
}

export default LoginForm;