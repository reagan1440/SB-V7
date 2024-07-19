import Link from 'next/link';
import Layout from '../components/Layout';
import styles from '../components/Index.module.css';

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
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
      <h2 className={styles.largeHeader}>Celebrating 20 years as Atlanta's leading website design & app development agency.</h2>
      <p className={styles.contentParagraph}>
        SolutionBuilt is a full-service website and application software development agency. We provide a consultative approach to our clients' web and mobile development needs. We start with our Solution Design process to create custom project plans for the design, development, and maintenance of your web and mobile app projects.<br className={styles.contentBreak} />
        Located in Atlanta, GA, our team acts as an extension of your business by taking ownership of your design, development, and maintenance needs. When you are ready for the next level, that’s where we come in–providing you with experienced CTOs, CMOs, and Creative Directors to expertly handle your technology strategy. With our direct IT support and maintenance services, we help your online properties reach the highest quality for peak performance and business growth.<br className={styles.contentBreak} />
        With 20 years in business, you can trust SolutionBuilt's web and mobile solutions to make your company–at any size–flourish through our innovative web design and software development services.
      </p>
    </div>
  </Layout>
);

export default IndexPage;
