'use client'

import React from 'react'
import Button from '../../components/Button/Button'
import { Table, Input } from 'antd'
import Navbar from '../../components/Navbar/navbar'
import { useGetContacts } from '@/hooks/account'

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
]

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
]

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
]

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
]

const Account = () => {
  const { data: contactData } = useGetContacts()
  return (
    <div className="h-screen bg-neutral-100">
      <Navbar />
      <div className="mx-auto flex h-fit w-full items-center justify-center bg-neutral-100">
        {/* <Navbar /> */}
        <div className="ml-[148px] mr-[148px] text-center">
          <h1 className="mx-auto pt-[60px] text-4xl text-neutral-700">Find an Account Product</h1>
          <p className="mx-auto min-h-[100px] max-w-[600px] pb-[16px] pt-[16px]  text-base text-neutral-600">
            Efficiently manage your inventory using our blockchain-powered supply chain solution.
            Monitor your products journey from now!
          </p>
          <h2 className="mt-[60px] text-left text-3xl text-neutral-700">
            Search the Account Product
          </h2>
          <p className="pr-[80px] pt-[16px] text-left text-base text-neutral-600">
            {' '}
            Track your product’s final destinations by entering its Id. Discover where your product
            destination!
          </p>
          <div className="mt-[16px] flex w-full items-center justify-between">
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
          <div className="table-container w-full pt-[24px]">
            <Table
              columns={columnsInventory}
              dataSource={dataInventory}
              scroll={{ x: true }}
              style={{ minWidth: '1144px' }} // Atur lebar minimal yang diinginkan
            />
          </div>
          <div className="flex w-full items-center justify-between pt-[60px]">
            <h2 className="text-3xl text-neutral-700">Agrichain Contact</h2>
          </div>
          <div className="overflow-x-auto pb-[60px] pt-[24px]">
            <Table
              columns={columnsAccount}
              dataSource={dataAccount}
              scroll={{ x: 'max-content' }}
              style={{ minWidth: '1144px' }} // Atur lebar minimal yang diinginkan
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account
