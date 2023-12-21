// components/Modal.js
'use client'
import { useState } from 'react'
import { Modal, Button, Input } from 'antd'

const CustomModalDaftar = ({ visible, onLogin, walletAddress }) => {
  const [name, setName] = useState('')
  const [occupation, setOccupation] = useState('')
  const [location, setLocation] = useState('')

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleOccupationChange = (e) => {
    setOccupation(e.target.value)
  }

  const handleLocationChange = (e) => {
    setLocation(e.target.value)
  }

  const handleLogin = () => {
    if (name.trim() !== '' && occupation.trim() !== '' && location.trim() !== '') {
      onLogin(name, occupation, location, walletAddress)
    } else {
      // Tampilkan pesan atau lakukan tindakan lain jika nama atau pekerjaan kosong
      console.log('Name, Occupation, and Location must br filled')
    }
  }

  return (
    <Modal
      title="Please Register your Name First"
      open={visible}
      closable={false} // Menonaktifkan tombol close
      footer={[
        <Button key="Register" type="primary" onClick={handleLogin}>
          Register
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
        placeholder="Location"
        value={location}
        onChange={handleLocationChange}
        style={{ marginBottom: '1rem' }}
      />
      <Input placeholder="Address (from MetaMask)" value={walletAddress} disabled />
    </Modal>
  )
}

export default CustomModalDaftar
