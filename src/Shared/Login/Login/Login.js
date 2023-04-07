import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import longi from '../../../images/photo-1432821596592-e2c18b78144f.jpg'
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const [error, setError] = useState('');

    const { loginWithEmail } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from.pathname || '/';

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        loginWithEmail(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                navigate(from, {replace: true});
            })
            .catch((error) => {
                console.error(error);
                setError(error.message)
            })
    }
    return (
        <div className='p-5 rounded' style={{
            backgroundImage: `url(${longi})`
        }}>
            <Form onSubmit={handleLogin} className='w-25 m-auto text-warning'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='fw-bold'>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='fw-bold'>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Text className='text-light'>
                   <p>Don't have an account go to: <Link to='/register'>Register</Link></p>
                </Form.Text>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <Form.Text className='text-danger'>
                    {
                        error
                    }
                </Form.Text>
            </Form>
        </div>
    );
};

export default Login;