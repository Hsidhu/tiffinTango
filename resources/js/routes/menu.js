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
    getItem('/admin/locations', 'Locations', <DesktopOutlined />),
    getItem('/admin/location_zones', 'Zones', <PushpinFilled />),
    getItem('/admin/mealplan', 'MealPlan', <CopyFilled />),
    getItem('/admin/mealplanorders', 'MealPlan - Orders', <CopyFilled />),
    getItem('/admin/drivers', 'Drivers', <CarFilled />),
    getItem('/admin/customer', 'Customers', <CarFilled />),
    getItem('/admin/settings', 'Settings', <SettingFilled />),
    getItem('User', 'sub1', <UserOutlined />, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
    ]),
];
