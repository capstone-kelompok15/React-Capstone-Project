// import Swiper core and required modules
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Form } from "react-bootstrap";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const REGISTER_FORM_BASE_DATA = {
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    merchantName: '',
    merchantAddress: '',
    bankAccount: '',
    bankAccountNumber: '',
}

const RegisterForm = () => {
    const [registerFormData, setRegisterFormData] = useState(REGISTER_FORM_BASE_DATA);
    const [swiperState, setSwiperState] = useState();
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();

    const nextOnClick = () => {
        swiperState.slideNext();
    }

    const toLoginOnClick = () => {
        navigate('/login');
    }
    
    const onChange = e => {
        const name = e.target.name;
        const value = e.target.value;

        setRegisterFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return(
        <>
            <Swiper
                style={{flexShrink: '100 !important', width: '45vw', margin:'0'}}
                onInit={(ev) => {
                    setSwiperState(ev);
                }}
                onSlideChange={(index) => {
                    setCurrentIndex(index.snapIndex);
                }}
                allowTouchMove={false}
                spaceBetween={0}
                slidesPerView={1}
            >
                <SwiperSlide className='d-flex flex-column justify-content-center align-items-center'>
                    <h1>Register</h1>
                    <p>Welcome to MyINVOICE</p>
                    <Form>
                        <Form.Group className="mt-4" style={{width: '400px'}}>
                            <Form.Label>Email</Form.Label>
                            <Form.Control name="email" type="email" placeholder="example@gmail.com" value={registerFormData.email} onChange={onChange} />
                        </Form.Group>
                        <Form.Group className="mt-4">
                            <Form.Label>Username</Form.Label>
                            <Form.Control name='username' type="text" placeholder="e.g Alvin Wiraprathama" value={registerFormData.username} onChange={onChange} />
                        </Form.Group>
                        <Form.Group className="mt-4">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name='password' type="password" placeholder="********" value={registerFormData.password} onChange={onChange} />
                        </Form.Group>
                        <Form.Group className="mt-4">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control name='confirmPassword' type="password" placeholder="********" value={registerFormData.confirmPassword} onChange={onChange} />
                        </Form.Group>
                    </Form>
                </SwiperSlide>
                <SwiperSlide className='d-flex flex-column justify-content-center align-items-center'>
                    <h1>Merchant Details</h1>
                    <p>Fill out the details, and we’re ready to go!</p>
                    <Form>
                        <Form.Group className="mt-4" style={{width: '400px'}}>
                            <Form.Label>Merchant Name</Form.Label>
                            <Form.Control name="merchantName" type="text" placeholder="e.g Toko Sejahtera" value={registerFormData.merchantName} onChange={onChange} />
                        </Form.Group>
                        <Form.Group className="mt-4">
                            <Form.Label>Merchant Address</Form.Label>
                            <Form.Control name='merchantAddress' type="text" placeholder="e.g Jalan Sumatra no 2" value={registerFormData.merchantAddress} onChange={onChange} />
                        </Form.Group>
                        <Form.Group className="mt-4">
                            <Form.Label>Choose bank account for your store</Form.Label>
                            <Form.Select name='bankAccount' value={registerFormData.bankAccount} onChange={onChange}>
                                <option value={''}>Choose Bank</option>
                                <option value={'bri'}>Bri</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mt-4">
                            <Form.Label>Bank Account Number</Form.Label>
                            <Form.Control name='bankAccountNumber' type="text" placeholder="16721234122" value={registerFormData.bankAccountNumber} onChange={onChange} />
                        </Form.Group>
                    </Form>
                </SwiperSlide>
            </Swiper>
            <div className="button-primary d-flex justify-content-center mt-5" onClick={nextOnClick}>{currentIndex === 1 ? 'SignUp' :'Next'}</div>
            <div className="mt-4 not-registered">Already have an account? <span onClick={toLoginOnClick}>Login</span></div>
        </>
    )
}

export default RegisterForm;