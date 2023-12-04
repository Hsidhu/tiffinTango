import React, { useState, useRef } from 'react';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux'
import {
    Row, Col, Button,
    Form, Input, Select,
    Switch, InputNumber, Upload
} from 'antd';
import MediaLibrary from '../../../components/containers/mediaLibrary';

const { TextArea } = Input;

const MealPlanForm = ({form, onFormChange, hasId, onFormSubmit }) => {

    const [previewVisible, setPreviewVisible] = useState(false);
    const [previewImage, setPreviewImage] = useState("");
    const [fileList, setFileList] = useState([]);
    const [mediaLibraryVisible, setMediaLibraryVisible] = useState(false);


    const handleCancel = () => {
        setPreviewVisible(false)
    }
    const handlePreview = (file) => {
        setPreviewImage(file.thumbUrl)
        setPreviewVisible(true)
    };
    const handleUpload = ({ fileList }) => {
        // this is equivalent to your "const img = event.target.files[0]"
        // here, antd is giving you an array of files, just like event.target.files
        // but the structure is a bit different that the original file
        // the original file is located at the `originFileObj` key of each of this files
        // so `event.target.files[0]` is actually fileList[0].originFileObj
        console.log('fileList', fileList);
        // you store them in state, so that you can make a http req with them later
        setFileList(fileList)
    };

    const handleRemove = (file) => {
        // Handle the removal of the file from the fileList
        const updatedFileList = fileList.filter((item) => item.uid !== file.uid);
        setFileList(updatedFileList);
    };

     // Function to handle file selection from the media library
    const handleMediaSelect = (mediaItem) => {
        // You would translate your media item into the format expected by Ant Design's Upload component
        const newFileList = [...fileList, {
            uid: mediaItem.id, // Must be unique
            name: mediaItem.name,
            preview: mediaItem.file_url,
            status: 'done',
            url: mediaItem.file_url, // The URL to access the media item
        }];

        setFileList(newFileList);
        setMediaLibraryVisible(false);
        form.setFieldsValue({
            mediaFileId: mediaItem.id
        });
    };

    const handleUploadClick = (event) => {
        event.preventDefault(); // This will prevent the default file dialog from opening
        setMediaLibraryVisible(true);
      };

    const uploadButton = (
        <div onClick={handleUploadClick}>
            <PlusOutlined />
            <div className="ant-upload-text">Upload</div>
        </div>
    );

    return (
        <>
            <Form
                form={form}
                labelCol={{ span: 4, }}
                wrapperCol={{ span: 14, }}
                layout="horizontal"
                initialValues={{ price: 1.00, discount: 0.00 }}
                onValuesChange={onFormChange}
                style={{}}
                onFinish={onFormSubmit}
            >
                {
                    hasId &&
                    <Form.Item name="id" hidden>
                        <Input type="hidden" />
                    </Form.Item>
                }
                <Form.Item name="mediaFileId" hidden>
                    <Input type="hidden" />
                </Form.Item>
                <Row>
                    <Col span={12}>
                        <Form.Item label="Name" name="name"
                            rules={[
                                {
                                    required: true
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item label="Description" name="description"
                            rules={[
                                {
                                    required: true
                                },
                            ]}
                        >
                            <TextArea rows={2} />
                        </Form.Item>
                        <Form.Item label="Short Description" name="short_description"
                            rules={[
                                {
                                    required: false
                                },
                            ]}
                        >
                            <TextArea rows={2} />
                        </Form.Item>
                        <Form.Item
                            name={['price']}
                            label="Price"
                            rules={[
                                { required: true },
                            ]}
                        >
                            <InputNumber
                                min={1}
                                precision={2}
                                step={1.00}
                                stringMode
                            />
                        </Form.Item>
                        <Form.Item
                            name={['discount']}
                            label="Discount"
                            rules={[
                                {
                                    required: false
                                },
                            ]}
                        >
                            <InputNumber
                                min={1}
                                precision={2}
                                step={1.00}
                                stringMode
                            />
                        </Form.Item>

                    </Col>
                    <Col span={12}>

                        <Form.Item label="Delivery Plan" name="delivery_days"
                            rules={[{
                                required: true
                            }]}
                        >
                            <Select
                                placeholder={'Select Plan delivery'}
                                style={{
                                    width: 400,
                                }}
                                options={[
                                    {value: 'mon_to_friday', label: 'Monday to Friday'},
                                    {value: 'mon_to_saturday', label: 'Monday to Saturday'}
                                ]}
                            />
                        </Form.Item>

                        <Form.Item label="Delivery Type" name="delivery_type"
                            rules={[{
                                required: true
                            }]}
                        >
                            <Select
                                placeholder={'Select Plan delivery'}
                                style={{
                                    width: 400,
                                }}
                                options={[
                                    {value: 'pickup', label: 'Pickup'},
                                    {value: 'delivery', label: 'Delivery'}
                                ]}
                            />
                        </Form.Item>

                        <Form.Item
                            name={['quota']}
                            label="quota"
                            rules={[
                                {
                                    required: false
                                },
                            ]}
                        >
                            <InputNumber
                                min={1}
                                step={1}
                                stringMode
                            />
                        </Form.Item>

                        <Form.Item label="Upload" name='image'>
                            <Upload
                                listType="picture-card"
                                limit={1}
                                fileList={fileList}
                                onPreview={handlePreview}
                                onChange={handleUpload}
                                onRemove={handleRemove}
                                openFileDialogOnClick={false}
                                beforeUpload={() => { return false; }}
                            >
                                {uploadButton}
                            </Upload>
                        </Form.Item>

                        <Form.Item label="Status" name="status" valuePropName="checked">
                            <Switch />
                        </Form.Item>

                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <Form.Item wrapperCol={{ offset: 2, span: 16 }}>
                            <Button type="primary" htmlType="submit">Submit</Button>
                        </Form.Item>
                    </Col>
                </Row>

            </Form>

            <MediaLibrary
                openLibraryFlag={mediaLibraryVisible}
                handleFileSelection={handleMediaSelect}
            />
        </>

    );
}

export default MealPlanForm;
