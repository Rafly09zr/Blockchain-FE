// pages/inventory.js
'use client'
import React, { useState, useEffect, useRef } from 'react'
import Button from '../../components/Button/Button'
import Image from 'next/image'
import { Table, Input, Tag } from 'antd'
import Navbar from '../../components/Navbar/navbar'
import ModalAddInventory from '../../components/Modal/ModalAddInventory'
import { useGetInventory } from '@/hooks/inventory'

const columnsInventory = [
  {
    title: 'Id',
    dataIndex: 'productID',
    key: 'productID',
    // render: (text) => text,
  },
  {
    title: 'Product Name',
    dataIndex: 'name',
    key: 'Name',
  },
  {
    title: 'Weight',
    dataIndex: 'totalWeight',
    key: 'weight',
  },
  {
    title: 'Type',
    dataIndex: 'Type',
    key: 'Type',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
]

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
]

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
]

const Inventory = () => {
  const modalRef = useRef(null)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const { data: dataInventory, refetch } = useGetInventory()

  const handleAddItemClick = () => {
    setIsModalVisible(true)
  }

  const handleModalClose = () => {
    setIsModalVisible(false)
  }

  const handleAddProduct = (productData) => {
    console.log('Product Added:', productData)
    handleModalClose()
  }

  useEffect(() => {
    if (modalRef.current) {
      if (isModalVisible) {
        modalRef.current.style.display = 'block'
      } else {
        modalRef.current.style.display = 'none'
      }
    }
  }, [isModalVisible])

  return (
    <div className="h-screen bg-neutral-100">
      <Navbar />
      <div className="mx-auto flex h-fit w-full items-center justify-center bg-neutral-100">
        {/* <Navbar /> */}
        <div className="ml-[148px] mr-[148px] text-center">
          <h1 className="mx-auto pt-[60px] text-4xl text-neutral-700">Manage your Inventory</h1>
          <p className="mx-auto mt-4 min-h-[100px] max-w-[600px] pb-[16px] pt-[16px] text-base text-neutral-600">
            Efficiently manage your inventory using our blockchain-powered supply chain solution.
            Monitor your products journey from now!
          </p>
          <div className="mt-[60px] flex w-full items-center justify-between">
            <button type="button" onClick={() => refetch} className="text-3xl text-neutral-700">
              My Inventory
            </button>
            <button
              className="rounded-[200px] bg-light-green-200 px-[24px] py-[8px] text-base text-neutral-700 transition duration-300 hover:bg-light-green-300 focus:outline-none"
              onClick={handleAddItemClick}
            >
              Add Inventory
            </button>
          </div>
          <div className="pt-[24px]">
            <div className="table-container w-full">
              <Table
                columns={columnsInventory}
                dataSource={dataInventory}
                expandable={{
                  expandedRowRender: (record) => (
                    <p style={{ margin: 0 }}>{record?.productRecords}</p>
                  ),
                  rowExpandable: (record) => record?.productRecords?.length === 0,
                }}
                scroll={{ x: true }}
                style={{ minWidth: '1144px' }} // Atur lebar minimal yang diinginkan
              />
            </div>
          </div>
          <h2 className="mt-[60px] text-left text-3xl text-neutral-700">
            Find Product Destination Path
          </h2>
          <div className="mt-[16px] flex w-full items-center justify-between">
            <p className="pr-[80px] text-left text-base text-neutral-600">
              Track your product’s final destinations by
              <br />
              entering its Id. Discover where your product destination!
            </p>
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
          <div className="pb-[60px] pt-[24px]">
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
          <ModalAddInventory
            onCancel={handleModalClose}
            onAddProduct={handleAddProduct}
            visible={isModalVisible}
          />
        )}
      </div>
    </div>
  )
}

export default Inventory
