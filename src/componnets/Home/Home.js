import { Component } from "react";
import {
    Form, Input, Button
} from "antd";
import './Home.css';

const onFinish = (values) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

export default class Home extends Component {
    render() {
        return (
            <div className="form">
                <Form
                    name="basic"
                    labelCol={{
                        span: 4,
                    }}
                    wrapperCol={{
                        span: 20,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="网站地址"
                        labelAlign="left"
                        name="url"
                        rules={[
                            {
                                required: true,
                                message: 'Please input url!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 4,
                            span: 20,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            爬取
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
} 
