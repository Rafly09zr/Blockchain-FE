'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import CustomModalDaftar from '../../components/Modal/ModalDaftar'
import { useGetPerson, usePerson } from '@/hooks/person'
// import { Links } from '../../components/Links'; // Pastikan lokasi file Links.js sudah sesuai

const Navbar = () => {
  const pathname = usePathname()
  const [walletAddress, setWalletAddress] = useState('')
  const [isModalVisible, setIsModalVisible] = useState(false)
  const { mutate: createPerson } = usePerson()
  const { data, refetch } = useGetPerson(walletAddress)

  useEffect(() => {
    refetch
    if (data) {
      setIsModalVisible(false)
      localStorage.setItem('account', JSON.stringify(data))
    }
    if (!data && walletAddress !== '') {
      setIsModalVisible(true)
    }
  }, [data, refetch, walletAddress])
  console.log(data)
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

  const handleLogin = (name, occupation, location, walletAddress) => {
    createPerson({ userAddress: walletAddress, name, occupation, location })
  }

  return (
    <nav className="ml-[148px] mr-[148px] flex max-h-[88px] items-center justify-between bg-neutral-100 py-[24px]">
      <div className="flex flex-shrink-0 items-center  pr-[40px]">
        <Link href="/">
          {' '}
          {/* Ganti dengan path yang sesuai */}
          <Image
            src="/images/Logo_agrichain_fix.png"
            width={172}
            height={40}
            alt="Logo"
            className="h-8 cursor-pointer"
          />
        </Link>
      </div>
      <div className="flex-grow items-center justify-between pr-[40px] text-base">
        <ul className="flex w-full items-center justify-center space-x-[40px]">
          <li className={pathname === '/inventory' ? 'text-neutral-700' : 'text-neutral-500'}>
            <Link href="/inventory" passHref>
              <div className="cursor-pointer hover:text-neutral-700">Inventory</div>
            </Link>
          </li>
          <li className={pathname === '/shipment' ? 'text-neutral-700' : 'text-neutral-500'}>
            <Link href="/shipment" passHref>
              <div className="cursor-pointer hover:text-neutral-700">Shipment</div>
            </Link>
          </li>
          <li className={pathname === '/track' ? 'text-neutral-700' : 'text-neutral-500'}>
            <Link href="/track" passHref>
              <div className="cursor-pointer hover:text-neutral-700">Track</div>
            </Link>
          </li>
          <li className={pathname === '/process' ? 'text-neutral-700' : 'text-neutral-500'}>
            <Link href="/process" passHref>
              <div className="cursor-pointer hover:text-neutral-700">Process</div>
            </Link>
          </li>
          <li className={pathname === '/account' ? 'text-neutral-700' : 'text-neutral-500'}>
            <Link href="/account" passHref>
              <div className="cursor-pointer hover:text-neutral-700">Account</div>
            </Link>
          </li>
        </ul>
      </div>
      <div>
        {walletAddress ? (
          <div className="h-[40px] w-[172px] truncate rounded-[200px] border bg-neutral-700 px-[24px] py-[8px] text-base text-neutral-100 hover:bg-neutral-600">
            {walletAddress}
          </div>
        ) : (
          <button
            onClick={connectWallet}
            className="h-[40px] w-[172px] rounded-[200px] border bg-neutral-700 px-[24px] py-[8px] text-base leading-none text-neutral-100 hover:bg-neutral-600"
          >
            Connect Wallet
          </button>
        )}
      </div>
      <CustomModalDaftar
        visible={isModalVisible}
        onLogin={handleLogin}
        walletAddress={walletAddress}
        onCancel={() => setIsModalVisible(false)}
      />
    </nav>
  )
}

export default Navbar
