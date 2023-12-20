// pages/Landing.js
import React from 'react';
import Button from '../../components/Button/Button';
import { Table, Input } from 'antd';
import Navbar from '../../components/Navbar/navbar';

const columnsProcess = [
  {
    title: 'Id Product',
    dataIndex: 'idProduct',
    key: 'idProduct',
    // render: (text) => text,
  },
  {
    title: 'Id Before',
    dataIndex: 'idBefore',
    key: 'idBefore',
  },
  {
    title: 'Product Name',
    dataIndex: 'Name',
    key: 'Name',
  },
  {
    title: 'Change Percent',
    dataIndex: 'ChangePercent',
    key: 'ChangePercent',
  },
  {
    title: 'Type',
    dataIndex: 'Type',
    key: 'Type',
  },
  {
    title: 'Description',
    dataIndex: 'Description',
    key: 'Description',
  },
  {
    title: 'Weight',
    key: 'Weight',
    dataIndex: 'Weight',
    
  },
  {
    title: 'Timestamp',
    key: 'Timestamp',
    dataIndex: 'Timestamp',
    
  },
];

const dataProcess = [
  {
    key: '1',
    idProduct: '0x123ABCdkgh',
    idBefore: '0x789DEF',
    Name: 'Rice',
    ChangePercent: '+10%',
    Type: 'Agriculture',
    Description: 'High-quality rice from farm X',
    Weight: '10kg',
    Timestamp: '2023-12-01 08:30:00',
  },
  {
    key: '2',
    idProduct: '0x456GHI',
    idBefore: '0x789DEF',
    Name: 'Wheat',
    ChangePercent: '-5%',
    Type: 'Agriculture',
    Description: 'Organic wheat from farm Y',
    Weight: '8kg',
    Timestamp: '2023-12-05 09:45:00',
  },
  {
    key: '3',
    idProduct: '0x789JKL',
    idBefore: '0xXYZ123',
    Name: 'Corn',
    ChangePercent: '+15%',
    Type: 'Agriculture',
    Description: 'Fresh corn from farm Z',
    Weight: '12kg',
    Timestamp: '2023-12-10 12:15:00',
  },
];

const dataLeft = [
  {
    label: 'Product Name',
    value: 'Rice',
  },
  {
    label: 'Type',
    value: 'Agriculture Food',
  },
  {
    label: 'Weight',
    value: '10kg',
  },
];

const Process = () => {
  return (
    <div className='h-screen bg-neutral-100'>
      <Navbar/>
    <div className="bg-neutral-100 w-full h-fit mx-auto flex justify-center items-center">
      {/* <Navbar /> */}
      <div className="text-center ml-[148px] mr-[148px]">
          <h1 className="text-4xl pt-[60px] mx-auto text-neutral-700">Process or Changes your Product</h1>
          <p className="max-w-[600px] min-h-[100px] text-base pt-[16px] pb-[16px] mx-auto text-neutral-600 mt-4">Efficiently manage your inventory using our blockchain-powered supply chain solution. Monitor your products journey from now!</p>
          <h2 className="mt-[60px] text-left text-3xl text-neutral-700">Find and Change Product</h2>
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
          <div className="pt-[24px] flex justify-between">
            <div className="w-full" style={{ maxWidth: 'calc(50% - 20px)' }}>
              <div className="pb-[16px]">
                <p className="pb-[8px] text-xl text-left text-neutral-700">Current</p>
                <div className='rounded-xl bg-neutral-200'>
                  {dataLeft.map((item, index) => (
                    <div key={index} className="p-[20px]">
                      <p className="pb-[8px] text-sm text-left text-neutral-700">{item.label}</p>
                      <Input 
                        style={{ 
                          height: '40px', 
                          fontSize: '16px',
                        }}
                        className="mt-[8px]" 
                        value={item.value} 
                        disabled 
                        placeholder={item.label} 
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-full" style={{ maxWidth: 'calc(50% - 20px)', height: 'calc(100% - 24px)' }}>
              <div className="pb-[16px]">
                <p className="pb-[8px] text-xl text-left text-neutral-700">Change into...</p>
                <div className='rounded-xl bg-neutral-200' style={{ height: '100%' }}>
                  <div className="p-[20px]">
                    <p className="pb-[8px] text-sm text-left text-neutral-700">Product Name</p>
                    <Input 
                      className="mt-[8px]" 
                      placeholder="e.g. 0x2KWJEF29B28VD2HV2" 
                      style={{ 
                        height: '40px',
                        fontSize: '16px',
                      }} 
                    />
                  </div>
                  <div className="p-[20px]">
                    <p className="pb-[8px] text-sm text-left text-neutral-700">Type</p>
                    <Input 
                      className="mt-[8px]" 
                      placeholder="e.g. Agriculture Food" 
                      style={{ 
                        height: '40px', 
                        fontSize: '16px',
                      }} 
                    />
                  </div>
                  <div className="p-[20px]">
                    <p className="pb-[8px] text-sm text-left text-neutral-700">Weight</p>
                    <Input 
                      className="mt-[8px]" 
                      placeholder="e.g. 350kg" 
                      style={{ 
                        height: '40px',
                        fontSize: '16px',
                      }} 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-[16px] justify-between text-right w-full">
          <Button variant="secondary">Cancel</Button>
          <Button>Change</Button>
          </div>
            <div className="pt-[60px] flex justify-between items-center w-full">
              <h2 className="text-3xl text-neutral-700">My Inventory</h2>
              </div>
              <div className="pt-[24px] pb-[60px] overflow-x-auto">
                <Table
                  columns={columnsProcess}
                  dataSource={dataProcess}
                  scroll={{  x: 'max-content' }}
                  style={{ minWidth: '1144px' }} // Atur lebar minimal yang diinginkan
                />
                </div>
      </div>
    </div>
    </div>
  );
};

export default Process;
