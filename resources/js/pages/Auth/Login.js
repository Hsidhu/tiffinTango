import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom';
import actions from '../../redux/Authenticate/actions';
import { Form, Input, Button, Checkbox, Row, Col, Layout } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

function Login() {
    const location = useLocation();
    const { loader } = useSelector(state => state.authenticateReducer)
    const dispatch = useDispatch();

    let userType;
    if (location.pathname.includes('/admin')) {
        userType = 'admin';
    } else if (location.pathname.includes('/customer')) {
        userType = 'customer';
    }

    let onFinish = (values) => {
        dispatch({
            type: actions.LOGIN,
            payload: { 
                'email': values.email, 
                'password': values.password, 
                'remember': values.remember,
                'user_type': userType
            },
        });
    };

    return (
        <Row justify="center" align="middle">
            <Col span={6}>
                <Form
                    name="normal_login"
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="email"
                        validateTrigger="onSubmit"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Email!',
                            },
                        ]}
                    >
                        <Input size="large"
                            prefix={<UserOutlined className="site-form-item-icon" />}
                            placeholder="Email" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        validateTrigger="onSubmit"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                        ]}
                    >
                        <Input
                            size="large"
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>
                        <a className="login-form-forgot" href="">Forgot password</a>
                    </Form.Item>
                    <Form.Item>
                        <Button loading={loader} type="primary" htmlType="submit" className="login-form-button"
                            size="large">Log in
                        </Button>
                        <Button type="link" href="/register">
                            Register Now!
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    );
}

export default Login;
