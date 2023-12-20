import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useClient } from 'next/react';
import Image from 'next/image';

const Navbar = () => {
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState('landing');
  const { isClient } = useClient();

  useEffect(() => {
    // Gunakan useEffect hanya jika komponen berjalan di sisi klien
    if (isClient) {
      // Mengatur menu aktif berdasarkan path saat ini
      const path = router.pathname;
      if (path === '/product') {
        setActiveMenu('product');
      } else if (path === '/shipment') {
        setActiveMenu('shipment');
      } else if (path === '/track-record') {
        setActiveMenu('track-record');
      } else if (path === '/process') {
        setActiveMenu('process');
      } else if (path === '/account') {
        setActiveMenu('account');
      } else {
        setActiveMenu('landing');
      }
    }
  }, [router.pathname, isClient]);

  const handleConnectWallet = () => {
    // Fungsi untuk menangani login wallet
    // Tambahkan logika Anda di sini untuk membuka MetaMask atau login wallet
    console.log('Connect wallet clicked');
  };

  const menuItems = [
    { label: 'Product', path: '/product' },
    { label: 'Shipment', path: '/shipment' },
    { label: 'Track', path: '/track' },
    { label: 'Process', path: '/process' },
    { label: 'Account', path: '/account' },
  ];

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-200 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link href="/">
          <a>
            <Image src="/images/Logo-Agrichain.png" alt="Logo" className="h-8" />
          </a>
        </Link>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          {menuItems.map((item, index) => (
            <Link key={index} href={item.path}>
              <a
                className={`block mt-4 lg:inline-block lg:mt-0 mr-4 ${
                  activeMenu === item.label.toLowerCase()
                    ? 'text-neutral-700'
                    : 'text-neutral-500'
                }`}
              >
                {item.label}
              </a>
            </Link>
          ))}
        </div>
        <button
          className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white bg-blue-500 hover:bg-blue-600 lg:mt-0"
          onClick={handleConnectWallet}
        >
          Connect Wallet
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
