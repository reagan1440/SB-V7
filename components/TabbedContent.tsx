import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import defaultTabImage from '../components/images/default-tab.png';
import brandingImage from '../components/images/branding.png';
import digitalStrategyImage from '../components/images/digital-strategy.png';
import uxImage from '../components/images/ux.png';
import webDevImage from '../components/images/web-dev.png';
import appDevImage from '../components/images/app-dev.png';
import maintenanceImage from '../components/images/maintenance.png';
import integrationsImage from '../components/images/integrations.png';
import styles from '../components/TabedContent.module.css';

const TabbedContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  const tabs = [
    { id: 'branding', label: 'Branding', bgColor: 'linear-gradient(78.66deg, #53287e, #33658a)', image: brandingImage, containerClass: styles.brandingContainer },
    { id: 'digital-strategy', label: 'Digital Strategy', bgColor: 'linear-gradient(78.66deg, #6c79a3, #33658a)', image: digitalStrategyImage, containerClass: styles.digitalStrategyContainer },
    { id: 'user-experience-design', label: 'User Experience Design', bgColor: 'linear-gradient(78.66deg, #286339, #33658a)', image: uxImage, containerClass: styles.uxContainer },
    { id: 'web-development', label: 'Web Development', bgColor: 'linear-gradient(78.66deg, #53287e, #33658a)', image: webDevImage, containerClass: styles.webDevContainer },
    { id: 'app-development', label: 'App Development', bgColor: 'linear-gradient(78.66deg, #0098db, #33658a)', image: appDevImage, containerClass: styles.appDevContainer },
    { id: 'maintenance', label: 'Maintenance', bgColor: 'linear-gradient(78.66deg, #a32828, #33658a)', image: maintenanceImage, containerClass: styles.maintenanceContainer },
    { id: 'integrations', label: 'Integrations', bgColor: 'linear-gradient(78.66deg, #35003e, #d53871)', image: integrationsImage, containerClass: styles.integrationsContainer },
  ];


  const handleMouseEnter = (id: string) => {
    setActiveTab(id);
  };

  const handleMouseLeave = () => {
    setActiveTab(null);
  };

  const currentTab = tabs.find(tab => tab.id === activeTab) || { id: 'default', label: 'Capabilities', bgColor: 'linear-gradient(78.66deg, #000d18, #00213e)', image: defaultTabImage };

  return (
    <div 
      className={styles.fullPageContainer}
      style={{ '--background-gradient': currentTab.bgColor } as React.CSSProperties}
    >
      <div 
        className={styles.contentContainer}
        onMouseLeave={handleMouseLeave}
      >
        <div className={styles.tabs}>
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`${styles.tab} ${activeTab === tab.id ? styles.active : ''}`}
              onMouseEnter={() => handleMouseEnter(tab.id)}
            >
              {tab.label}
            </div>
          ))}
        </div>
        <div className={styles.content}>
          {activeTab === null ? (
            <div className={styles.capabilitiesContainer}>
              <Image
                src={defaultTabImage}
                alt="Capabilities"
                className={styles.defaultImage}
              />
              <div className={styles.textOverlay}>
                <h1>Capabilities</h1>
                <p>Discover the many ways SolutionBuilt can help your business thrive.</p>
              </div>
            </div>
          ) : (
            <div className={styles.imageContainer}>
              <Image
                src={currentTab.image}
                alt={currentTab.label}
                className={styles.tabImage}
              />
              <div className={styles.textOverlay}>
                <h2>{currentTab.label}</h2>
                <p>Details about {currentTab.label}</p>
              </div>
            </div>
          )}
          <div className={styles.textContainer}>
            <div className={styles.textBox}>
              <p>Additional information about {currentTab.label}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabbedContent;