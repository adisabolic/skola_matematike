import React, {useState} from 'react';
import { Button,Switch,Row, Drawer} from 'antd';
import CreateStudentForm from './CreateStudentForm';
import CreateMentorForm from './CreateMentorForm';

const CreateStudentDrawer = () => {
    const [visible,setVisible] = useState(false);
    const [student, setStudent] = useState(true);
   
  const showDrawer = () => {
      setVisible(true);
      
  };

  const onClose = () => {
      setVisible(false);
  };

  const onSwitchChange = (checked) => {
      setStudent(checked);

  }


  return(
      <>
       
        <Button style={{marginTop: '6vh'}} type="link" onClick={showDrawer} >Registruj se</Button>
        <Drawer
            title="Registracija"
            onClose={onClose}
            visible={visible}
            width={'60vw'}
            footer={null}>
                <Row justify="end">
                <Switch  checkedChildren="učenik"
                 unCheckedChildren="predavač" defaultChecked onChange={onSwitchChange} />
                 </Row>
                 {student ? <CreateStudentForm/> : <CreateMentorForm/> }
            </Drawer>
       </>
  );

}

export default CreateStudentDrawer;