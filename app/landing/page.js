import React from 'react';
import Button from '../../components/Button/Button';
import Image from 'next/image';
import Navbar from '../../components/Navbar/navbar'; // Sesuaikan dengan lokasi Navbar.js
//import imageSrc from '../assets/image.jpg'; // Ganti dengan lokasi dan nama file gambar

const Landing = () => {
  return (
    <div className='h-screen bg-neutral-100'>
      <Navbar/>
    <div className="bg-image w-full mx-auto h-fit justify-center items-center">
      <div className="text-center ml-[148px] mr-[148px]">
        <h1 className="text-6xl pt-[50px] mx-auto text-neutral-700">Agriculture Supply Chain</h1>
        <h1 className="text-6xl mx-auto text-neutral-700">Management</h1>
        <p className="max-w-[599px] min-h-[60px] text-base pt-[8px] pb-[16px] mx-auto text-neutral-600 mt-4">We utilize blockchain to enhance transparency in agricultural product distribution. Track each product’s journey from origin to destination securely and reliably with blockchain technology.</p>
        <Button>Get Started</Button>
        <div className="pt-[12px] pb-[24px]">
          <Image src="/images/illus-landing2.png" width={1144} height={288} alt="404 text" />
        </div>
        {/* <img src={imageSrc} alt="Deskripsi Gambar" className="mt-8 max-w-full" /> */}
      </div>
    </div>
    </div>
  );
};

export default Landing;
