import React from "react";
import { Button, Form, Input } from 'antd';

class FormDetalis extends React.Component {
    constructor() {
        super();
        
        this.useRef = React.createRef;
    }


    onFinish = (values) => {
        console.log('Success:', values);
    };

    onReset = () => {
        this.useRef.Form.reset();
    };
    render() {
        return (
            <>
                <Form ref={this.useRef} onFinish={this.onFinish}>
                    <Form.Item
                        label="Username"
                        name="username">
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Username"
                        name="lastrname">
                        <Input />
                    </Form.Item>
                    <Form.Item
                    >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                    <Form.Item
                    >
                        <Button type="primary" htmlType="submit" onClick={this.onReset}>
                            Reset
                        </Button>
                    </Form.Item>

                </Form>
            </>
        )
    }
}
export default FormDetalis;