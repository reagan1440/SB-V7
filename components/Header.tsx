import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../components/images/sb-logo.svg'; // Ensure the path is correct
import styles from '../components/Header.module.css'; // Import the CSS Module

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Image src={logo} alt="Logo" width={250} height={100} />
      </div>
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/mobile-apps">Mobile Apps</Link>
        <Link href="/websites">Websites</Link>
        <Link href="/maintenance">Maintenance</Link>
        <Link href="/integrations">Integrations</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
