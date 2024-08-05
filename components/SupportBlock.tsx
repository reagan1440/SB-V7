import type { NextPage } from 'next';
import { useCallback } from 'react';
import Image from 'next/image';
import styles from '../components/Index.module.css';


import SiteMaintenance from '../components/images/site_maintenance.svg';
import SiteHosting from '../components/images/site_hosting.svg';
import DeviceManagement from '../components/images/device_management.svg';
import Analytics from '../components/images/analytics.svg';
import Integrations from '../components/images/integrations.svg';
import Diagnostics from '../components/images/diagnostics.svg';
import SupportApp from '../components/images/shape.svg';

const Support: NextPage = () => {
  const onFrameContainerClick = useCallback(() => {

  }, []);

  return (
    <div className={styles.support}>
      <b className={styles.support1}>Support</b>
      <div className={styles.weOfferOngoing}>
        We offer ongoing web maintenance services for websites, mobile apps, web portals, and web integrations.
      </div>
      <div className={styles.weProvideMaintenance}>
        We provide maintenance services and plans, including proactive QA testing and updates for new OS and mobile devices to help your website and mobile app continue to improve and grow. Do you need web hosting? We provide cloud-based hosting plans for our customers to provide one resource for all of your web and mobile hosting needs.
      </div>
      <div className={styles.icons}>
        <div className={styles.siteMaintenanceParent} onClick={onFrameContainerClick}>
          <Image
            className={styles.siteMaintenanceIcon}
            alt="Site Maintenance"
            src={SiteMaintenance}
            width={80}
            height={80}
          />
          <b className={styles.siteMaintenance}>Site Maintenance</b>
        </div>
        <div className={styles.siteMaintenanceParent} onClick={onFrameContainerClick}>
          <Image
            className={styles.siteHostingIcon}
            alt="Site Hosting"
            src={SiteHosting}
            width={80}
            height={80}
          />
          <b className={styles.siteMaintenance}>Site Hosting</b>
        </div>
        <div className={styles.siteMaintenanceParent} onClick={onFrameContainerClick}>
          <Image
            className={styles.appMaintenanceIcon}
            alt="App Maintenance"
            src={SupportApp}
            width={80}
            height={80}
          />
          <b className={styles.siteMaintenance}>App Maintenance</b>
        </div>
        <div className={styles.deviceManagementParent}>
          <Image
            className={styles.deviceManagementIcon}
            alt="Device Management"
            src={DeviceManagement}
            width={80}
            height={80}
          />
          <b className={styles.siteMaintenance}>Device Management</b>
        </div>
        <div className={styles.deviceManagementParent}>
          <Image
            className={styles.analyticsIcon}
            alt="Analytics"
            src={Analytics}
            width={80}
            height={80}
          />
          <b className={styles.siteMaintenance}>Analytics</b>
        </div>
        <div className={styles.siteMaintenanceParent} onClick={onFrameContainerClick}>
          <Image
            className={styles.integrationsIcon}
            alt="Integrations"
            src={Integrations}
            width={80}
            height={80}
          />
          <b className={styles.siteMaintenance}>Integrations</b>
        </div>
        <div className={styles.deviceManagementParent}>
          <Image
            className={styles.diagnosticsIcon}
            alt="Diagnostics"
            src={Diagnostics}
            width={80}
            height={80}
          />
          <b className={styles.siteMaintenance}>Diagnostics</b>
        </div>
      </div>
    </div>
  );
};

export default Support;
