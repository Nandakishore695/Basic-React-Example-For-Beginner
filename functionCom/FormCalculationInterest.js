import React, { useState } from 'react'
import { Button, Form, Input } from 'antd';

export default function FormCal() {
    const [dataInfo, setDataInfo] = useState({ total: "", intresetRate: "", dmy: "" });
    const [data, seData] = useState([]);
    const [error, setError] = useState(false);

    function handlerInput(e) {
        setDataInfo({ ...dataInfo, [e.target.name]: e.target.value })
    }
    function handlerSave(e) {
        e.preventDefault();
        if (!dataInfo.total || !dataInfo.intresetRate || !dataInfo.dmy) {
            setError(true);
            return false;
        }
        // if (=== "") {
        //     setError("pls enter persentage");
        // }
        // if ( === "") {
        //     setError("pls enter days no");
        // }
        else {
            seData([dataInfo]);
        }


    }
    return (
        <>
            <b>Simple Interest</b>
            <Form className='form-wrapper'
                onFinish={handlerSave} >
                <Form.Item
                    label="Principle:"
                    name="total"
                    rules={[{ required: true, message: 'Please input your total!' }]}
                >
                    <Input style={{ width: "220px" }} name="total" onChange={(e) => handlerInput(e)} />
                    {error && !dataInfo.total &&<span style={{color:"red"}}>pls enter amount</span>}
                </Form.Item>
                <Form.Item
                    label="Rate:"
                    name="intresetRate"
                    rules={[{ required: true, message: 'Please input your intresetRate!' }]}
                >
                    <Input style={{ width: "220px" }} name="intresetRate" onChange={(e) => handlerInput(e)} />
                    {error && !dataInfo.intresetRate &&<span style={{color:"red"}}>pls enter persentage</span>}
                </Form.Item>
                <Form.Item
                    label="Time:"
                    name="dmy"
                    rules={[{ required: true, message: 'Please input your period!' }]}
                >
                    <Input style={{ width: "220px" }} name="dmy" onChange={(e) => handlerInput(e)} />
                    {error && !dataInfo.dmy &&<span style={{color:"red"}}>pls enter days no</span>}
                </Form.Item>
                <br />
                <Button htmlType='submit' type='primary' onClick={handlerSave}>Calculation</Button>
            </Form>
            {
                data.map((item, index) => (
                    <div key={index}><>Total Amount:-{item.total}</>
                        <br />
                        <>Rate of Interest:-{item.intresetRate}</>
                        <br />
                        <>Period:-{item.dmy}</></div>
                ))
            }
        </>
    )
}
