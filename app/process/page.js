'use client'
import React, { useEffect, useMemo, useState } from 'react'
import Button from '../../components/Button/Button'
import { Table, Input, Select, notification } from 'antd'
import Navbar from '../../components/Navbar/navbar'
import { useGetInventory } from '@/hooks/inventory'
import { useGetProductBefore, useGetProduct } from '@/hooks/products'
import { useChangeProduct, useGetChange } from '@/hooks/changeProduct'
import { LuLoader2 } from 'react-icons/lu'

const columnsProcess = [
  {
    title: 'Id Product',
    dataIndex: 'to',
    key: 'idProduct',
    // render: (text) => text,
  },
  {
    title: 'Id Before',
    dataIndex: 'from',
    key: 'idBefore',
  },
  {
    title: 'Product Name',
    dataIndex: 'name',
    key: 'Name',
  },
  {
    title: 'Change Percent',
    dataIndex: 'changedPercent',
    key: 'ChangePercent',
    render: (e) => <p>{e} %</p>,
  },
  {
    title: 'Type',
    dataIndex: 'Type',
    key: 'Type',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'Description',
  },
  {
    title: 'Weight',
    key: 'Weight',
    dataIndex: 'totalWeight',
    render: (e) => <p>{e} Kg</p>,
  },
  {
    title: 'Timestamp',
    key: 'Timestamp',
    dataIndex: 'Timestamp',
    render: (e) => <p>{e?.toISOString().split('T')[0]}</p>,
  },
]

const Process = () => {
  const [dataLeft, setDataLeft] = useState([])
  const [weightChange, setWeightChange] = useState(0)
  const [productChange, setProductChange] = useState(0)
  const { data: dataInventory } = useGetInventory()
  const { data: dataChange } = useGetChange()
  const { data: BeforeProduct, refetch } = useGetProductBefore(dataLeft?.productID)
  const { data: Product } = useGetProduct()
  const { mutate: ChangeProduct, isPending, isSuccess } = useChangeProduct()
  console.log(dataChange)
  const [api, contextHolder] = notification.useNotification()
  useEffect(() => {
    if (isSuccess) {
      api['success']({
        message: 'Data Inventory Berhasil Ditambahkan',
      })
    }
  }, [api, isSuccess])

  const tableData = useMemo(
    () =>
      dataChange?.map((e) => ({
        ...e,
        Timestamp: new Date(e.timestamp),
        ...Product?.filter((ev) => ev.productID === e.to)[0],
      })),
    [Product, dataChange],
  )

  const optionsBefore = useMemo(
    () =>
      BeforeProduct?.map((e) => ({
        value: e?.productID,
        label: e?.name,
      })),
    [BeforeProduct],
  )
  const optionsInventory = useMemo(
    () =>
      dataInventory?.map((e) => ({
        value: e?.productID,
        label: e?.name,
      })),
    [dataInventory],
  )
  const handleChange = (events) => {
    setDataLeft(dataInventory?.filter((e) => e.productID === events)[0])
    refetch
  }

  const handleChangeProduct = (events) => {
    setProductChange(events)
  }

  const handleProcess = () => {
    const address = JSON?.parse(localStorage?.getItem('account'))?.userAddress
    ChangeProduct({
      _userAddress: address,
      _productIdFrom: dataLeft?.productID,
      _productIdTo: productChange,
      _productWeight: weightChange,
      _productRecords: dataLeft?.productRecords,
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
            <h1 className="mx-auto pt-[60px] text-4xl text-neutral-700">
              Process or Changes your Product
            </h1>
            <p className="mx-auto mt-4 min-h-[100px] max-w-[600px] pb-[16px] pt-[16px] text-base text-neutral-600">
              Efficiently manage your inventory using our blockchain-powered supply chain solution.
              Monitor your products journey from now!
            </p>
            <h2 className="mt-[60px] text-left text-3xl text-neutral-700">
              Find and Change Product
            </h2>
            <p className="pr-[80px] pt-[16px] text-left text-base text-neutral-600">
              {' '}
              Track your product’s final destinations by entering its Id. Discover where your
              product destination!
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
            <div className="flex flex-row items-stretch justify-stretch pt-[24px]">
              <div className="w-full" style={{ maxWidth: 'calc(50% - 20px)' }}>
                <div className="pb-[16px]">
                  <p className="pb-[8px] text-left text-xl text-neutral-700">Current</p>
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
              <div className="w-full flex-1 flex-col items-stretch justify-stretch px-5">
                <div className="flex-1 flex-col items-stretch pb-[16px]">
                  <p className="pb-[8px] text-left text-xl text-neutral-700">Change into...</p>
                  <div className="flex-1 flex-col rounded-xl bg-neutral-200">
                    <div className="p-[20px]">
                      <p className="pb-[8px] text-left text-sm text-neutral-700">Product Name</p>
                      <Select
                        style={{
                          height: '40px',
                          borderRadius: '24px',
                          fontSize: '16px',
                          justifyContent: 'left',
                          textJustify: 'left',
                        }}
                        onChange={handleChangeProduct}
                        options={optionsBefore}
                        className="w-full"
                      />
                    </div>
                    <div className="p-[20px]">
                      <p className="pb-[8px] text-left text-sm text-neutral-700">Weight</p>
                      <Input
                        className="mt-[8px]"
                        placeholder="e.g. 350kg"
                        style={{
                          height: '40px',
                          fontSize: '16px',
                        }}
                        onChange={(e) => setWeightChange(parseInt(e.target.value))}
                      />
                    </div>
                    <div className="p-5">
                      <p className="pb-[8px] text-left text-sm text-neutral-700">
                        {'Will Change to '}
                      </p>
                      <p className="pb-[8px] text-left font-bold text-neutral-700">
                        {(BeforeProduct?.filter((e) => e.productID === productChange)[0]
                          ?.changedPercent *
                          (weightChange ?? 0)) /
                          100}{' '}
                        kg
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-row justify-end">
              <div className="flex w-fit flex-row items-center justify-end gap-1 self-end pt-[16px] text-right">
                {isPending && <LuLoader2 className="h-5 w-5 animate-spin text-black" />}
                <Button onClick={handleProcess} disabled={dataLeft?.totalWeight < weightChange}>
                  Change
                </Button>
              </div>
            </div>
            <div className="flex w-full items-center justify-between pt-[60px]">
              <h2 className="text-3xl text-neutral-700">Process History</h2>
            </div>
            <div className="overflow-x-auto pb-[60px] pt-[24px]">
              <Table
                columns={columnsProcess}
                dataSource={tableData}
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

export default Process
