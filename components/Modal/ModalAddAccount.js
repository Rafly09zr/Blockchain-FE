'use client'

import { useState, useEffect, useMemo } from 'react'
import { Modal, Button, Input, Select, notification } from 'antd'
import { useContacts } from '@/hooks/account'

const ModalAddAccount = ({ visible, onCancel, onAddAccount }) => {
  const [userAddress, setUserAddress] = useState('')
  const [name, setName] = useState('')
  const [occupation, setOccupation] = useState('')
  const [location, setLocation] = useState('')
  const { mutate: AddAccount, isPending, isSuccess } = useContacts()
  const [api, contextHolder] = notification.useNotification()
  useEffect(() => {
    if (isSuccess) {
      api['success']({
        message: 'Data Account Berhasil Ditambahkan',
      })
    }
  }, [api, isSuccess])

  const handleUserAddress = (e) => {
    setUserAddress(e.target.value)
  }

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleOccupation = (e) => {
    setOccupation(e.target.value)
  }

  const handleLocation = (e) => {
    setLocation(e.target.value)
  }

  const handleAddAccount = () => {
    const account = JSON.parse(localStorage.getItem('account')).userAddress
    AddAccount({
      account,
      contact: {
        address: userAddress,
        name: name,
        occupation: occupation,
        location: location,
      },
    })
  }

  return (
    <>
      {contextHolder}
      <Modal
        title="Add Account"
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
            onClick={handleAddAccount}
            loading={isPending}
          >
            Add
          </Button>,
        ]}
      >
        <label htmlFor="Address">Address:</label>
        <Input
          placeholder="e.g. 0xAjsdsnsfkas"
          value={userAddress}
          onChange={handleUserAddress}
          style={{ marginBottom: '1rem' }}
        />
        <label htmlFor="Name">Name:</label>
        <Input
          placeholder="e.g. Name"
          value={name}
          onChange={handleName}
          style={{ marginBottom: '1rem' }}
        />
        <label htmlFor="Occupation">occupation:</label>
        <Input
          placeholder="e.g. Petani"
          value={occupation}
          onChange={handleOccupation}
          style={{ marginBottom: '1rem' }}
        />
        <label htmlFor="Location">location:</label>
        <Input
          placeholder="e.g. Yogyakarta"
          value={location}
          onChange={handleLocation}
          style={{ marginBottom: '1rem' }}
        />
      </Modal>
    </>
  )
}

export default ModalAddAccount
