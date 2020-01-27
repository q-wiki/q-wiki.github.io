import React from 'react';
import { Row, Col } from 'react-flexbox-grid';


import './container75.scss';

function Container75(props) {


    return (
        <Row>
            <Col xs={0} md={2}>
            </Col>
            <Col xs={12} md={8} className={props.className}>
                {props.children}
            </Col>
            <Col xs={0} md={2}>
            </Col>
        </Row>
    );
}

export default Container75;