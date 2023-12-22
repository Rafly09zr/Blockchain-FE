// pages/Landing.js
'use client'
import React, { useEffect, useMemo, useState } from 'react'
import Button from '../../components/Button/Button'
import { Table, Input, Select, notification } from 'antd'
import Navbar from '../../components/Navbar/navbar'
import { useGetInventory } from '@/hooks/inventory'
import { useGetContacts } from '@/hooks/account'
import { useSendProduct } from '@/hooks/sendProduct'
import { LuLoader2 } from 'react-icons/lu'
import { useGetShipmentRecords } from '@/hooks/shipmentRecords'

const columnsShipment = [
  {
    title: 'Id',
    dataIndex: 'shipmentID',
    key: 'shipmentID',
    // render: (text) => text,
  },
  {
    title: 'Id Product',
    dataIndex: 'productID',
    key: 'idProduct',
    // render: (text) => text,
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

function Shipment() {
  const [dataLeft, setDataLeft] = useState([])
  const [sendWeight, setSendWeight] = useState(0)
  const [contact, setContact] = useState()
  const [buyPrice, setBuyPrice] = useState()
  const { data: dataInventory } = useGetInventory()
  const { data: contactData } = useGetContacts()
  const { mutate: SendShipment, isPending, isSuccess } = useSendProduct()
  const { data: sendRecord, refetch } = useGetShipmentRecords()
  const [api, contextHolder] = notification.useNotification()

  console.log(sendRecord)
  useEffect(() => {
    if (isSuccess) {
      refetch
      api['success']({
        message: 'Product Berhasil Dikirimkan kepada ' + contact,
      })
    }
  }, [api, contact, isSuccess, refetch])
  const optionsInventory = useMemo(
    () =>
      dataInventory?.map((e) => ({
        value: e?.productID,
        label: e?.name,
      })),
    [dataInventory],
  )

  const optionsContact = useMemo(
    () =>
      contactData?.contact?.map((e) => ({
        value: e.address,
        label: e.name,
      })),
    [contactData?.contact],
  )
  const handleChange = (events) => {
    setDataLeft(dataInventory.filter((e) => e.productID === events)[0])
  }

  const handleSend = () => {
    const address1 = JSON.parse(localStorage.getItem('account')).userAddress
    SendShipment({
      userAddress1: address1,
      userAddress2: contact,
      weight: sendWeight,
      productId: dataLeft.productID,
      buyPrice: buyPrice,
      productRecords: dataLeft.productRecords,
    })
  }

  return (
    <>
      {contextHolder}
      <div className="h-screen bg-neutral-100">
        <Navbar />
        <div className="mx-auto flex h-fit w-full items-center justify-center bg-neutral-100">
          {/* <Navbar /> */}
          <div className="ml-[148px] mr-[148px] text-center">
            <h1 className="mx-auto pt-[60px] text-4xl text-neutral-700">Start Product Shipment</h1>
            <p className="mx-auto mt-4 min-h-[100px] max-w-[600px] pb-[16px] pt-[16px] text-base text-neutral-600">
              Wanted to send your product to someone? Using our blockchain-powered supply chain solution it will reord your shipment easily.
            </p>
            <h2 className="mt-[60px] text-left text-3xl text-neutral-700">Send your Product</h2>
            <p className="pr-[80px] pt-[16px] text-left text-base text-neutral-600">
              {' '}
              Firstly pick your product you wanted to send!
            </p>
            <div className="mt-[16px] flex w-full items-center justify-between">
              <Select
                style={{
                  height: '40px',
                  borderRadius: '24px',
                  paddingLeft: '20px',
                  fontSize: '16px',
                  justifyContent: 'left',
                  textJustify: 'left',
                }}
                onChange={handleChange}
                options={optionsInventory}
                className="w-full"
              />
            </div>
            <div className="flex justify-between pt-[24px]">
              <div className="w-full" style={{ maxWidth: 'calc(50% - 20px)' }}>
                <div className="pb-[16px]">
                  <p className="pb-[8px] text-left text-xl text-neutral-700">From</p>
                  <div className="rounded-xl bg-neutral-200">
                    <div className="p-[20px]">
                      <p className="pb-[8px] text-left text-sm text-neutral-700">{'Name'}</p>
                      <p className="pb-[8px] text-left font-bold text-neutral-700">
                        {dataLeft.name}
                      </p>
                      <p className="pb-[8px] text-left text-sm text-neutral-700">{'Product ID'}</p>
                      <p className="pb-[8px] text-left font-bold text-neutral-700">
                        {dataLeft.productID}
                      </p>
                      <p className="pb-[8px] text-left text-sm text-neutral-700">{'Weight'}</p>
                      <p className="pb-[8px] text-left font-bold text-neutral-700">
                        {dataLeft.totalWeight} Kg
                      </p>
                      <p className="pb-[8px] text-left text-sm text-neutral-700">{'Type'}</p>
                      <p className="pb-[8px] text-left font-bold text-neutral-700">
                        {dataLeft.Type}
                      </p>{' '}
                      <p className="pb-[8px] text-left text-sm text-neutral-700">{'Description'}</p>
                      <p className="pb-[8px] text-left font-bold text-neutral-700">
                        {dataLeft.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="w-full"
                style={{ maxWidth: 'calc(50% - 20px)', height: 'calc(100% - 24px)' }}
              >
                <div className="pb-[16px]">
                  <p className="pb-[8px] text-left text-xl text-neutral-700">To</p>
                  <div className="rounded-xl bg-neutral-200" style={{ height: '100%' }}>
                    <div className="p-[20px]">
                      <p className="pb-[8px] text-left text-sm text-neutral-700">Name</p>
                      <Select
                        style={{
                          height: '40px',
                          borderRadius: '24px',
                          fontSize: '16px',
                          justifyContent: 'left',
                          textJustify: 'left',
                        }}
                        onChange={(e) => setContact(e)}
                        options={optionsContact}
                        className="w-full"
                      />
                    </div>
                    <div className="p-[20px]">
                      <p className="pb-[8px] text-left text-sm text-neutral-700">Weight</p>
                      <Input
                        className="mt-[8px]"
                        placeholder="e.g. 350kg"
                        type="number"
                        onChange={(e) => setSendWeight(e.target.value)}
                        style={{
                          height: '40px',
                          fontSize: '16px',
                        }}
                      />
                    </div>
                    <div className="p-[20px]">
                      <p className="pb-[8px] text-left text-sm text-neutral-700">Price to Buy</p>
                      <Input
                        className="mt-[8px]"
                        placeholder="e.g. 1000"
                        type="number"
                        onChange={(e) => setBuyPrice(e.target.value)}
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
            <div className="flex w-full justify-end pt-[16px] text-right">
              <div className="flex flex-row items-center justify-between gap-1">
                {isPending && <LuLoader2 className="h-5 w-5 animate-spin text-black" />}
                <Button onClick={handleSend} disabled={dataLeft.totalWeight < sendWeight}>
                  Send
                </Button>
              </div>
            </div>
            <div className="flex w-full items-center justify-between pt-[60px]">
              <h2 className="text-3xl text-neutral-700">All Previous Distribution</h2>
            </div>
            <div className="overflow-x-auto pb-[60px] pt-[24px]">
              <Table
                columns={columnsShipment}
                dataSource={sendRecord}
                scroll={{ x: 'max-content' }}
                style={{ minWidth: '1144px' }} // Atur lebar minimal yang diinginkan
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Shipment
