import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../components/images/sb-logo.svg';
import styles from '../components/Header.module.css';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState<number>(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;

      // Hide header if scrolling down, show if scrolling up
      if (currentScrollTop > lastScrollTop && currentScrollTop > 100) {
        setIsHeaderVisible(false); // Scrolling down
      } else if (currentScrollTop < lastScrollTop) {
        setIsHeaderVisible(true); // Scrolling up
      }

      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <header className={`${styles.header} ${!isHeaderVisible ? styles.hidden : ''}`}>
      <div className={styles.logoContainer}>
        <Link href="/">
          <Image src={logo} alt="Logo" width={300} height={120} />
        </Link>
      </div>
      <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
        <Link href="/websites">Websites</Link>
        <Link href="/maintenance">Maintenance</Link>
        <Link href="/integrations">Integrations</Link>
        <Link href="/about">About</Link>
        <Link href="/contact" className={styles.contact}>Contact</Link>
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
