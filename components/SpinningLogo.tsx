// SpinningLogo.tsx

import React from 'react';
import styles from '../components/OurMission.module.css';

// Import the images
import innerCircle from '../components/images/inner.svg';
import middleCircle from '../components/images/middle.svg';
import outerCircle from '../components/images/outer.svg';

const SpinningLogo: React.FC = () => {
  return (
    <div className={styles.spinningLogoContainer}>
      <div className={styles.outerCircle}>
        <img src={outerCircle.src} alt="Outer Circle" className={styles.outerImage} />
        <div className={styles.middleCircle}>
          <img src={middleCircle.src} alt="Middle Circle" className={styles.middleImage} />
          <div className={styles.innerCircle}>
            <img src={innerCircle.src} alt="Inner Circle" className={styles.innerImage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpinningLogo;
