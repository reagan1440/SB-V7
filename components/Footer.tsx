import { NextPage } from 'next';
import Image from 'next/image';
import styles from './Footer.module.css';

import YoutubeIcon from '../components/images/youtube 1.svg';
import FacebookIcon from '../components/images/facebook-f 1.svg';
import InstagramIcon from '../components/images/instagram 1.svg';
import TwitterIcon from '../components/images/twitter 1.svg';
import YelpIcon from '../components/images/yelp 1.svg';
import RssIcon from '../components/images/rss 1.svg';
import FooterLogo from '../components/images/sb-logo.svg';

const Footer: NextPage = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.topSection}>
                    <div className={styles.logo}>
                        <Image src={FooterLogo} alt="SolutionBuilt Logo" width={220} height={120} />
                    </div>
                    <nav className={styles.nav}>
                        <a href="/websites">Websites</a>
                        <a href="/maintenance">Maintenance</a>
                        <a href="/integrations">Integrations</a>
                        <a href="/about">About</a>
                        <a href="/contact">Contact</a>
                    </nav>
                </div>
                <hr className={styles.separator} />
                <div className={styles.bottomSection}>
                    <div className={styles.footerText}>
                        <p>©2023 SOLUTIONBUILT, INC. ALL RIGHTS RESERVED.</p>
                    </div>
                    <div className={styles.joinTeam}>
                        <p>JOIN THE SOLUTIONBUILT TEAM!</p>
                    </div>
                    <div className={styles.socialIcons}>
                        <a href="https://www.youtube.com/user/solutionbuilt" aria-label="YouTube">
                            <Image src={YoutubeIcon} alt="YouTube" width={25} height={22} />
                        </a>
                        <a href="https://www.facebook.com/SolutionBuilt/" aria-label="Facebook">
                            <Image src={FacebookIcon} alt="Facebook" width={13} height={22} />
                        </a>
                        <a href="https://www.instagram.com/solutionbuilt/" aria-label="Instagram">
                            <Image src={InstagramIcon} alt="Instagram" width={20} height={22} />
                        </a>
                        <a href="https://x.com/i/flow/login?redirect_after_login=%2FSolutionBuilt" aria-label="Twitter">
                            <Image src={TwitterIcon} alt="Twitter" width={22} height={22} />
                        </a>
                        <a href="https://www.yelp.com/biz/solutionbuilt-marietta-3" aria-label="Yelp">
                            <Image src={YelpIcon} alt="Yelp" width={16} height={22} />
                        </a>
                        <a href="https://www.solutionbuilt.com/blog/" aria-label="Blog">
                            <Image src={RssIcon} alt="RSS" width={19} height={22} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
