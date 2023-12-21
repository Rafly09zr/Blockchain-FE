// components/ModalAddInventory.js
'use client'
import { useState, useEffect } from 'react'
import { Modal, Button, Input, Select } from 'antd'
import { useGetProduct } from '@/hooks/products'

const ModalAddInventory = ({ visible, onCancel, onAddProduct }) => {
  const [idProduct, setIdProduct] = useState('')
  const [weight, setWeight] = useState('')
  const { data } = useGetProduct()
  console.log(data)

  const handleIdProductChange = (e) => {
    console.log(e)
    setIdProduct(e.target.value)
  }

  const handleWeight = (e) => {
    setWeight(e.target.value)
  }

  const handleAddProduct = () => {
    const productData = {
      idProduct,
      weight,
    }
  }

  return (
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
        >
          Add
        </Button>,
      ]}
    >
      <label htmlFor="idProduct">Id Product:</label>
      <Select
        defaultValue="lucy"
        style={{ width: '100%' }}
        onChange={handleIdProductChange}
        options={[
          { value: 'jack', label: 'Jack' },
          { value: 'lucy', label: 'Lucy' },
          { value: 'Yiminghe', label: 'yiminghe' },
          { value: 'disabled', label: 'Disabled', disabled: true },
        ]}
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
  )
}

export default ModalAddInventory
