// pages/Landing.js
import React from 'react';
import Button from '../../components/Button/Button';
import Image from 'next/image';
import { Table, Tag } from 'antd';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    // render: (text) => text,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const Inventory = () => {
  return (
    <div className="bg-neutral-100 w-full h-screen mx-auto flex justify-center items-center">
      {/* <Navbar /> */}
      <div className="text-center ml-[148px] mr-[148px]">
        <h1 className="text-4xl pt-[60px] mx-auto text-neutral-700">Manage your Inventory</h1>
        <p className="max-w-[600px] min-h-[100px] text-base pt-[16px] pb-[16px] mx-auto text-neutral-600 mt-4">By utilizing blockchain you can save your product distribution with high transparency. Track each product’s journey to it’s destination.</p>
        <div className="mt-[60px] flex justify-between items-center w-full">
          <h2 className="text-3xl text-neutral-700">My Inventory</h2>
          <Button>Add Product</Button>
          </div>
          <div className="pt-[24px]">
          <Table columns={columns} dataSource={data} />
          </div>
      </div>
    </div>
  );
};

export default Inventory;
