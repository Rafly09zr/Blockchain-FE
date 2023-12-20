// pages/Landing.js
import React from 'react';
import Button from '../../components/Button/Button';
import Image from 'next/image';
// import Navbar from '../../components/Navbar/navbar'; // Sesuaikan dengan lokasi Navbar.js
//import imageSrc from '../assets/image.jpg'; // Ganti dengan lokasi dan nama file gambar

const Landing = () => {
  return (
    <div className="bg-image w-full h-screen mx-auto flex justify-center items-center">
      {/* <Navbar /> */}
      <div className="text-center ml-[148px] mr-[148px]">
        <h1 className="text-6xl pt-[60px] mx-auto text-neutral-700">Agriculture Supply Chain</h1>
        <h1 className="text-6xl mx-auto text-neutral-700">Management</h1>
        <p className="max-w-[599px] min-h-[100px] text-base pt-[16px] pb-[16px] mx-auto text-neutral-600 mt-4">We utilize blockchain to enhance transparency in agricultural product distribution. Track each product’s journey from origin to destination securely and reliably with blockchain technology.</p>
        <Button>Get Started</Button>
        <div className="pt-[60px]">
          <Image src="/images/illus-landing2.png" width={1144} height={288} alt="404 text" />
        </div>
        {/* <img src={imageSrc} alt="Deskripsi Gambar" className="mt-8 max-w-full" /> */}
      </div>
    </div>
  );
};

export default Landing;
