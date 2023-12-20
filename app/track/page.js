// pages/Landing.js
import React from 'react';
import Button from '../../components/Button/Button';
import { Table, Input } from 'antd';
import Navbar from '../../components/Navbar/navbar';

const columnsOrigin = [
  {
    title: 'Id Product',
    dataIndex: 'idProduct',
    key: 'idProduct',
    // render: (text) => text,
  },
  {
    title: 'Product Name',
    dataIndex: 'Name',
    key: 'Name',
  },
  {
    title: 'Type',
    dataIndex: 'Type',
    key: 'Type',
  },
  {
    title: 'From',
    dataIndex: 'idFrom',
    key: 'idFrom',
  },
  {
    title: 'To',
    dataIndex: 'idTo',
    key: 'idTo',
  },
  {
    title: 'Weight',
    dataIndex: 'Weight',
    key: 'Weight',
  },
  {
    title: 'Timestamp',
    dataIndex: 'TimeStamp',
    key: 'TimeStamp',
  },
  {
    title: 'Buy Price',
    dataIndex: 'buyPrice',
    key: 'buyPrice',
  },
];

const dataOrigin = [
  {
    key: '1',
    idProduct: '0x123ABC',
    Name: 'Rice',
    Type: 'Agriculture',
    idFrom: '0x789DEF',
    idTo: '0xXYZ123',
    Weight: '10kg',
    TimeStamp: '2023-12-01 08:30:00',
    buyPrice: '$20',
  },
  {
    key: '2',
    idProduct: '0x456GHI',
    Name: 'Wheat',
    Type: 'Agriculture',
    idFrom: '0x789DEF',
    idTo: '0xABC456',
    Weight: '8kg',
    TimeStamp: '2023-12-02 10:15:00',
    buyPrice: '$18',
  },
];

const Track = () => {
  return (
    <div className='h-screen bg-neutral-100'>
      <Navbar/>
    <div className="bg-neutral-100 w-full h-fit mx-auto flex justify-center items-center">
      {/* <Navbar /> */}
      <div className="text-center ml-[148px] mr-[148px]">
          <h1 className="text-4xl pt-[60px] mx-auto text-neutral-700">Track your Product Origin</h1>
          <p className="max-w-[600px] min-h-[100px] text-base pt-[16px] pb-[16px]  mx-auto text-neutral-600">Efficiently manage your inventory using our blockchain-powered supply chain solution. Monitor your products journey from now!</p>
          <h2 className="mt-[60px] text-left text-3xl text-neutral-700">See Where your Product Came From...</h2>
          <p className="text-base text-left pt-[16px] pr-[80px] text-neutral-600"> Track your product’s final destinations by entering its Id. Discover where your product destination!</p>
          <div className="mt-[16px] flex justify-between items-center w-full">
          <Input
            style={{ 
              height: '40px', 
              borderRadius: '24px',
              paddingLeft: '20px',
              fontSize: '16px',
            }}
            placeholder="Product Id, e.g. 0x1AU42CVAW5JUU397"
          />
          <Button>Search</Button>
          </div>
            <div className="pt-[60px] flex justify-between items-center w-full">
              <h2 className="text-3xl text-neutral-700">Origin Result</h2>
              </div>
              <div className="pt-[24px] pb-[60px] overflow-x-auto">
                <Table
                  columns={columnsOrigin}
                  dataSource={dataOrigin}
                  scroll={{  x: 'max-content' }}
                  style={{ minWidth: '1144px' }} // Atur lebar minimal yang diinginkan
                />
                </div>
      </div>
    </div>
    </div>
  );
};

export default Track;
