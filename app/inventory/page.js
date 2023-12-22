// pages/inventory.js
'use client'
import React, { useState, useEffect, useRef, useMemo } from 'react'
import Button from '../../components/Button/Button'
import Image from 'next/image'
import { Table, Input, Tag } from 'antd'
import Navbar from '../../components/Navbar/navbar'
import ModalAddInventory from '../../components/Modal/ModalAddInventory'
import { useGetInventory } from '@/hooks/inventory'
import { useGetFinalProduct } from '@/hooks/finalProduct'

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
    title: 'Id Shipment',
    dataIndex: 'shipmentID',
    key: 'idProduct',
    // render: (text) => text,
  },
  {
    title: 'Product Name',
    dataIndex: 'name',
    key: 'Name',
  },
  {
    title: 'Type',
    dataIndex: 'Type',
    key: 'Type',
  },
  {
    title: 'From',
    dataIndex: 'fromAddress',
    key: 'idFrom',
  },
  {
    title: 'To',
    dataIndex: 'toAddress',
    key: 'idTo',
  },
  {
    title: 'Weight',
    dataIndex: 'weight',
    key: 'Weight',
    render: (e) => <p>{e} Kg</p>,
  },
  {
    title: 'Timestamp',
    dataIndex: 'timestamp',
    key: 'TimeStamp',
    render: (e) => {
      const date = new Date(e)
      return <p>{date?.toISOString()}</p>
    },
  },
  {
    title: 'Buy Price',
    dataIndex: 'buyPrice',
    key: 'buyPrice',
  },
]

const expandedRowRender = (record) => {
  const coloum = [
    {
      title: 'ID',
      key: 'shipmentID',
      dataIndex: 'shipmentID',
    },
    {
      title: 'From',
      key: 'from',
      dataIndex: 'fromAddress',
    },
    {
      title: 'ID Product',
      key: 'IdProduct',
      dataIndex: 'productID',
    },
    {
      title: 'Weight',
      dataIndex: 'weight',
      key: 'Weight',
      render: (e) => <p>{e} Kg</p>,
    },
    {
      title: 'Buy Price',
      key: 'Buy',
      dataIndex: 'buyPrice',
    },
    {
      title: 'Timestamp',
      dataIndex: 'timestamp',
      key: 'TimeStamp',
      render: (e) => {
        const date = new Date(e ?? '')
        return <p>{date?.toISOString()}</p>
      },
    },
  ]

  return <Table columns={coloum} dataSource={record?.productRecords} />
}

const Inventory = () => {
  const modalRef = useRef(null)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const { data: dataInventory, refetch } = useGetInventory()
  const { data: dataFinal } = useGetFinalProduct()
  const memoDataInventory = useMemo(
    () =>
      dataInventory?.map((e) => ({
        ...e,
        key: e.productID,
      })),
    [dataInventory],
  )
  console.log(memoDataInventory)

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
                  expandedRowRender,
                  rowExpandable: (record) => record?.productRecords[0]?.shipmentID,
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
                dataSource={dataFinal}
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
