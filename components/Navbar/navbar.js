'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import CustomModalDaftar from '../../components/Modal/ModalDaftar';
// import { Links } from '../../components/Links'; // Pastikan lokasi file Links.js sudah sesuai

const Navbar = () => {
  const pathname = usePathname();
  const [walletAddress, setWalletAddress] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          setIsModalVisible(true); // Tampilkan modal setelah berhasil terhubung
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log('MetaMask not installed');
    }
  };

  useEffect(() => {
    // On component mount, check if MetaMask is installed and get the connected address
    if (window.ethereum) {
      window.ethereum.request({ method: 'eth_accounts' })
        .then(accounts => {
          if (accounts.length > 0) {
            setWalletAddress(accounts[0]);
          }
        })
        .catch(err => console.error(err));
    }
  }, []);

  const handleLogin = (name, occupation, location, walletAddress) => {
    // Fungsi untuk menangani proses login
  };

  return (
    <nav className="flex max-h-[88px] items-center justify-between bg-neutral-100 py-[24px] ml-[148px] mr-[148px]">
      <div className="flex items-center flex-shrink-0  pr-[40px]">
        <Link href="/landing"> {/* Ganti dengan path yang sesuai */}
          <Image src="/images/Logo-Agrichain.png" width={172} height={40} alt="Logo" className="h-8 cursor-pointer" />
        </Link>
      </div>
      <div className="flex-grow text-base items-center justify-between pr-[40px]">
        <ul className="flex space-x-[40px] items-center justify-center w-full">
          <li className={pathname === '/inventory' ? 'text-neutral-700' : 'text-neutral-500'}>
            <Link href='/inventory' passHref>
              <div className="hover:text-neutral-700 cursor-pointer">Inventory</div>
            </Link>
          </li>
          <li className={pathname === '/shipment' ? 'text-neutral-700' : 'text-neutral-500'}>
            <Link href='/shipment' passHref>
              <div className="hover:text-neutral-700 cursor-pointer">Shipment</div>
            </Link>
          </li>
          <li className={pathname === '/track' ? 'text-neutral-700' : 'text-neutral-500'}>
            <Link href='/track' passHref>
              <div className="hover:text-neutral-700 cursor-pointer">Track</div>
            </Link>
          </li>
          <li className={pathname === '/process' ? 'text-neutral-700' : 'text-neutral-500'}>
            <Link href='/process' passHref>
              <div className="hover:text-neutral-700 cursor-pointer">Process</div>
            </Link>
          </li>
          <li className={pathname === '/account' ? 'text-neutral-700' : 'text-neutral-500'}>
            <Link href='/account' passHref>
              <div className="hover:text-neutral-700 cursor-pointer">Account</div>
            </Link>
          </li>
        </ul>
      </div>
      <div>
        {walletAddress ? (
          <div className="text-base px-[24px] py-[8px] h-[40px] w-[172px] border rounded-[200px] text-neutral-100 bg-neutral-700 hover:bg-neutral-600 truncate">
            {walletAddress}
          </div>
        ) : (
          <button
            onClick={connectWallet}
            className="text-base px-[24px] py-[8px] h-[40px] w-[172px] leading-none border rounded-[200px] text-neutral-100 bg-neutral-700 hover:bg-neutral-600"
          >
            Connect Wallet
          </button>
        )}
      </div>
      <CustomModalDaftar
        visible={isModalVisible && !walletAddress}
        onLogin={handleLogin}
        walletAddress={walletAddress}
        onCancel={() => setIsModalVisible(false)}
      />
    </nav>
  );
};

export default Navbar;
