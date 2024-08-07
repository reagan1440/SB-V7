import React from 'react';
import styles from '../components/SbButton.module.css';

interface SbButtonProps {
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  children: React.ReactNode;
}

const SbButton: React.FC<SbButtonProps> = ({ href, onClick, children }) => {
  return (
    <a className={styles.sbCustomButton} href={href} onClick={onClick}>
      <span>{children}</span>
    </a>
  );
};

export default SbButton;
