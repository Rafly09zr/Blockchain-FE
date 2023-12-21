// components/ModalAddItem.js
'use client'
import { useState, useEffect } from 'react'
import { Modal, Button, Input } from 'antd'

const ModalAddItem = ({ visible, onCancel, onAddProduct }) => {
  const [idProduct, setIdProduct] = useState('')
  const [idBefore, setIdBefore] = useState('null')
  const [name, setName] = useState('')
  const [changePercent, setChangePercent] = useState('')
  const [type, setType] = useState('')
  const [description, setDescription] = useState('')

  const handleIdProductChange = (e) => {
    setIdProduct(e.target.value)
  }

  const handleIdBeforeChange = (e) => {
    setIdBefore(e.target.value)
  }

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleChangePercentChange = (e) => {
    setChangePercent(e.target.value)
  }

  const handleTypeChange = (e) => {
    setType(e.target.value)
  }

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value)
  }

  const handleAddProduct = () => {
    const productData = {
      idProduct,
      idBefore,
      Name: name,
      ChangePercent: changePercent,
      Type: type,
      Description: description,
    }

    // Check if any field is empty before adding the product
    if (idProduct && idBefore && name && changePercent && type && description) {
      onAddProduct(productData)
    } else {
      // Handle case where any field is empty
      console.log('All fields are required')
    }
  }

  useEffect(() => {
    if (visible) {
      // Reset input fields when modal becomes visible
      setIdProduct(generateId())
      setIdBefore('null')
      setName('')
      setChangePercent('')
      setType('')
      setDescription('')
    }
  }, [visible])

  const generateId = () => {
    // Logika untuk menghasilkan ID secara otomatis
    // Misalnya, menggunakan angka acak atau menambahkan nomor berdasarkan jumlah data yang ada
    return `Agrc-${Math.floor(Math.random() * 1000)}`
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
        disabled
        onChange={handleIdProductChange}
        style={{ marginBottom: '1rem' }}
      />
      <label htmlFor="idBefore">Id Before:</label>
      <Input
        placeholder="e.g. Agrc-3"
        value={idBefore}
        disabled
        onChange={handleIdBeforeChange}
        style={{ marginBottom: '1rem' }}
      />
      <label htmlFor="name">Product Name:</label>
      <Input
        placeholder="e.g. Asian Rice"
        value={name}
        onChange={handleNameChange}
        style={{ marginBottom: '1rem' }}
      />
      <label htmlFor="changePercent">Change Percent:</label>
      <Input
        placeholder="e.g. 15%"
        value={changePercent}
        onChange={handleChangePercentChange}
        style={{ marginBottom: '1rem' }}
      />
      <label htmlFor="type">Type:</label>
      <Input
        placeholder="e.g. Agriculture Food"
        value={type}
        onChange={handleTypeChange}
        style={{ marginBottom: '1rem' }}
      />
      <label htmlFor="description">Description:</label>
      <Input
        placeholder="A seed of the grass species Oryza sativa or, much less commonly, O. glaberrima."
        value={description}
        onChange={handleDescriptionChange}
        style={{ marginBottom: '1rem' }}
      />
    </Modal>
  )
}

export default ModalAddItem
