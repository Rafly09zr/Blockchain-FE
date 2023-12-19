// components/Navbar.js
import React from 'react';
import { Link } from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link href="/">Landing</Link></li>
        <li><Link href="/product">Product</Link></li>
        <li><Link href="/shipment">Shipment</Link></li>
        <li><Link href="/track">Track</Link></li>
        <li><Link href="/process">Process</Link></li>
        <li><Link href="/account">Account</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
