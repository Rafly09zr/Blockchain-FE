// components/AddProductModal.js
'use client';
import { useState } from 'react';
import { Modal, Button, Input } from 'antd';

const AddProductModal = ({ visible, onCancel, onAddProduct }) => {
  const [idProduct, setIdProduct] = useState('');
  const [idBefore, setIdBefore] = useState('');
  const [name, setName] = useState('');
  const [changePercent, setChangePercent] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');

  const handleIdProductChange = (e) => {
    setIdProduct(e.target.value);
  };

  // Implement other onChange handlers for other inputs similarly

  const handleAddProduct = () => {
    const productData = {
      idProduct,
      idBefore,
      Name: name,
      ChangePercent: changePercent,
      Type: type,
      Description: description,
    };

    // Check if any field is empty before adding the product
    if (idProduct && idBefore && name && changePercent && type && description) {
      onAddProduct(productData);
    } else {
      // Handle case where any field is empty
      console.log('All fields are required');
    }
  };

  return (
    <Modal
      title="Add Product"
      visible={visible}
      closable={false} // Menonaktifkan tombol close
      footer={[
        <Button key="add" type="primary" onClick={handleAddProduct}>
          Add
        </Button>,
      ]}
    >
      {/* Input fields for adding product */}
      {/* Example: */}
      <Input
        placeholder="Id Product"
        value={idProduct}
        onChange={handleIdProductChange}
        style={{ marginBottom: '1rem' }}
      />
      {/* Add other input fields similarly */}
    </Modal>
  );
};

export default AddProductModal;
