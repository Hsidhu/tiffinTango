import React from 'react';
import { Button, Result, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { uploadFile } from "../../../redux/Media/actions"
import { useDispatch, useSelector } from 'react-redux'
import MediaLibrary from './MediaLibrary';

const Media = ({}) => {

    const { mealplans } = useSelector(state => state)
    const dispatch = useDispatch();

    const customRequest = (file) => {
        console.log(file)
        dispatch(uploadFile(file));
        return false;
    };

    return(
        <>
             <Upload
                    name="file"
                    showUploadList={false}
                    beforeUpload={customRequest}
                >
                    <Button icon={<UploadOutlined />}>Upload File</Button>
            </Upload>

            <MediaLibrary/>
        </>
    )
};

export default Media;
