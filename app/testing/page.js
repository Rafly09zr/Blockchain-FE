// pages/TestingPage.js
'use client'
import { useState } from 'react'
import CustomModal from '../../components/Modal/ModalDaftar'
import fetchMetaMaskAddress from '../MetaMaskService' // Sesuaikan dengan lokasi file Anda

const TestingPage = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [walletAddress, setWalletAddress] = useState('')

  const handleModalCancel = () => {
    setModalVisible(false)
  }

  const handleLogin = (name, occupation, address) => {
    // Handle login logic
    console.log('Name:', name)
    console.log('Occupation:', occupation)
    console.log('Address (from MetaMask):', address)
    setModalVisible(false)
  }

  const openModal = async () => {
    const address = await fetchMetaMaskAddress()
    if (address) {
      setWalletAddress(address)
      setModalVisible(true)
    } else {
      console.log('Unable to fetch MetaMask address')
    }
  }

  return (
    <div>
      <h1>Testing Page</h1>
      <button onClick={openModal}>Open Modal</button>
      <CustomModal
        visible={modalVisible}
        onCancel={handleModalCancel}
        onLogin={handleLogin}
        walletAddress={walletAddress} // Mengirim alamat ke modal sebagai prop
      />
    </div>
  )
}

export default TestingPage
