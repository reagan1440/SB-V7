import React from 'react';
import styles from '../components/SbButton.module.css';

interface SbButtonProps {
  href: string;
  children: React.ReactNode;
}

const SbButton: React.FC<SbButtonProps> = ({ href, children }) => {
  return (
    <a className={styles.sbCustomButton} href={href}>
      <span>{children}</span>
    </a>
  );
};

export default SbButton;
