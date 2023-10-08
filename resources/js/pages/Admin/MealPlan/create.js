import React, { useState, useRef } from 'react';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import {
    Row, Col,
    Button,
    Form,
    Input,
    Switch,
    InputNumber,
    Upload
} from 'antd';
import { createMealPlan } from '../../../redux/MealPlan/actions';

const { TextArea } = Input;

const Create = ({ }) => {
    const history = useHistory()
    const [componentSize, setComponentSize] = useState();
    const [previewVisible, setPreviewVisible] = useState(false);
    const [previewImage, setPreviewImage] = useState("");
    const [fileList, setFileList] = useState([]);

    const handleCancel = () => {
        setPreviewVisible(false)
    }
    const handlePreview = file => {
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

    const errors = useSelector(state => state.errors)
    const dispatch = useDispatch();

    const [form] = Form.useForm()

    const onFormLayoutChange = ({ first_name }) => {
        console.log(first_name);
        setComponentSize(first_name);
    };

    const onFormSubmit = (values) => {
        if (errors) {
            // errors.reset()
        }
        // formData.append("file", this.state.fileList[0].originFileObj);
        values.file = fileList[0].originFileObj;
        console.log(values)
        dispatch(createMealPlan(values));
    }

    const uploadButton = (
        <div>
            <PlusOutlined />
            <div className="ant-upload-text">Upload</div>
        </div>
    );

    return (
        <Form
            form={form}
            labelCol={{ span: 4, }}
            wrapperCol={{ span: 14, }}
            layout="horizontal"
            initialValues={{ price: 1.00, discount: 0.00 }}
            onValuesChange={onFormLayoutChange}
            style={{}}
            onFinish={onFormSubmit}
        >
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
                        name = {['price']}
                        label = "Price"
                        rules={[
                            {
                                required: true
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
                    <Form.Item
                        name = {['discount']}
                        label = "Discount"
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
                    <Form.Item label="duration" name="duration"
                        rules={[{
                            required: false
                        }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item label="Upload" name='image'>
                        <Upload
                            disabled={fileList.length == 0 ? false : true}
                            listType="picture-card"
                            fileList={fileList}
                            onPreview={handlePreview}
                            onChange={handleUpload}
                            beforeUpload={() => false} // return false so that antd doesn't upload the picture right away
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
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">Submit</Button>
                    </Form.Item>
                </Col>
            </Row>

        </Form>
    );
}

export default Create;
