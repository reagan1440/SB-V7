import type { NextPage } from 'next';
import { useCallback } from 'react';
import styles from '../components/Index.module.css';


const Support:NextPage = () => {
  	
  	const onFrameContainerClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	return (
    		<div className={styles.support}>
      			<b className={styles.support1}>Support</b>
      			<div className={styles.weOfferOngoing}>We offer ongoing web maintenance services for websites, mobile apps, web portals, and web integrations.</div>
      			<div className={styles.weProvideMaintenance}>We provide maintenance services and plans, including proactive QA testing and updates for new OS and mobile devices to help your website and mobile app continue to improve and grow. Do you need web hosting? We provide cloud-based hosting plans for our customers to provide one resource for all of your web and mobile hosting needs.</div>
        				<div className={styles.icons}>
          					<div className={styles.siteMaintenanceParent} onClick={onFrameContainerClick}>
            						<img className={styles.siteMaintenanceIcon} alt="" src="site_maintenance.svg" />
            						<b className={styles.siteMaintenance}>Site Maintenance</b>
          					</div>
          					<div className={styles.siteMaintenanceParent} onClick={onFrameContainerClick}>
            						<img className={styles.siteHostingIcon} alt="" src="site_hosting.svg" />
            						<b className={styles.siteMaintenance}>Site Hosting</b>
          					</div>
          					<div className={styles.siteMaintenanceParent} onClick={onFrameContainerClick}>
            						<img className={styles.appMaintenanceIcon} alt="" src="app_maintenance.svg" />
            						<b className={styles.siteMaintenance}>App Maintenance</b>
          					</div>
          					<div className={styles.deviceManagementParent}>
            						<img className={styles.deviceManagementIcon} alt="" src="device_management.svg" />
            						<b className={styles.siteMaintenance}>Device Management</b>
          					</div>
          					<div className={styles.deviceManagementParent}>
            						<img className={styles.analyticsIcon} alt="" src="analytics.svg" />
            						<b className={styles.siteMaintenance}>Analytics</b>
          					</div>
          					<div className={styles.siteMaintenanceParent} onClick={onFrameContainerClick}>
            						<img className={styles.integrationsIcon} alt="" src="integrations.svg" />
            						<b className={styles.siteMaintenance}>Integrations</b>
          					</div>
          					<div className={styles.deviceManagementParent}>
            						<img className={styles.diagnosticsIcon} alt="" src="diagnostics.svg" />
            						<b className={styles.siteMaintenance}>Diagnostics</b>
          					</div>
        				</div>
        				<div className={styles.linkButton}>
          					<img className={styles.ringsIcon} alt="" src="rings.png" />
          					<img className={styles.linkButtonChild} alt="" src="Polygon 1.svg" />
          					<div className={styles.linkButtonItem} />
          					<div className={styles.linkButtonInner} />
          					<b className={styles.learnMore}>Learn More</b>
        				</div>
        				</div>);
      			};
      			
      			export default Support;
      			