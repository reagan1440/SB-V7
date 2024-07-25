import React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import Layout from '../components/Layout'; 
import AboutHero from '../components/images/phone-devices 1.svg';
import styles from '../components/Maintance.module.css';
import WebMaint from '../components/images/web-maintenance-icon.svg';
import WebHosting from '../components/images/web-hosting-icon.svg';
import AppMaint from '../components/images/app_maintenance.svg';

const Maintenance: NextPage = () => (
  <Layout title="SolutionBuilt">
    <div className={styles.headerSection}>
      <div className={styles.textContent}>
        <h1>Maintenance Services</h1>
        <p>Regular website maintenance is crucial to ensure your website is running at full capacity. SolutionBuilt offers ongoing web maintenance services for websites, mobile apps, web portals, and web integrations. Using our Google analytics results, we develop strategies that enhance your site security and optimize your overall page experience.</p>
      </div>
      <div className={styles.imageWrapper}>
        <Image
          src={AboutHero}
          alt="Maintenance Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
    <div className={styles.content}>
      <div className={styles.ourMaintenancePlansContainer}>
        <span>{`Our maintenance plans cover `}</span>
        <span className={styles.securityUpdates}>security updates</span>
        <span>{`, `}</span>
        <span className={styles.technologyChanges}>technology changes</span>
        <span>{`, `}</span>
        <span className={styles.releases}>releases</span>
        <span>{`, and `}</span>
        <span className={styles.standards}>standards</span>
        <span>.</span>
      </div>
      <div className={styles.hoverBoxes}>
        <div className={styles.hoverFloatBox}>
          <div className={styles.bg} />
          <div className={styles.withRegularUpdates}>
            With regular updates and security checks, your website is able to stay current and secure. Our ongoing maintenance ensures your web application’s continued success.
          </div>
          <div className={styles.websiteMaintenance}>Website Maintenance</div>
          <div className={styles.hoverFloatBoxChild} />
          <div className={styles.iconWrapper}>
            <Image className={styles.webMaintenanceIcon} src={WebMaint} alt="Website Maintenance Icon" objectFit="contain" />
          </div>
        </div>
        <div className={styles.hoverFloatBox1}>
          <div className={styles.bg1} />
          <div className={styles.withRegularUpdates}>
            SolutionBuilt is a premium web hosting company that provides secure and fast web hosting as an extension of our search engine and website maintenance services.
          </div>
          <div className={styles.websiteMaintenance}>Website Hosting</div>
          <div className={styles.hoverFloatBoxChild} />
          <div className={styles.iconWrapper}>
            <Image className={styles.webHostingIcon} src={WebHosting} alt="Web Hosting Icon"  objectFit="contain" />
          </div>
        </div>
        <div className={styles.hoverFloatBox2}>
          <div className={styles.bg1} />
          <div className={styles.withRegularUpdates}>
            Maintenance is a crucial component for any mobile application. Our expert application team can safeguard your apps’ source code, functionality, and usability.
          </div>
          <div className={styles.websiteMaintenance}>Mobile App Maintenance</div>
          <div className={styles.hoverFloatBoxChild} />
          <div className={styles.iconWrapper}>
            <Image className={styles.mobileMaintenanceIcon} src={AppMaint} alt="Mobile Maintenance Icon" objectFit="contain" />
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Maintenance;
