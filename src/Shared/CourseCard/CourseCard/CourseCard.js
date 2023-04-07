import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';



const CourseCard = ({ course }) => {
    console.log(course)
    const { title, image_url, details, _id } = course;
    return (
        <div className='col col-sm-12 col-md-6 col-lg-6'>
            <Card className='mb-4 shadow-lg'>
                <Card.Img variant="top" style={{height: '15rem'}} src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {
                            details.length > 200 ?
                                <p>{details.slice(0, 200) + "..."} <Link to={`/course/${_id}`}>Read more</Link></p>
                                :
                                <p>{details}</p>
                        }
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CourseCard;