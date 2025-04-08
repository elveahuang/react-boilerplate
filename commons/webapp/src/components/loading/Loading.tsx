import { Spin } from 'antd';
import './Loading.css';

const Loading = () => {
    return (
        <div className="loading-div-container">
            <Spin size="large" />
        </div>
    );
};

export default Loading;
