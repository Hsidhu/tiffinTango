import React, { useEffect, useState } from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Row, Col, Upload,
    Button, Modal, Divider } from 'antd';

import MediaFileView from './containers/mediaFileView';


const MediaLibrary = ({openLibraryFlag, uploadFile, handleFileSelection}) => {

    console.log(openLibraryFlag);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(openLibraryFlag)
    }, [openLibraryFlag]);

    const customRequest = (file) => {
        uploadFile(file);
        return false;
    };
    
    return (
        <>
            <Button type="primary" onClick={() => setOpen(true)}>
                Open Modal of 1000px width
            </Button>

                <Modal
                    title="Modal 1000px width"
                    centered
                    open={open}
                    onOk={() => setOpen(false)}
                    onCancel={() => setOpen(false)}
                    width={1000}
                    maskClosable={false}
                >
                    <Row>
                        <Col span={12}>

                            <Upload
                                name="file"
                                showUploadList={false}
                                beforeUpload={customRequest}
                            >
                                <Button icon={<UploadOutlined />}>Upload File</Button>
                            </Upload>

                        </Col>
                    </Row>
                    <Divider/>

                        <MediaFileView 
                            handleFileSelection={handleFileSelection}
                        />

                </Modal>
            
        </>
    );
}

export default MediaLibrary;
