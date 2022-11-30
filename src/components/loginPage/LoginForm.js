import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const navigate = useNavigate();

    const toRegisterOnClick = () => {
        navigate('/register')
    }

    const toDashboardOnClick = () => {
      navigate('/dashboard');
    }

    return(
        <>
            <Form>
                <Form.Group className="mt-4" style={{width: '400px'}}>
                    <Form.Label>Username</Form.Label>
                    <Form.Control name="username" type="text" placeholder="Enter username" />
                </Form.Group>
                <Form.Group className="mt-4">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Enter password" />
                </Form.Group>
                <div className='d-flex justify-content-end mt-2'>
                    <div className="forgot-password-text">
                        Forget password?
                    </div>
                </div>
            </Form>
            <div className="button-primary d-flex justify-content-center mt-5"> <span onClick={toDashboardOnClick}></span> Login</div>
            <div className="mt-4 not-registered">Not registered yet? <span onClick={toRegisterOnClick}>Create an account</span></div>
        </>
    );
}

export default LoginForm;