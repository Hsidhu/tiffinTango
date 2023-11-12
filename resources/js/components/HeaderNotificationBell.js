import { useHistory } from 'react-router-dom';
import { BellOutlined } from '@ant-design/icons';
import { 
    Dropdown, Badge
} from 'antd';

const itemsMenu = [
    {
      label: <a href="https://www.antgroup.com">1st menu item</a>,
      key: '0',
    },
    {
      label: <a href="https://www.aliyun.com">2nd menu item</a>,
      key: '1',
    },
    {
      type: 'divider',
    },
    {
      label: '3rd menu item',
      key: '3',
    },
];

const HeaderNotificationBell = ({}) => {
    const navigate = useHistory();

    return (
        <>
            <Dropdown
                placement="bottomRight"
                menu={{
                    items: itemsMenu,
                }}
                trigger={['click']}
            >
                <a href="#" style={{display:"flex"}}>
                    <Badge count={5}>
                        <BellOutlined style={{ fontSize: '24px' }}/>
                    </Badge>
                </a>
            </Dropdown>
        </>
    );
}

export default HeaderNotificationBell;
