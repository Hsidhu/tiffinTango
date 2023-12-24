import React from 'react';
import { useDispatch } from 'react-redux'
import {
    Upload, Button
} from 'antd';
import {UploadOutlined } from '@ant-design/icons';

const FileUpload = ({ objectID, type, buttonText = 'Upload', onAdd }) => {
    
    const dispatch = useDispatch();

    const onChangeHandler = (file) => {
        console.log(file)
        const formData = new FormData();
        formData.append('id', objectID);
        formData.append(type, file.fileList[0].originFileObj);
        dispatch(onAdd(formData))
    }

    return(
        <>
            <Upload
                beforeUpload={() => false}
                showUploadList={false}
                fileList={[]}
                onChange={onChangeHandler}
                customRequest={({ onSuccess }) => onSuccess('ok')}
            >
                <Button icon={<UploadOutlined />}>Upload Document</Button>
            </Upload>
        </>
    )
};

export default FileUpload

