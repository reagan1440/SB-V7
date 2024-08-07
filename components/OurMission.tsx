import React from 'react';
import type { NextPage } from 'next';
import { useInView } from 'react-intersection-observer';
import SpinningLogo from './SpinningLogo';
import CountUp from 'react-countup';
import styles from '../components/OurMission.module.css';

const OurMission: NextPage = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className={styles.ourMission}>
      <div className={styles.leftSection}>
        <div className={styles.leftSectionBg}></div>
        <div className={styles.spinningLogoWrapper}>
          <SpinningLogo />
        </div>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.rightSectionBg}></div>
        <div className={styles.toProvideTransparencyContainer}>
          <p className={styles.toProvideTransparency}>
            To provide transparency and customer satisfaction by conducting
            business in an ethical manner and following through with our promises.
          </p>
          <p className={styles.toProvideTransparency}>
            To create web and mobile solutions that will serve our clients’
            business needs now and in the future.
          </p>
          <p className={styles.toCreateMarketing}>
            To create marketing solutions that attract, engage, convert, and
            retain our clients’ customers.
          </p>
        </div>
        <div className={styles.stats} ref={ref}>
          <div className={styles.statItem}>
            {inView && <CountUp className={styles.statNumber} end={425} duration={3} suffix="+" />}
            <p className={styles.statLabel}>Satisfied Clients</p>
          </div>
          <div className={styles.statItem}>
            {inView && <CountUp className={styles.statNumber} end={20} duration={3} />}
            <p className={styles.statLabel}>Years in Business</p>
          </div>
          <div className={styles.statItem}>
            {inView && <CountUp className={styles.statNumber} end={525} duration={3} suffix="+" />}
            <p className={styles.statLabel}>Completed Projects</p>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>5 Star</div>
            <p className={styles.statLabel}>Review Average</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
