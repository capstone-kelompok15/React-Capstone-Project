import { Col, Container, Form, Row } from "react-bootstrap";

const LoginPageBody = () => {
    return(
        <Container fluid >
            <Row style={{height: '100vh'}}>
                <Col lg className='d-flex flex-column justify-content-between align-items-center'>
                    <Container style={{height: '50px'}}></Container>
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <h1>Login</h1>
                        <p>Welcome back</p>
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
                        <div className="button-primary d-flex justify-content-center mt-5">Login</div>
                        <div className="mt-4 not-registered">Not registered yet? <span>Create an account</span></div>
                    </div>
                    <div className="mb-4 mt-5 login-copyright">© Copyright 2022 Kelompok 15 Capstone Project - Alterra Academy</div>
                </Col>
                <Col lg className='d-flex flex-column justify-content-center align-items-center'>
                    Test2
                </Col>
            </Row>
        </Container>
    );
}

export default LoginPageBody;