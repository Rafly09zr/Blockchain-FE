// pages/Landing.js
import React from 'react';
import Button from '../../components/Button/Button';
import { Table, Input } from 'antd';

const columnsShipment = [
  {
    title: 'Id Product',
    dataIndex: 'idProduct',
    key: 'idProduct',
    // render: (text) => text,
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
    title: 'Shipment id',
    dataIndex: 'idShipment',
    key: 'idShipment',
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

const dataShipment = [
  {
    key: '1',
    idProduct: '0x123ABCdkgh',
    idFrom: '0x789DEF',
    idBefore: '0x456GHI',
    idShipment: '0xXYZ123',
    Weight: '10kg',
    TimeStamp: '2023-12-01 08:30:00',
    buyPrice: '$20',
  },
  {
    key: '2',
    idProduct: '0x456GHI',
    idFrom: '0x789DEF',
    idBefore: '0xXYZ123',
    idShipment: '0xABC456',
    Weight: '15kg',
    TimeStamp: '2023-12-05 09:45:00',
    buyPrice: '$30',
  },
];

const dataLeft = [
  {
    label: 'Product Id',
    value: '0x1AU42CVAW5JUU397',
  },
  {
    label: 'Product Name',
    value: 'Rice',
  },
  {
    label: 'Weight',
    value: '10kg',
  },
];

const Shipment = () => {
  return (
    <div className="bg-neutral-100 w-full h-fit mx-auto flex justify-center items-center">
      {/* <Navbar /> */}
      <div className="text-center ml-[148px] mr-[148px]">
          <h1 className="text-4xl pt-[60px] mx-auto text-neutral-700">Start Product Shipment</h1>
          <p className="max-w-[600px] min-h-[100px] text-base pt-[16px] pb-[16px] mx-auto text-neutral-600 mt-4">Efficiently manage your inventory using our blockchain-powered supply chain solution. Monitor your products journey from now!</p>
          <h2 className="mt-[60px] text-left text-3xl text-neutral-700">Send your Product</h2>
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
                <p className="pb-[8px] text-xl text-left text-neutral-700">From</p>
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
                <p className="pb-[8px] text-xl text-left text-neutral-700">To</p>
                <div className='pb-[116px] rounded-xl bg-neutral-200' style={{ height: '100%' }}>
                  <div className="p-[20px]">
                    <p className="pb-[8px] text-sm text-left text-neutral-700">Name</p>
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
          <Button variant="secondary" style={{ padding: '8px', marginRight: '8px' }}>Cancel</Button>
          <Button>Search</Button>
          </div>
            <div className="pt-[60px] flex justify-between items-center w-full">
              <h2 className="text-3xl text-neutral-700">All Previous Distribution</h2>
              </div>
              <div className="pt-[24px] pb-[60px] overflow-x-auto">
                <Table
                  columns={columnsShipment}
                  dataSource={dataShipment}
                  scroll={{  x: 'max-content' }}
                  style={{ minWidth: '1144px' }} // Atur lebar minimal yang diinginkan
                />
                </div>
      </div>
    </div>
  );
};

export default Shipment;
