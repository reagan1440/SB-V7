import Layout from '../components/Layout';
import React from 'react';
import Image from 'next/image'; 
import AboutHero from '../components/images/marietta.png';
import styles from '../components/About.module.css';

const AboutPage: React.FC = () => (
  <Layout title="SolutionBuilt">
    <div className={styles.aboutHeroContainer}>
      <div className={styles.textBox}>
        <h2>About SolutionBuilt</h2>
      </div>
      <div className={styles.imageWrapper}>
        <Image
          src={AboutHero}
          alt="About Hero"
          width={1200}
          height={800}
          layout="responsive"
        />
      </div>
    </div>
    <h1>About</h1>
    <p>This is the about page</p>
  </Layout>
);

export default AboutPage;
