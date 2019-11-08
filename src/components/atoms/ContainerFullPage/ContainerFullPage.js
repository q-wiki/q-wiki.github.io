import React from 'react';
import { Row, Col } from 'react-flexbox-grid';


import './containerFullPage.scss';

function ContainerFullPage(props) {
    return (
        <Row>
            <Col xs={12} md={12}>
                {props.children}
            </Col>
        </Row>
    );
}

export default ContainerFullPage;
