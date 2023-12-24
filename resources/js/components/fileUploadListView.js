import React from 'react';
import { useDispatch } from 'react-redux'
import {
    List, Space, Button
} from 'antd';
import {CloseOutlined, FileOutlined, DownloadOutlined } from '@ant-design/icons';

const FileUploadListView = ({ objectID, type, fileListArray, onRemove }) => {
    const dispatch = useDispatch();

    const onRemoveHandler = (file) => {
        dispatch(
            onRemove({
                id:objectID,
                media_id:file.uid
            })
        )
    }

    const viewType = (file) => {
        switch (type) {
            case 'images':
                return  <img src={file.url} alt="Avatar" style={{ maxHeight: '100px' }} />
                break;
            default:
                return <>
                        <FileOutlined /> {file.name}
                </> 
                break;
        }
    }

    const downloadDocument = file => {
        // Add logic to handle downloading the document (replace with your actual logic)
        window.open(file.url, '_blank');
    };

    return(
        <List
            dataSource={fileListArray}
            renderItem={(file) => (
                <List.Item
                actions={[
                    <Space>
                        <Button
                            key={'download'}
                            type="link"
                            onClick={() => downloadDocument(file)}
                            icon={<DownloadOutlined />}
                        >
                            Download
                        </Button>
                        <Button
                            key={'Remove'}
                            type="link"
                            danger
                            icon={<CloseOutlined />}
                            onClick={() => onRemoveHandler(file)}
                        >
                            Remove
                        </Button>
                    </Space>
                ]}
                >
                    { viewType(file) }
                </List.Item>
            )}
        />
    )
};

export default FileUploadListView