import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../components/images/sb-logo.svg';
import styles from '../components/Header.module.css';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      console.log(`Scroll Top: ${currentScrollTop}, Last Scroll Top: ${lastScrollTop}`);
      if (currentScrollTop > lastScrollTop && currentScrollTop > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      lastScrollTop = currentScrollTop;
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.logoContainer}>
        <Link href="/">
          <Image src={logo} alt="Logo" width={300} height={120} />
        </Link>
      </div>
      <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
        <Link href="/mobile-apps">Mobile Apps</Link>
        <Link href="/websites">Websites</Link>
        <Link href="/maintenance">Maintenance</Link>
        <Link href="/integrations">Integrations</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <div className={styles.hamburger} onClick={toggleMenu}>
        {isMenuOpen ? (
          <AiOutlineClose className={styles.hamburgerIcon} />
        ) : (
          <AiOutlineMenu className={styles.hamburgerIcon} />
        )}
      </div>
    </header>
  );
};

export default Header;
