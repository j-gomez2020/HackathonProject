import React from 'react';
import { Row, Col } from 'antd';
import { Typography } from 'antd';

const Landing = () => {
    return(
        <Row>
            <Col span={12}>
                <Typography>Mortgage estimates for this generation.</Typography>
            </Col>
            <Col span={12}></Col>
        </Row>
    )
}

export default Landing;