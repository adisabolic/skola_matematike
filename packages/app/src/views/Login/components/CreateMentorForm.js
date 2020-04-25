import React from 'react';
import {Form, Select,Row,Radio, Col, Button, Input} from 'antd' ;
import {cities} from './CreateStudentForm';
const {Option} = Select;


const CreateMentorForm = () => {
    const [form] = Form.useForm();

    const handleSubmit = (e) => {
        if (e) e.preventDefault();
        form.validateFields((err, values) => {
          if (!err) {
            
          }
        });
      };

    const handleReset = (e) => {
        if (e) e.preventDefault();
        form.resetFields();
      };
    
    return(
        <>
        <Form form={form}
              name="create_mentor_form"
              onSubmit={handleSubmit}
              layout="vertical" >

                <Row gutter={[16,2]}>
                <Col span={12}>
                    <Form.Item label="Ime predavača" name="name" rules={[{required: true, message: "Neophodno je unijeti ime"}]}>
                        <Input/>
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item label="Prezime predavača" name="surname" rules={[{required: true, message: "Neophodno je unijeti prezime"}]}>
                        <Input/>
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={[16,2]}>
                <Col span={12}>
                    <Form.Item label="E-mail predavača" name="email" rules={[{required: true, message: "Neophodno je unijeti e-mail"}]}>
                        <Input/>
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item label="Telefon predavača" name="phone" rules={[{required: true, message: "Neophodno je unijeti broj telefona"}]}>
                        <Input/>
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={[16,2]}>
                <Col span={12} >
                    <Form.Item label="Entitet" name="entity" rules={[{required: true, message: "Neophodno je odabrati entitet"}]}>
                        <Radio.Group buttonStyle="solid">
                            <Radio.Button value="Brčko Distrikt">BD</Radio.Button>
                            <Radio.Button value="Federacija BiH">FBiH</Radio.Button>
                            <Radio.Button value="Republika Srpska">RS</Radio.Button>
                        </Radio.Group>
                    </Form.Item>
                </Col>

                <Col span={12}>
                    <Form.Item label="Grad" name="city" rules={[{required: true, message: "Neophodno je unijeti grad"}]}>
                        <Select
                            showSearch
                        >
                            {cities.map(city =>(
                                <Option value={city}>{city}</Option>
                            ))}
                        </Select>
                    </Form.Item>
                </Col>
            </Row>
              </Form>
            <Row align="bottom" justify="end" gutter={[16,2]}>
        <Col>
            <Button onClick={handleReset}>Restartuj</Button>
        </Col>
        <Col>
            <Button type="primary" onClick={handleSubmit}>Kreiraj</Button>
        </Col>

      </Row> </>
         
    );

};

export default CreateMentorForm;