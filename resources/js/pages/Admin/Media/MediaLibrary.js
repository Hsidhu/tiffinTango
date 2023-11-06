
import React, {useEffect, useState} from 'react';
import { Table, Button } from 'antd';
import { getMediaFiles } from "../../../redux/Media/actions"
import { useDispatch, useSelector } from 'react-redux'

const columns = [
    {
        title: 'name',
        dataIndex: 'name',
        key: 'name',
    }
];

const data = [
    // Populate data with media files retrieved from the Laravel backend
];

const MediaLibrary = () => {
    const [files, setFiles] = useState([]);

    const { mediaFiles } = useSelector(state => state)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMediaFiles())
    }, []);

    if(!mediaFiles) {
        return null;
    }

    // Implement media selection and form integration logic
    return (
        <div>
            <Table columns={columns} dataSource={data} />
            <Button type="primary">Select Media</Button>
        </div>
    );
};

export default MediaLibrary;