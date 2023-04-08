import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaDownload } from 'react-icons/fa';



const Course = () => {
    const course = useLoaderData();
    const { title, image_url, details, category_id, author } = course;
    console.log(course)
    return (
        <div>
            <Card>
                <Card.Header className='d-flex justify-content-between'>
                    <h6>{author.name}</h6>
                    <a href="sample.pdf" download='sample.pdf'>
                    <button><FaDownload></FaDownload></button>
                    </a>
                </Card.Header>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}>
                        <Button variant="primary">Go Category</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );

};

export default Course;