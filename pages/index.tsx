import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/Layout';
import styles from '../components/Index.module.css';
import HeroAnimatedSection from '../components/HeroAnimation';
import TabbedContent from '../components/TabbedContent';
import SupportBlock from '../components/SupportBlock';
import Footer from '../components/Footer';
import CareXMLogo from '../components/images/carexm.svg';
import ArthritisLogo from '../components/images/arthritis.svg';
import BuckheadLogo from '../components/images/buckhead-life.svg';
import GpbLogo from '../components/images/gpb.svg';

const IndexPage: React.FC = () => (
  <Layout title="SolutionBuilt">
    <div className={styles.heroContainer}>
      <video
        src="/videos/sb-website-video-2023-final.mp4"
        autoPlay
        loop
        muted
        playsInline
        className={styles.heroVideo}
      >
        Your browser does not support the video tag.
      </video>
    </div>
    <div className={styles.content}>
      <h2 className={styles.largeHeader}>
        Celebrating 20 years as Atlanta's
        <span className={styles.greenText}>
          leading website design & app development agency.
        </span>
      </h2>
      <p className={styles.contentParagraph}>
        SolutionBuilt is a full-service website and application software development agency. We provide a consultative approach to our clients' web and mobile development needs. We start with our Solution Design process to create custom project plans for the design, development, and maintenance of your web and mobile app projects.
      </p>
      <p className={styles.contentParagraph}>
        Located in Atlanta, GA, our team acts as an extension of your business by taking ownership of your design, development, and maintenance needs. When you are ready for the next level, that’s where we come in–providing you with experienced CTOs, CMOs, and Creative Directors to expertly handle your technology strategy. With our direct IT support and maintenance services, we help your online properties reach the highest quality for peak performance and business growth.
      </p>
      <p className={styles.contentParagraph}>
        With 20 years in business, you can trust SolutionBuilt's web and mobile solutions to make your company–at any size–flourish through our innovative web design and software development services.
      </p>
    </div>
    <HeroAnimatedSection />
    {/* New Container for SVGs */}
    <div className={styles.svgContainer}>
    <Image src={ArthritisLogo} alt="SVG Image 2" width={220} height={220} />
      <Image src={CareXMLogo} alt="SVG Image 1" width={220} height={220} />
      <Image src={BuckheadLogo} alt="SVG Image 3" width={220} height={220} />
      <Image src={GpbLogo} alt="SVG Image 4" width={220} height={220} />
    </div>
    <TabbedContent/>
    <SupportBlock />
    <div className={styles.bottomCta}>
<b className={styles.letsGetStarted}>Let’s Get Started</b>
<div className={styles.ifYoureLooking}>If you’re looking for website designers or mobile app developers in the Atlanta area, contact the SolutionBuilt team today.</div>
</div>
    <Footer />
  </Layout>
);

export default IndexPage;
