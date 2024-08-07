import React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import Layout from '../components/Layout'; 
import IntegrationsHero from '../components/images/integrations-hero 1.svg';
import styles from '../components/Integrations.module.css';
import SbButton from "../components/SbButton";
import Footer from '../components/Footer';

const Integrations: NextPage = () => (
  <Layout title="SolutionBuilt">
    <div className={styles.headerSection}>
      <div className={styles.textContent}>
        <h1>Atlanta’s Integration Partner</h1>
        <p>SolutionBuilt is a web and mobile agency that helps enterprises build B2B and B2C websites and mobile applications.</p>
      </div>
      <div className={styles.integrationsHero}>
        <Image
          src={IntegrationsHero}
          alt="Maintenance Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
    <div className={styles.content}>
      <div className={styles.aCuttingEdgeWebsiteContainer}>
        <span>{`A `}</span>
        <span className={styles.cuttingEdgeWebsite}>cutting-edge website</span>
        <span>{` is about more than visual appeal—it’s about the `}</span>
        <span className={styles.results}>results</span>
        <span>{` developed through `}</span>
        <span className={styles.intentionalAndFunctional}>intentional and functional design</span>
        <span>.</span>
      </div>
    </div>
    <div className={styles.APIcontent}>
      <div className={styles.blueContainerContent}>
        <h1>Application Programming Interfaces (API’s)</h1>
        <p>API's allow a connection between two or more apps for exchanging data.</p>
      </div>
      <div className={styles.integrationsFocusesOnContainer}>
        <p className={styles.integrationsFocusesOn}>Integrations focuses on integrity. APIs ensure that you will not have to worry about versioning issues coming between your massive stack of systems.</p>
        <p className={styles.integrationsFocusesOn}>&nbsp;</p>
        <p className={styles.integrationsFocusesOn}>Most companies require a website integration with their own software or a third-party provider. They mark a positive impact throughout multiple aspects of your business and enable you to do more of the important work faster than ever before.</p>
      </div>
    </div>
    <div className={styles.soFarContent}>
  <p className={styles.soHowDo}>
    So how do you apply features that not only lead to a positive user journey, but enable your business to become streamlined and competent as a whole? 
    <span className={styles.highlight}>&nbsp;Integrations are the key.&nbsp;</span>
    At SolutionBuilt, we add integrations to your website to optimize both the experience for your company and your users. We integrate API’s and Cloud Services into available software, websites, and mobile apps.
  </p>
</div>


<div className={styles.integrations}>
<div className={styles.sectionBg} />
<div className={styles.verifyingYourUser}>Verifying your user identities just got easier. Through a combination of common SOO technology authentication, we can help with setting up role-based access for your employees, partners, and customers. We partner with many providers such as Microsoft Azure Active Directory, Okta Identity Cloud, Google Cloud Identity, OneLogin, JumpCloud, and Auth0.</div>
<div className={styles.leverageTheBenefits}>Leverage the benefits of cloud-based services to help your organization streamline data access, automate works, and improve processes. This form of integration is delivered as a cloud-computing service that focuses on creating unity. We can help develop and optimize software integrations across a range of CRM, social, map HR, ticketing systems, or custom application needs.</div>
<div className={styles.programManualMarketing}>Program manual marketing tasks with custom automation rules based on the client lifestyle. This technology manages the marketing process and multifunctional campaigns across many channels. Our marketing automation allows your business to specifically target customers. Elevate your brand’s messaging with email, text, and push notifications designed to reach and engage your audience.</div>
<div className={styles.mergeIntoThe}>Merge into the world of Analytics. The ability to deliver intelligence to multiple data sources has never been closer. We measure the complete performance of your software, website, or mobile application to meet your business objectives. We can create and tailor custom reports using data from your CRM, Google Analytics, Google Data Studio, or preferred analytics solution. This merger helps your business make smarter, more informed decisions.</div>
<b className={styles.authentication}>Authentication</b>
<b className={styles.cloudIntegrations}>Cloud Integrations</b>
<b className={styles.marketingAutomation}>Marketing Automation</b>
<b className={styles.analytics}>Analytics</b>
<b className={styles.solutionbuiltTypicalIntegrat}>SolutionBuilt Typical Integrations</b>
</div>
<div className={styles.bottomCta}>
<b className={styles.letsGetStarted}>Need Integration Services?</b>
<div className={styles.ifYoureLooking}>If you're still looking for Integration, you've found it here! Whether you are looking to develop customer facing interfaces or streamline your data-flow processes, we've got your back. At SolutionBuilt we are passionate about making life easier for our clients through problem solving API integration and custom programming. Spend less time worrying about your applications and more time invested in the growth of your business today!</div>
</div>
<div className={styles.integrationsBtn}>
<SbButton href='/'>WORK WITH US</SbButton> 

</div>
< Footer />
  </Layout>
);

export default Integrations;
