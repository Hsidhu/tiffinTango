import React from 'react';
import {
    Card, Col,
    Row, Button, Upload
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import { useDispatch, useSelector } from 'react-redux'
import { createDeliveryZone } from "../redux/DeliveryZone/actions"
import Papa from 'papaparse';


const CreateZones = () => {
    const customer = useSelector(state => state.customer)
    const dispatch = useDispatch();

    // Handle the CSV file upload
  const handleUpload = (file) => {
    // Use PapaParse to parse the CSV file
    Papa.parse(file, {
      complete: (result) => {
        // Handle the CSV data here
        const data = result.data;
        console.log(data);
        dispatch(createDeliveryZone({ csvData: result.data }))
      },
      header: true, // If the CSV has headers
    });
  };

    return (
        <Row gutter={16} style={{ display: 'flex' }}>
            <Col span={8}>

                <Upload
                    accept=".txt, .csv"
                    showUploadList={false}
                    beforeUpload={file => {
                        handleUpload(file)
                        return false;
                    }}
                >
                    <Button>
                        <UploadOutlined /> Upload CSV
                    </Button>
                </Upload>
            </Col>
            <Col span={8}>

            </Col>
            <Col span={8}>

            </Col>
        </Row>)
};

export default CreateZones;