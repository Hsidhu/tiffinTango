import React from 'react';
import { useHistory } from 'react-router-dom';
import {
    Row, Col, Space,
    Button, Descriptions,
    PageHeader
} from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { isEmpty } from 'lodash';

const headerWrapper = {
    padding: "24px",
    backgroundColor: "#f5f5f5"
}

const TableHeaderLink = ({ name, backUri, toUri, toText, HeaderButtons, children }) => {
    const history = useHistory();
    const navTo = (uri) => {
        history.push(uri)
    }

    if(isEmpty(HeaderButtons)){
        HeaderButtons = [
            <Button key="2">Operation</Button>,
            !toUri ? null :
                <Button key="3" type="primary" onClick={() => navTo(toUri)} >
                    {toText}
                </Button>,
        ]
    }

    return (

        <div className="site-page-header-ghost-wrapper">
            <PageHeader
                ghost={false}
                onBack={() => window.history.back()}
                title={name}
                subTitle="This is a subtitle"
                extra={HeaderButtons}
            >
                { children ?? null}
                <Descriptions size="small" column={3}>
                    <Descriptions.Item label="Created">Lili Qu</Descriptions.Item>
                    <Descriptions.Item label="Creation Time">2017-01-10</Descriptions.Item>
                    <Descriptions.Item label="Effective Time">2017-10-10</Descriptions.Item>
                </Descriptions>
            </PageHeader>
        </div>


    );
}

export default TableHeaderLink 
