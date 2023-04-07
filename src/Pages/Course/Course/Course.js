import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Course = () => {
    const course = useLoaderData();
    const { title, image_url, details, category_id } = course;
    return (
        <div>
            <Card>
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