'use client'

import React from 'react'
import Button from '../components/Button/Button'
import Image from 'next/image'
import Navbar from '../components/Navbar/navbar' // Sesuaikan dengan lokasi Navbar.js
//import imageSrc from '../assets/image.jpg'; // Ganti dengan lokasi dan nama file gambar
import { useEffect } from 'react'

const Landing = () => {

  const redirectToInventory = () => {
    window.location.href = '/inventory'; // Ganti dengan path yang sesuai
  };

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' })
        const accounts = await window.ethereum.request({ method: 'eth_accounts' })
        if (accounts.length > 0) {
          setWalletAddress(accounts[0])
          setIsModalVisible(true) // Tampilkan modal setelah berhasil terhubung
        }
      } catch (error) {
        console.error(error)
      }
    } else {
      console.log('MetaMask not installed')
    }
  }

  useEffect(() => {
    // On component mount, check if MetaMask is installed and get the connected address
    if (window.ethereum) {
      window.ethereum
        .request({ method: 'eth_accounts' })
        .then((accounts) => {
          if (accounts.length > 0) {
            setWalletAddress(accounts[0])
          }
        })
        .catch((err) => console.error(err))
    }
  }, [])
  return (
    <div className="h-screen bg-neutral-100">
      <Navbar />
      <div className="bg-image mx-auto h-fit w-full items-center justify-center">
        <div className="ml-[148px] mr-[148px] text-center">
          <h1 className="mx-auto pt-[50px] text-6xl text-neutral-700">Agriculture Supply Chain</h1>
          <h1 className="mx-auto text-6xl text-neutral-700">Management</h1>
          <p className="mx-auto mt-4 min-h-[60px] max-w-[599px] pb-[16px] pt-[8px] text-base text-neutral-600">
            We utilize blockchain to enhance transparency in agricultural product distribution.
            Track each product’s journey from origin to destination securely and reliably with
            blockchain technology.
          </p>
          <Button onClick={redirectToInventory}>Get Started</Button>
          <div className="mx-auto mt-14 flex w-full justify-center">
            <Image src="/images/illus-landing2.png" width={1144} height={288} alt="404 text" />
          </div>
          {/* <img src={imageSrc} alt="Deskripsi Gambar" className="mt-8 max-w-full" /> */}
        </div>
      </div>
    </div>
  )
}

export default Landing
