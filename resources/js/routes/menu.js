import { Menu } from 'antd';
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
    TeamOutlined,
    FileTextFilled,
    DesktopOutlined,
    FileOutlined
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
    getItem('/order/mealplan', 'MealPlan', <UnorderedListOutlined />),
    getItem('/order/catering', 'Catering', <UnorderedListOutlined />),
    getItem('/order/takeway', 'Takeway', <UnorderedListOutlined />),
    getItem('/login', 'login', <LoginOutlined />)
];

export const protectedSideMenu = [
    getItem('/admin/dashboard', 'Dashboard', <DashboardOutlined />),
    getItem('/admin/orders', 'Orders', <UnorderedListOutlined />),
    getItem('/admin/locations', 'Locations', <PushpinFilled />),
    getItem('/admin/mealplans', 'MealPlan', <CopyFilled />),
    getItem('/admin/customers', 'Customers', <TeamOutlined />),
    getItem('/admin/drivers', 'Drivers', <TeamOutlined />),
    getItem('/admin/delivery_zones', 'Delivery Zone', <CarFilled />),
    getItem('/admin/settings', 'Settings', <SettingFilled />),
    getItem('User', 'sub1', <UserOutlined />, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
    ]),
];
