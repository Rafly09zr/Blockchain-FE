import Image from 'next/image';
import Link from 'next/link';
// import { Links } from '../../components/Links'; // Pastikan lokasi file Links.js sudah sesuai

const Navbar = () => {
  return (
    <nav className="flex max-h-[88px] items-center justify-between bg-neutral-100 py-[24px] ml-[148px] mr-[148px]">
      <div className="flex items-center flex-shrink-0  pr-[40px]">
        <Link href="/landing"> {/* Ganti dengan path yang sesuai */}
          <Image src="/images/Logo-Agrichain.png" width={172} height={40} alt="Logo" className="h-8 cursor-pointer" />
        </Link>
      </div>
      <div className="flex-grow text-base items-center justify-between pr-[40px]">
        <ul className="flex space-x-[40px] items-center justify-center w-full">
          <li className='text-neutral-500'>
            <Link href='/inventory'>Inventory</Link>
          </li>
          <li className='text-neutral-500'>
            <Link href='/shipment'>Shipment</Link>
          </li>
          <li className='text-neutral-500'>
            <Link href='/track'>Track</Link>
          </li>
          <li className='text-neutral-500'>
            <Link href='/process'>Process</Link>
          </li>
          <li className='text-neutral-500'>
            <Link href='/account'>Account</Link>
          </li>
        </ul>
      </div>
      <div>
        <button className="text-base px-[24px] py-[8px] h-[40px]  w-[172px] leading-none border rounded-[200px] text-neutral-100 bg-neutral-700 hover:bg-neutral-600">
          Connect Wallet
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
