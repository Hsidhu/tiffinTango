
import React, {useEffect, useState} from 'react';
import { 
    Table, Button,
    List, Radio, Divider
} from 'antd';

const columns = [
    {
        title: 'name',
        dataIndex: 'name',
        key: 'name',
    }
];

const MediaFileView = ({handleFileSelection, mediaFiles, getMediaFiles}) => {
    const [files, setFiles] = useState([]);

    const [selectedFileID, setSelectedFileID] = useState();

    useEffect(() => {
        getMediaFiles()
    }, []);

    if(!mediaFiles) {
        return null;
    }

    const handleAttachFile = () => {
        const findFileDetail = mediaFiles.data.find(obj => obj.id === selectedFileID)
        console.log(findFileDetail);
        handleFileSelection(findFileDetail)
    }

    // Implement media selection and form integration logic
    return (
        <div>
            {
                selectedFileID &&
                <Button type="primary" onClick={handleAttachFile}>Attach Media</Button>
            }
            <Divider/>
            <List
                itemLayout="horizontal"
                dataSource={mediaFiles.data}
                renderItem={(item) => (
                    <List.Item
                    onClick={() => setSelectedFileID(item.id) }
                    style={{ cursor: 'pointer', background: selectedFileID === item.id ? '#e6f7ff' : 'white' }}
                    >
                    <List.Item.Meta
                        avatar={<Radio value={item.id} checked={selectedFileID === item.id} onChange={() => setSelectedFileID(item.id)} />}
                        title={item.src}
                        description={<img src={item.file_url} alt="Image" width="180" height="100" />}
                    />
                    </List.Item>
                )}
                />
        </div>
    );
};

export default MediaFileView;