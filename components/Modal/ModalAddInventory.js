// components/ModalAddInventory.js
'use client'
import { useState, useEffect } from 'react'
import { Modal, Button, Input } from 'antd'

const ModalAddInventory = ({ visible, onCancel, onAddProduct }) => {
  const [idProduct, setIdProduct] = useState('')
  const [weight, setWeight] = useState(0)

  const handleIdProductChange = (e) => {
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
      <Input
        placeholder="Generate Address"
        value={idProduct}
        onChange={handleIdProductChange}
        style={{ marginBottom: '1rem' }}
      />
      <label htmlFor="weight">Weight:</label>
      <Input
        placeholder="e.g. Agrc-3"
        value={weight}
        onChange={handleWeight}
        style={{ marginBottom: '1rem' }}
      />
    </Modal>
  )
}

export default ModalAddInventory
