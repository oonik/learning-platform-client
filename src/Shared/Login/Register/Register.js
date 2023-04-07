import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import register from '../../../images/register22222.jpg'
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Register = () => {
    const {createUser} = useContext(AuthContext);
    const handleSubmit =(event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
        .then((result)=>{
            const user = result.user;
            console.log(user)
            form.reset();
        })
        .then((error)=>console.error(error))
    }
    return (
        <div className='p-2 rounded' style={{
            backgroundImage: `url(${register})`
        }}>
            <Form onSubmit={handleSubmit} className='w-25 m-auto text-dark'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='fw-bold'>Your name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='fw-bold'>Photo URL</Form.Label>
                    <Form.Control name='photoURL' type="text" placeholder="Photo URL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='fw-bold'>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='fw-bold'>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
                <Form.Text className='text-danger'>

                </Form.Text>
            </Form>
        </div>
    );
};

export default Register;