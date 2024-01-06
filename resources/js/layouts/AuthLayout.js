import { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Layout } from 'antd';
import Spinner from '../components/Spinner';
import actions from '../redux/Authenticate/actions';
import {USER_TYPE_CUSTOMER } from '../config/constants';

const { Content } = Layout;

const AuthLayout = () => {
    const dispatch = useDispatch();
    const { isAuthenticated, validateUserLoader, userType } = useSelector(state => state.authenticateReducer)
    
    useEffect(() => {
        if (!isAuthenticated) {
            dispatch({
                type: actions.GET_AUTH_USER,
            });
        }
    }, [])

    if (validateUserLoader) {
        return <Spinner />;
    }

    const redirectTo = userType == USER_TYPE_CUSTOMER ? 'customer' : 'admin';

    return (
        <Layout className="layout" style={{ minHeight: '100vh' }}>
            <Content style={{ padding: '50px' }}>
                {
                    !isAuthenticated ? <Outlet /> : <Navigate to={`/${redirectTo}/dashboard`} replace />
                }
            </Content>
        </Layout>
    );
}

export default AuthLayout;
