import React from 'react';
import { Table,} from 'antd';

const columns = [
  {
    title:'Godina',
    dataIndex: ['cycle','year']
  },
  {
    title: 'Ciklus',
    dataIndex:['cycle','ordinalNumber'],
  },
  {
    title: 'Iznos',
    dataIndex: 'paymentAmount',
  },
  {
    title: 'Datum',
    dataIndex: 'createdAt',
  },
];

const data = [
  {
    _id: '1',
    cycle:{ordinalNumber:1, year:'2019/2020'},
    paymentAmount: 40,
    createdAt: '22.10.2019',
  },
  {
    _id: '2',
    cycle:{ordinalNumber:2, year:'2019/2020'},
    paymentAmount: 40,
    createdAt: '22.12.2019',
  },
  {
    _id: '1',
    cycle:{ordinalNumber:3, year:'2019/2020'},
    paymentAmount: 40,
    createdAt: '1.2.2020',
  },
];

const PaymentTable = () => {
    return(
        <Table columns={columns}
         dataSource={data}
         pagination={false}
         rowKey={'_id'} />
    );
};

export default PaymentTable;
