import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import {
    DashboardOutlined,
    HomeFilled,
    CopyFilled,
    SettingFilled,
    LoginOutlined,
    UnorderedListOutlined,
    UserOutlined,
    CarFilled,
    PushpinFilled,
    TeamOutlined
} from '@ant-design/icons';

function getItem(key, label, icon, children) {
    return {
        key,
        label,
        icon,
        children,
    };
}

export const publicTopMenu = [
    getItem('/', 'Home', <HomeFilled />),
    getItem('/order/mealplan',  <Link to="/order/mealplan" >MealPlan</Link>, <UnorderedListOutlined />),
    getItem('/order/catering', 'Catering', <UnorderedListOutlined />),
    getItem('/order/takeout', 'Takeout', <UnorderedListOutlined />),
    getItem('/login', 'login', <LoginOutlined />)
];

export const adminSideMenu = [
    getItem('/admin/dashboard', 'Dashboard', <DashboardOutlined />),
    getItem('/admin/orders', 'Orders', <UnorderedListOutlined />),
    getItem('/admin/customers', 'Customers', <TeamOutlined />),
    getItem('/admin/drivers', 'Drivers', <TeamOutlined />),
    getItem('/admin/mealplans', 'MealPlans', <CopyFilled />),
    getItem('/admin/delivery_zones', 'Delivery Zone', <CarFilled />),
    getItem('/admin/locations', 'Locations', <PushpinFilled />),
    getItem('/admin/settings', 'Settings', <SettingFilled />)
];

export const customerSideMenu = [
    getItem('/customer/dashboard', 'Dashboard', <DashboardOutlined />),
    getItem('/customer/orders', 'Orders', <UnorderedListOutlined />)
];
