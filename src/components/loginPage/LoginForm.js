import { useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const LOGIN_BASE_DATA = {
    username: '',
    password: ''
}

const LoginForm = () => {
    const [ loginFormData, setLoginFormData ] = useState(LOGIN_BASE_DATA);

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

    const toDashboardOnClick = () => {
        navigate('/home/dashboard')
    }

    return(
        <>
            <Form>
                <Form.Group className="mt-4" style={{width: '400px'}}>
                    <Form.Label>Username</Form.Label>
                    <Form.Control name="username" type="text" placeholder="Enter username" value={loginFormData.username} onChange={onChange} />
                </Form.Group>
                <Form.Group className="mt-4">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Enter password" value={loginFormData.password} onChange={onChange} />
                </Form.Group>
                <div className='d-flex justify-content-end mt-2'>
                    <div className="forgot-password-text">
                        Forget password?
                    </div>
                </div>
            </Form>
            <div className="button-primary d-flex justify-content-center mt-5"onClick={toDashboardOnClick}> Login</div>
            <div className="mt-4 not-registered">Not registered yet? <span onClick={toRegisterOnClick}>Create an account</span></div>
        </>
    );
}

export default LoginForm;