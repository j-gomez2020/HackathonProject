import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

const Landing = () => {
    return(
        <div className="row">
            <div>
                <Title>Mortgage estimates for this generation.</Title>
            </div>
            <div className="hero">
                <Title>This is where image goes</Title>
            </div>
        </div>
    )
}

export default Landing;