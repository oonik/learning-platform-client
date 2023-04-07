import React from 'react';
import Container from 'react-bootstrap/Container';
import { Outlet } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav/LeftSideNav';
import Header from '../Shared/Header/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container className='mt-5'>
                <Row>
                    <Col lg='2' className='d-none d-lg-block'>
                     <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col lg='10'>
                      <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Main;