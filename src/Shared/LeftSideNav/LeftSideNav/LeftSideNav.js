import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from "firebase/auth";

const LeftSideNav = () => {
    const {providerLogin} = useContext(AuthContext);

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/course-category')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSingIn =()=>{
        providerLogin(googleProvider)
        .then((result)=>{
            const user = result.user;
            console.log(user)
        })
        .catch((error)=>console.error(error))
    }
    return (
        <div>
            {
                categories.map(category => <p key={category.id}>
                    <Link to={`/category/${category.id}`}>{category.name}</Link>
                </p>)
            }
            <div>
                <ButtonGroup vertical>
                    <Button onClick={handleGoogleSingIn} variant="outline-info"><FaGoogle></FaGoogle> Login Google</Button>
                    <Button variant="outline-dark"><FaGithub></FaGithub> Login Github</Button>
                </ButtonGroup>
            </div>
        </div>
    );
};

export default LeftSideNav;