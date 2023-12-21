// pages/Landing.js
import React from 'react'
import Button from '../../components/Button/Button'
import { Table, Input } from 'antd'
import Navbar from '../../components/Navbar/navbar'

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
]

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
]

const Track = () => {
  return (
    <div className="h-screen bg-neutral-100">
      <Navbar />
      <div className="mx-auto flex h-fit w-full items-center justify-center bg-neutral-100">
        {/* <Navbar /> */}
        <div className="ml-[148px] mr-[148px] text-center">
          <h1 className="mx-auto pt-[60px] text-4xl text-neutral-700">Track your Product Origin</h1>
          <p className="mx-auto min-h-[100px] max-w-[600px] pb-[16px] pt-[16px]  text-base text-neutral-600">
            Efficiently manage your inventory using our blockchain-powered supply chain solution.
            Monitor your products journey from now!
          </p>
          <h2 className="mt-[60px] text-left text-3xl text-neutral-700">
            See Where your Product Came From...
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
          <div className="flex w-full items-center justify-between pt-[60px]">
            <h2 className="text-3xl text-neutral-700">Origin Result</h2>
          </div>
          <div className="overflow-x-auto pb-[60px] pt-[24px]">
            <Table
              columns={columnsOrigin}
              dataSource={dataOrigin}
              scroll={{ x: 'max-content' }}
              style={{ minWidth: '1144px' }} // Atur lebar minimal yang diinginkan
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Track
