import React from 'react';
import {Form, Select,Radio, Row, Col, Button, Input} from 'antd' ;
const {Option} = Select;

export const cities =  ["Banovići", "Banja Luka", "Berkovići", "Bihać", "Bileća", "Bijeljina", "Bosanska Dubica", "Bosanska Gradiška", "Bosansko Grahovo",
"Bosanska Krupa", "Bosanska Kostajnica", "Bosanski Brod", "Bosanski Novi", "Bosanski Petrovac", "Bosanski Šamac", "Bratunac", "Brčko",
"Breza", "Bugojno", "Busovača", "Bužim", "Cazin", "Čajniče", "Čapljina", "Čelić", "Čitluk", "Čelinac", "Doboj", "Dobretići", "Domaljevac",
"Donji Vakuf", "Drvar", "Derventa", "Foča", "Fojnica", "Gacko", "Glamoč", "Gračanica", "Gradačac", "Grude", "Goražde", "Gornji Vakuf-Uskoplje",
"Ilijaš", "Jablanica", "Jajce", "Kakanj", "Kalesija", "Kalinovik", "Kiseljak", "Kladanj", "Ključ", "Konjic", "Kotor-Varoš", "Kreševo",
"Kupres", "Laktaši", "Livno", "Lukavac", "Lopare", "Ljubinje", "Ljubuški", "Maglaj", "Milići", "Modriča", "Mostar", "Mrkonjić Grad",
"Neum", "Nevesinje", "Novi Travnik", "Odžak", "Olovo", "Orašje", "Pale", "Posušje", "Prozor-Rama", "Pale-Prača", "Prijedor", "Prnjavor",
"Ravno", "Rogatica", "Rudo", "Sanski Most", "Sapna", "Sarajevo", "Skender Vakuf", "Sokolac", "Srbac", "Srebrenica", "Srebrenik", "Stanari",
"Stolac", "Šipovo", "Široki Brijeg", "Teočak", "Teslić", "Tešanj", "Tomislavgrad", "Travnik", "Trebinje", "Tuzla", "Usora", "Ustiprača",
"Vareš", "Velika Kladuša", "Visoko", "Višegrad", "Vitez", "Vogošća", "Vlasenica", "Zavidovići", "Zenica", "Zvornik", "Žepče", "Živinice",
];
const classes = ["VI razred OŠ", "VII razred OŠ", "VIII razred OŠ", "IX razred OŠ", "I razred SŠ", "II razred SŠ", "III razred SŠ", "IV razred SŠ"];

const courses = ["Grupa A", "Grupa B", "Srednja grupa", "Napredna grupa", "Predolimpijska grupa", "Olimpijska grupa"];

const CreateStudentForm = () => {

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
              name="create_student_form"
              onSubmit={handleSubmit}
              layout="vertical" >
            <Row gutter={[16,2]}>
                <Col span={12}>
                    <Form.Item label="Ime učenika" name="name" rules={[{required: true, message: "Neophodno je unijeti ime"}]}>
                        <Input/>
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item label="Prezime učenika" name="surname" rules={[{required: true, message: "Neophodno je unijeti prezime"}]}>
                        <Input/>
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={[16,2]}>
                <Col span={12}>
                    <Form.Item label="E-mail učenika" name="email" rules={[{required: true, message: "Neophodno je unijeti e-mail"}]}>
                        <Input/>
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item label="Telefon učenika" name="phone" rules={[{required: true, message: "Neophodno je unijeti broj telefona"}]}>
                        <Input/>
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={[16,2]}>
                <Col span={12}>
                    <Form.Item label="Škola" name="school" rules={[{required: true, message: "Neophodno je unijeti ime škole"}]}>
                        <Input/>
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item label="Razred" name="class" rules={[{required: true, message: "Neophodno je odabrati razred"}]}>
                        <Select
                            showSearch
                        >
                            {classes.map(classe => (
                                <Option value={classe}>{classe}</Option>
                            ))}
                        </Select>
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
            <Row gutter={[16,2]}>
                <Col span={12}>
                    <Form.Item label="Grupa" name="course" rules={[{required: true, message: "Neophodno je odabrati grupu"}]}>
                        <Select >
                            {courses.map(course => (
                                <Option value={course}>{course}</Option>
                            ))}
                        </Select>
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item label="Ime roditelja" name="parentName" rules={[{required: true, message: "Neophodno je unijeti ime roditelja"}]}>
                        <Input/>
                    </Form.Item>
                </Col>
                
            </Row>
            
            <Row gutter={[16,2]}>
                <Col span={12}>
                    <Form.Item label="Telefon roditelja" name="parentPhone" rules={[{required: true, message: "Neophodno je unijeti broj telefona roditelja"}]}>
                        <Input/>
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item label="E-mail roditelja" name="parentEmail">
                        <Input/>
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

export default CreateStudentForm ; 