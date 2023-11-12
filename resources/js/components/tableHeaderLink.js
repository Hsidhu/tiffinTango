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

const TableHeaderLink = ({ name, backUri, toUri, toText, HeaderButtons, children, subTitle }) => {
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
                subTitle={subTitle ?? null}
                extra={HeaderButtons}
            >
                { children ?? null}
            </PageHeader>
        </div>


    );
}

export default TableHeaderLink 
