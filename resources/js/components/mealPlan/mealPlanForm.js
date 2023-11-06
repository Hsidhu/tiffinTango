import React, { useState, useEffect } from 'react';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import {isEmpty} from 'lodash';
import {
    Row, Col, Button,
    Form, Input, Switch, InputNumber,
    Upload
} from 'antd';
import { getMealPlan, updateMealPlan } from '../../redux/MealPlan/actions';
import { imageUrl } from '../../config/helpers';

const { TextArea } = Input;

const MealPlanForm = ({ }) => {
    const history = useHistory()
    let { id } = useParams();
    const [componentSize, setComponentSize] = useState();
    const [previewVisible, setPreviewVisible] = useState(false);
    const [previewImage, setPreviewImage] = useState("");
    const [fileList, setFileList] = useState([]);

    const mealplan = useSelector(state => state.mealplan)
    const dispatch = useDispatch();

    if(!mealplan){
        return null;
    }

    const handleCancel = () => {
        setPreviewVisible(false)
    }
    const handlePreview = file => {
        setPreviewImage(file.thumbUrl)
        setPreviewVisible(true)
    };
    const handleUpload = ({ fileList }) => {
        setFileList(fileList)
    };

    const [form] = Form.useForm()

    const onFormLayoutChange = ({ first_name }) => {
        console.log(first_name);
        setComponentSize(first_name);
    };

    const mapSwitchValue = (value) => (value ? 1 : 0);
    const onFormSubmit = (values) => {
        // formData.append("file", this.state.fileList[0].originFileObj);
        values.file = isEmpty(fileList) ? null : fileList[0].originFileObj;
        values.status = mapSwitchValue(values.status);
        
        dispatch(updateMealPlan(values));
    }

    const handleImageRemove = (file) => {
        // Handle the removal of the file from the fileList
        const updatedFileList = fileList.filter((item) => item.uid !== file.uid);
        setFileList(updatedFileList);
    };

    useEffect(() => {
        setFileList([
            {
                uid: '-1',
                name: 'image.png', // You can use a name from the URL or any preferred name
                status: 'done',
                url:  imageUrl(`images/${mealplan.image}`), // Replace with your image URL
            },
        ])
        form.setFieldsValue({...mealplan})
    }, [form, mealplan])

    return (
        <Form
            form={form}
            labelCol={{ span: 4, }}
            wrapperCol={{ span: 14, }}
            layout="horizontal"
            onValuesChange={onFormLayoutChange}
            onFinish={onFormSubmit}
        >
            <Form.Item name="id" hidden>
                <Input type="hidden" />
            </Form.Item>
            <Row>
                <Col span={12}>
                    <Form.Item label="Name" name="name"
                        rules={[
                            { required: true },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item label="Description" name="description"
                        rules={[
                            { required: true },
                        ]}
                    >
                        <TextArea rows={2} />
                    </Form.Item>
                    <Form.Item label="Short Description" name="short_description"
                        rules={[
                            { required: false },
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
                    <Form.Item label="Duration" name="duration"
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
                            limit={1}
                            fileList={fileList}
                            onPreview={handlePreview}
                            onChange={handleUpload}
                            onRemove={handleImageRemove}
                            beforeUpload={() => false} // return false so that antd doesn't upload the picture right away
                            >
                            <div>
                                <PlusOutlined />
                                <div className="ant-upload-text">Upload</div>
                            </div>
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

export default MealPlanForm;
