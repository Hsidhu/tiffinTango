import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Button
} from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { PageHeader } from '@ant-design/pro-layout';
import { isEmpty } from 'lodash';


const TableHeaderLink = ({ name, backUri, toUri, toText, HeaderButtons, children, subTitle }) => {
    const navigate = useNavigate();
    const navTo = (uri) => {
        navigate(uri)
    }

    if(isEmpty(HeaderButtons)){
        HeaderButtons = [
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
