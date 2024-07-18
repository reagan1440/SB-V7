import Link from 'next/link';
import Layout from '../components/Layout';
import Image from 'next/image';
import heroImage from '../components/images/hero.jpg';
import styles from '../components/Index.module.css';

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <div className={styles.container}>
      <Image
        src={heroImage}
        alt="Hero Image"
        layout="fill"
        className={styles.heroImage}
        priority
      />
      <div className={styles.content}>
        <h1>Hello Next.js 👋</h1>
        <p>
          <Link href="/about">About</Link>
        </p>
      </div>
      {/* Add more content here as needed */}
    </div>
  </Layout>
);

export default IndexPage;
