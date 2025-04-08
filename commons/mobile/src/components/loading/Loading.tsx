import { Loading as LoadingComponent } from 'antd-mobile';
import { FC } from 'react';
import './Loading.css';

const Loading: FC = () => {
    return (
        <div className="loading-div-container">
            <LoadingComponent />
        </div>
    );
};

export default Loading;
