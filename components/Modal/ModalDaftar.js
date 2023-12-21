// components/Modal.js
'use client';
import { useState } from 'react';
import { Modal, Button, Input } from 'antd';

const CustomModalDaftar = ({ visible, onLogin, walletAddress }) => {
  const [name, setName] = useState('');
  const [occupation, setOccupation] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleOccupationChange = (e) => {
    setOccupation(e.target.value);
  };

  const handleLogin = () => {
    if (name.trim() !== '' && occupation.trim() !== '') {
      onLogin(name, occupation, walletAddress);
    } else {
      // Tampilkan pesan atau lakukan tindakan lain jika nama atau pekerjaan kosong
      console.log('Nama dan Pekerjaan harus diisi');
    }
  };

  return (
    <Modal
      title="Login"
      open={visible}
      closable={false} // Menonaktifkan tombol close
      footer={[
        <Button key="login" type="primary" onClick={handleLogin}>
          Login
        </Button>,
      ]}
    >
      <Input
        placeholder="Name"
        value={name}
        onChange={handleNameChange}
        style={{ marginBottom: '1rem' }}
      />
      <Input
        placeholder="Occupation"
        value={occupation}
        onChange={handleOccupationChange}
        style={{ marginBottom: '1rem' }}
      />
      <Input
        placeholder="Address (from MetaMask)"
        value={walletAddress}
        disabled
      />
    </Modal>
  );
};

export default CustomModalDaftar;
