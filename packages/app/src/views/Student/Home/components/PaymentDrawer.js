import React, {useState} from 'react';
import { Button, Drawer} from 'antd';
import PaymentTable from './PaymentTable';


const PaymentDrawer = () => {
    const [visible,setVisible] = useState(false);
   
    const showDrawer = () => {
        setVisible(true);
        
    };

    const onClose = () => {
        setVisible(false);
    };


    return(
        <>
        
            <Button  type="link" onClick={showDrawer} >Uplate</Button>
            <Drawer
                title="Uplate studenta"
                onClose={onClose}
                visible={visible}
                width={'30vw'}
                footer={null}>
                    <PaymentTable/>
                </Drawer>
        </>
    );

}

export default PaymentDrawer;