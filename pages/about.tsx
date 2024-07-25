import Layout from '../components/Layout';
import React from 'react';
import Image from 'next/image'; 
import AboutHero from '../components/images/marietta.png';
import styles from '../components/About.module.css';
import Footer from '../components/Footer';
import OurTeam from '../components/OurTeam';
import OurMission from '../components/OurMission';

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
    <div className={styles.aboutContent}>
<div className={styles.foundedIn2004}>Founded in 2004 to provide web design and digital marketing services for startups to enterprise customers, we are a team of seasoned developers and marketing professionals that companies tell their stories with effective content, visual design along with web, and mobile development services.</div>
<div className={styles.todaySolutionbuiltIsContainer}>
<span>{`Today, SolutionBuilt is a `}</span>
<span className={styles.fullService}>full-service</span>
<span>{` development and marketing agency providing web and mobile solutions for `}</span>
<span className={styles.businessesOfAll}>businesses of all sizes</span>
<span>.</span>
</div>
<div className={styles.ourDigitalMarketingContainer}>
<p className={styles.ourDigitalMarketing}>Our digital marketing services gain worldwide, national and regional exposure. Our development team has designed and developed hundreds of websites since 2004. Over the years we have become a trusted solution for outsourcing talent for manufacturers, medical organizations, energy providers, media companies, advertising agencies, retail and service companies.</p>
<p className={styles.ourDigitalMarketing}>&nbsp;</p>
<p className={styles.ourDigitalMarketing}>Our agency is a boutique agency that plays nicely with others and is nimble enough to scale quickly for web and mobile solutions. With a proven track record, our established agency and its real-world project experience can architect and manage your web and mobile solution needs.</p>
</div>
<div className={styles.buttons}>
<div className={styles.linkButton}>
<img className={styles.ringsIcon} alt="" src="rings.png" />
<img className={styles.linkButtonChild} alt="" src="Polygon 1.svg" />
<div className={styles.linkButtonItem} />
<div className={styles.linkButtonInner} />
<b className={styles.companyHistory}>Company History</b>
</div>
<div className={styles.linkButton1}>
<img className={styles.ringsIcon1} alt="" src="rings.png" />
<img className={styles.polygonIcon} alt="" src="Polygon 1.svg" />
<div className={styles.rectangleDiv} />
<div className={styles.linkButtonChild1} />
<b className={styles.blog}>Blog</b>
</div>
</div>
</div>
< OurTeam />
< OurMission />
<Footer />
  </Layout>
);

export default AboutPage;
