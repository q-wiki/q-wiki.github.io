import React from 'react';
import { Row, Col } from 'react-flexbox-grid';


import './containerHalfPage.scss';

function ContainerHalfPage(props) {
    return (
        <Row>
            <Col xs={12} md={6}>
                {props.contentLeft}
            </Col>
            <Col xs={12} md={6}>
                {props.children}
            </Col>
        </Row>
    );
}

export default ContainerHalfPage;