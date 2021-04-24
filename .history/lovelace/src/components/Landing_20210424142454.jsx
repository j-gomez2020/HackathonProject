import React from 'react';
import { Row, Col } from 'antd';
import { Typography } from 'antd';

const { Title } = Typography;

const Landing = () => {
    return(
        <div className="landing">
            <Col span={12}>
                <Title>Mortgage estimates for this generation.</Title>
            </Col>
            <Col span={12} className="hero">
                <Title>This is where image goes</Title>
            </Col>
        </div>
    )
}

export default Landing;