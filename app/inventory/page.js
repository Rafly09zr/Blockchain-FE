// pages/inventory.js
'use client';
import React, { useState, useEffect, useRef } from 'react';
import Button from '../../components/Button/Button';
import Image from 'next/image';
import { Table, Input, Tag } from 'antd';
import Navbar from '../../components/Navbar/navbar';
import ModalAddItem from '../../components/Modal/ModalAddItem';

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
];

const columnsDestination = [
  {
    title: 'Id Origin',
    dataIndex: 'idFrom',
    key: 'idFrom',
    // render: (text) => text,
  },
  {
    title: 'Id Destination',
    dataIndex: 'idTo',
    key: 'idTo',
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
    title: 'Weight',
    key: 'Weight',
    dataIndex: 'Weight',
  },
  {
    title: 'Buy Price',
    key: 'buyPrice',
    dataIndex: 'buyPrice',
  },
  {
    title: 'Timestamp',
    key: 'Timestamp',
    dataIndex: 'Timestamp',
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
  },
  {
    key: '2',
    idProduct: '0x456GHI',
    idBefore: '0x789DEF',
    Name: 'Wheat',
    ChangePercent: '-5%',
    Type: 'Agriculture',
    Description: 'Organic wheat from farm Y',
  },
  {
    key: '3',
    idProduct: '0x789JKL',
    idBefore: '0xXYZ123',
    Name: 'Corn',
    ChangePercent: '+15%',
    Type: 'Agriculture',
    Description: 'Fresh corn from farm Z',
  },
];

const dataDestination = [
  {
    key: '1',
    idFrom: '0x123ABC',
    idTo: '0x456DEF',
    Name: 'Rice',
    Type: 'Agriculture',
    Weight: '10kg',
    buyPrice: '$20',
    Timestamp: '2023-12-01 08:30:00',
  },
];

const currentData = [
  {
    idProduct: 'Agrc-1',
    idBefore: 'null',
    Name: 'Product 1',
    ChangePercent: '10%',
    Type: 'Type A',
    Description: 'Description of Product 1',
  },
  {
    idProduct: 'Agrc-2',
    idBefore: 'Agrc-1',
    Name: 'Product 2',
    ChangePercent: '15%',
    Type: 'Type B',
    Description: 'Description of Product 2',
  },
  // Add more sample data if needed
];

const Inventory = () => {
  const modalRef = useRef(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleAddItemClick = () => {
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  const handleAddProduct = (productData) => {
    console.log('Product Added:', productData);
    handleModalClose();
  };

  useEffect(() => {
    if (modalRef.current) {
      if (isModalVisible) {
        modalRef.current.style.display = 'block';
      } else {
        modalRef.current.style.display = 'none';
      }
    }
  }, [isModalVisible]);

  return (
    <div className='h-screen bg-neutral-100'>
      <Navbar/>
    <div className="bg-neutral-100 w-full h-fit mx-auto flex justify-center items-center">
      {/* <Navbar /> */}
      <div className="text-center ml-[148px] mr-[148px]">
        <h1 className="text-4xl pt-[60px] mx-auto text-neutral-700">Manage your Inventory</h1>
        <p className="max-w-[600px] min-h-[100px] text-base pt-[16px] pb-[16px] mx-auto text-neutral-600 mt-4">Efficiently manage your inventory using our blockchain-powered supply chain solution. Monitor your products journey from now!</p>
        <div className="mt-[60px] flex justify-between items-center w-full">
          <h2 className="text-3xl text-neutral-700">My Inventory</h2>
          <button 
            className='bg-light-green-200 text-base text-neutral-700 px-[24px] py-[8px] rounded-[200px] focus:outline-none transition duration-300 hover:bg-light-green-300'
            onClick={handleAddItemClick}>
            Add Item
            </button>
          </div>
          <div className="pt-[24px]">
          <div className="table-container w-full">
            <Table
              columns={columnsInventory}
              dataSource={dataInventory}
              scroll={{ x: true }}
              style={{ minWidth: '1144px' }} // Atur lebar minimal yang diinginkan
            />
            </div>
          </div>
          <h2 className="mt-[60px] text-left text-3xl text-neutral-700">Find Product Destination Path</h2>
          <div className="mt-[16px] flex justify-between items-center w-full">
          <p className="text-base text-left pr-[80px] text-neutral-600">
            Track your product’s final destinations by
            <br />
            entering its Id. Discover where your product destination!</p>
          <Input
            style={{ 
              width: '480px', 
              height: '40px', 
              borderRadius: '24px',
              paddingLeft: '20px',
              fontSize: '16px',
            }}
            placeholder="Product Id, e.g. 0x1AU42CVAW5JUU397"
          />
          <Button>Search</Button>
          </div>
          <div className="pt-[24px] pb-[60px]">
          <div className="table-container w-full">
            <Table
              columns={columnsDestination}
              dataSource={dataDestination}
              scroll={{ x: true }}
              style={{ minWidth: '1144px' }} // Atur lebar minimal yang diinginkan
            />
            </div>
          </div>
      </div>
    </div>
    <div ref={modalRef} style={{ display: 'none' }}>
        {isModalVisible && (
          <ModalAddItem
            onCancel={handleModalClose}
            onAddProduct={handleAddProduct}
            visible={isModalVisible}
          />
        )}
      </div>
    </div>
  );
};

export default Inventory;
