import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../../../Shared/CourseCard/CourseCard/CourseCard';
import { Container, Row } from 'react-bootstrap';

const Category = () => {
    const courses = useLoaderData();
    return (
        <Container>
           <Row>
           {
                courses.map(course => <CourseCard
                key={course._id}
                course={course}
                ></CourseCard>)
            }
           </Row>
        </Container>
    );
};

export default Category;