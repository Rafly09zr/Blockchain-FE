// pages/Landing.js
import React from 'react';
import Button from '../../components/Button/Button';
import { Table, Input } from 'antd';
import Navbar from '../../components/Navbar/navbar';

const columnsAccount = [
  {
    title: 'Address Account',
    dataIndex: 'AddressAccount',
    key: 'AddressAccount',
    // render: (text) => text,
  },
  {
    title: 'Account Name',
    dataIndex: 'Name',
    key: 'Name',
  },
  {
    title: 'Occupation',
    dataIndex: 'Occupation',
    key: 'Occupation',
  },
  {
    title: 'Location',
    dataIndex: 'Location',
    key: 'Location',
  },
];

const columnsInventory = [
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
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
  },
  
];

const dataInventory = [
  {
    key: '1',
    idProduct: '0x123ABCdkgh',
    idBefore: '0x789DEF',
    Name: 'Rice',
    ChangePercent: '+10%',
    Type: 'Agriculture',
    Description: 'High-quality rice from farm X',
    tags: ['agriculture', 'high-quality'],
  },
  {
    key: '2',
    idProduct: '0x456GHI',
    idBefore: '0x789DEF',
    Name: 'Wheat',
    ChangePercent: '-5%',
    Type: 'Agriculture',
    Description: 'Organic wheat from farm Y',
    tags: ['agriculture', 'organic'],
  },
  {
    key: '3',
    idProduct: '0x789JKL',
    idBefore: '0xXYZ123',
    Name: 'Corn',
    ChangePercent: '+15%',
    Type: 'Agriculture',
    Description: 'Fresh corn from farm Z',
    tags: ['agriculture', 'fresh'],
  },
];

const dataAccount = [
  {
    key: '1',
    AddressAccount: '0x1A742CVAW5JUU397',
    Name: 'John Doe',
    Occupation: 'Engineer',
    Location: 'New York',
  },
  {
    key: '2',
    AddressAccount: '0x3B985MZXY2ABP324',
    Name: 'Alice Johnson',
    Occupation: 'Doctor',
    Location: 'Los Angeles',
  },
  {
    key: '3',
    AddressAccount: '0x6G715PVKQ9YWU820',
    Name: 'Bob Smith',
    Occupation: 'Teacher',
    Location: 'Chicago',
  },
];

const Account = () => {
  return (
    <div className='h-screen bg-neutral-100'>
      <Navbar/>
    <div className="bg-neutral-100 w-full h-fit mx-auto flex justify-center items-center">
      {/* <Navbar /> */}
      <div className="text-center ml-[148px] mr-[148px]">
          <h1 className="text-4xl pt-[60px] mx-auto text-neutral-700">Find an Account Product</h1>
          <p className="max-w-[600px] min-h-[100px] text-base pt-[16px] pb-[16px]  mx-auto text-neutral-600">Efficiently manage your inventory using our blockchain-powered supply chain solution. Monitor your products journey from now!</p>
          <h2 className="mt-[60px] text-left text-3xl text-neutral-700">Search the Account Product</h2>
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
          <div className="pt-[24px] table-container w-full">
            <Table
              columns={columnsInventory}
              dataSource={dataInventory}
              scroll={{ x: true }}
              style={{ minWidth: '1144px' }} // Atur lebar minimal yang diinginkan
            />
            </div>
            <div className="pt-[60px] flex justify-between items-center w-full">
              <h2 className="text-3xl text-neutral-700">Agrichain Account</h2>
              </div>
              <div className="pt-[24px] pb-[60px] overflow-x-auto">
                <Table
                  columns={columnsAccount}
                  dataSource={dataAccount}
                  scroll={{  x: 'max-content' }}
                  style={{ minWidth: '1144px' }} // Atur lebar minimal yang diinginkan
                />
                </div>
      </div>
    </div>
    </div>
  );
};

export default Account;
