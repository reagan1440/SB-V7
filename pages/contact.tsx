import React, { useRef } from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';
import styles from '../components/Contact.module.css';
import phoneIcon from '../components/images/phone.svg';
import headquartersIcon from '../components/images/home.svg';
import atlantaOfficeIcon from '../components/images/buildings.svg';
import Footer from '../components/Footer';
import GoogleMap from '../components/GoogleMaps';
import SbButton from '../components/SbButton';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    if (formRef.current) {
      formRef.current.submit();
    }
  };

  const mapSrc = 'https://www.google.com/maps/d/u/0/embed?mid=155ntXARRYpY63IH3jN0gJ7JASFmoe4o&ehbc=2E312F';

  return (
    <Layout title="Contact Us">
      <div className={styles.pageHeader}>
        <h2>How Can We Help?</h2>
        <p>
          We'd love to hear from you! Call today or complete the short form below
          and we will be in touch with you shortly.
        </p>
      </div>

      <div className={styles.container}>
        <div className={styles.contactInfo}>
          <div className={styles.contactCard}>
            <div className={styles.icon}>
              <Image src={phoneIcon} alt="Phone Icon" width={50} height={50} />
            </div>
            <div className={styles.contactDetail}>
              <h3>Sales</h3>
              <p>404-835-7730 - Option 1</p>
            </div>
          </div>
          <div className={styles.contactCard}>
            <div className={styles.icon}>
              <Image src={phoneIcon} alt="Support Icon" width={50} height={50} />
            </div>
            <div className={styles.contactDetail}>
              <h3>Support</h3>
              <p>404-835-7730 - Option 2</p>
            </div>
          </div>
          <div className={styles.contactCard}>
            <div className={styles.icon}>
              <Image src={headquartersIcon} alt="Headquarters Icon" width={50} height={50} />
            </div>
            <div className={styles.contactDetail}>
              <h3>Headquarters</h3>
              <p>379 Atlanta St SE Marietta, Georgia 30060</p>
            </div>
          </div>
          <div className={styles.contactCard}>
            <div className={styles.icon}>
              <Image src={atlantaOfficeIcon} alt="Atlanta Office Icon" width={50} height={50} />
            </div>
            <div className={styles.contactDetail}>
              <h3>Atlanta Office</h3>
              <p>1100 Peachtree Street, Suite 200 Atlanta, Georgia 30309</p>
            </div>
          </div>
        </div>

        <form
          ref={formRef}
          action="https://solutionbuilt.us4.list-manage.com/subscribe/post?u=08e4a40043de75af56bcf056a&amp;id=e438686498&amp;f_id=00d967eaf0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className={styles.form}
          target="_blank"
          noValidate
        >
          <div className={styles.formRow}>
            <div className={styles.mcFieldGroup}>
              <label htmlFor="mce-FNAME">
                Name <span className={styles.asterisk}>*</span>
              </label>
              <input
                type="text"
                name="FNAME"
                id="mce-FNAME"
                required
                placeholder="Your Full Name"
              />
            </div>
            <div className={styles.mcFieldGroup}>
              <label htmlFor="mce-EMAIL">
                Email <span className={styles.asterisk}>*</span>
              </label>
              <input
                type="email"
                name="EMAIL"
                id="mce-EMAIL"
                required
                placeholder="Your Email Address"
              />
            </div>
            <div className={styles.mcFieldGroup}>
              <label htmlFor="mce-MMERGE4">Company</label>
              <input
                type="text"
                name="MMERGE4"
                id="mce-MMERGE4"
                placeholder="Your Company Name"
              />
            </div>
            <div className={styles.mcFieldGroup}>
              <label htmlFor="mce-MMERGE5">Phone</label>
              <input
                type="text"
                name="MMERGE5"
                id="mce-MMERGE5"
                placeholder="Your Phone Number"
              />
            </div>
          </div>
          <div className={styles.mcFieldGroup} style={{ gridColumn: '1 / span 4' }}>
            <label htmlFor="mce-MESSAGE">Message</label>
            <textarea
              name="MESSAGE"
              id="mce-MESSAGE"
              placeholder="Your Message"
            />
          </div>
          <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
            <input
              type="text"
              name="b_08e4a40043de75af56bcf056a_e438686498"
              defaultValue=""
            />
          </div>
          <div className={styles.optionalParent}>
            <div className={styles.submitbtn}>
              <SbButton onClick={handleSubmit}>SUBMIT</SbButton> 
            </div>
          </div>
        </form>
      </div>

      <GoogleMap width="100%" height="400px" src={mapSrc} />

      <Footer />
    </Layout>
  );
};

export default Contact;
