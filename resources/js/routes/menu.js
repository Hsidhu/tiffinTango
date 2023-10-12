import { Menu } from 'antd';
import {
    DashboardOutlined,
    CopyFilled,
    SettingFilled,
    FileTextFilled,
    DesktopOutlined,
    CarFilled,
    FileOutlined,
    PushpinFilled,
    TeamOutlined,
    UserOutlined,
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
    getItem('/', 'Home', <DashboardOutlined />),
    getItem('/order/mealplan', 'MealPlan', <DesktopOutlined />),
    getItem('/login', 'login', <DesktopOutlined />)
];

export const protectedSideMenu = [
    getItem('/admin/dashboard', 'Dashboard', <DashboardOutlined />),
    getItem('/admin/orders', 'Orders', <DesktopOutlined />),
    getItem('/admin/locations', 'Locations', <PushpinFilled />),
    getItem('/admin/mealplans', 'MealPlan', <CopyFilled />),
    getItem('/admin/customers', 'Customers', <CarFilled />),
    getItem('/admin/drivers', 'Drivers', <CarFilled />),
    getItem('/admin/delivery_zones', 'Delivery Zone', <CarFilled />),
    getItem('/admin/settings', 'Settings', <SettingFilled />),
    getItem('User', 'sub1', <UserOutlined />, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
    ]),
];
