import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';

function Content() {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Form values:', values);
        // Xử lý logic khi form được submit
    };

    return (
        <div className="Form">
            <Form form={form} onFinish={onFinish}>
                <Form.Item label="Tên">
                    <Input name="name" />
                </Form.Item>
                <Form.Item label="Email">
                    <Input name="email" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default Content;
