import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import {
    DashboardOutlined,
    HomeFilled,
    CopyFilled,
    SettingFilled,
    LoginOutlined,
    UnorderedListOutlined,
    AimOutlined,
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
    getItem('/order/catering', <Link to="/order/catering" >Catering</Link>, <UnorderedListOutlined />),
    getItem('/order/takeout', <Link to="/order/takeout" >Takeout</Link>, <UnorderedListOutlined />),
    getItem('/login', 'login', <LoginOutlined />)
];

export const adminSideMenu = [
    getItem('/admin/dashboard', <Link to="/admin/dashboard" >Dashboard</Link>, <DashboardOutlined />),
    getItem('/admin/orders', <Link to="/admin/orders" >Orders</Link>, <UnorderedListOutlined />),
    getItem('/admin/customers',<Link to="/admin/customers" >Customers</Link>, <TeamOutlined />),
    getItem('/admin/drivers',<Link to="/admin/drivers" >Drivers</Link>, <TeamOutlined />),
    getItem('/admin/marketing',<Link to="/admin/marketing" >Marketing</Link>, <AimOutlined />),
    getItem('/admin/mealplans',<Link to="/admin/mealplans" >MealPlans</Link>, <CopyFilled />),
    getItem('/admin/delivery_zones',<Link to="/admin/delivery_zones" >Delivery Zone</Link>, <CarFilled />),
    getItem('/admin/locations', <Link to="/admin/locations" >Locations</Link>, <PushpinFilled />),
    getItem('/admin/settings',<Link to="/admin/settings" >Settings</Link>, <SettingFilled />)
];

export const customerSideMenu = [
    getItem('/customer/dashboard', <Link to="/customer/dashboard" >Dashboard</Link>, <DashboardOutlined />),
    getItem('/customer/orders', <Link to="/customer/orders" >Orders</Link>, <UnorderedListOutlined />)
];
