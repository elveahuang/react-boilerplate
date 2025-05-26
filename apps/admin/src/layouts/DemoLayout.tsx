import { Layout } from 'antd';
import { Outlet } from 'react-router';

const DemoLayout = () => {
    return (
        <Layout className="h-full max-h-full w-full max-w-full">
            <Layout.Content className="app-layout-content">
                <Outlet />
            </Layout.Content>
        </Layout>
    );
};

export default DemoLayout;
