// components/ModalAddInventory.js
'use client'
import { useState, useEffect, useMemo } from 'react'
import { Modal, Button, Input, Select, notification } from 'antd'
import { useGetProduct } from '@/hooks/products'
import { useInventory } from '@/hooks/inventory'

const ModalAddInventory = ({ visible, onCancel, onAddProduct }) => {
  const [idProduct, setIdProduct] = useState('')
  const [weight, setWeight] = useState('')
  const { data } = useGetProduct()
  const { mutate: AddInventory, isPending, isSuccess } = useInventory()
  const [api, contextHolder] = notification.useNotification()
  useEffect(() => {
    if (isSuccess) {
      api['success']({
        message: 'Data Inventory Berhasil Ditambahkan',
      })
    }
  }, [api, isSuccess])

  const handleIdProductChange = (e) => {
    setIdProduct(e)
  }

  const handleWeight = (e) => {
    setWeight(e.target.value)
  }

  const handleAddProduct = () => {
    const address = JSON.parse(localStorage.getItem('account')).userAddress
    AddInventory({ address: address, productId: idProduct, weight, shipmentId: 0 })
  }

  const product = useMemo(
    () =>
      data?.map((e) => ({
        value: e.productID,
        label: e.name,
      })),
    [data],
  )

  return (
    <>
      {contextHolder}
      <Modal
        title="Add Product"
        open={visible}
        onCancel={onCancel}
        closable={true}
        className="flex w-full flex-col"
        footer={[
          <Button
            key="add"
            type="primary"
            className="rounded-[200px] bg-light-green-200 px-[24px] py-[2px] text-base text-neutral-700 transition duration-300 hover:bg-light-green-300 hover:text-neutral-700 focus:outline-none"
            style={{ border: 'none' }}
            onClick={handleAddProduct}
            loading={isPending}
          >
            Add
          </Button>,
        ]}
      >
        <label htmlFor="idProduct">Id Product:</label>
        <Select
          style={{ width: '100%' }}
          onChange={handleIdProductChange}
          options={product}
          className="w-full"
        />
        <label htmlFor="weight">Weight:</label>
        <Input
          placeholder="e.g. 200"
          value={weight}
          onChange={handleWeight}
          style={{ marginBottom: '1rem' }}
        />
      </Modal>
    </>
  )
}

export default ModalAddInventory
