import React, { useState } from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';
import styles from '../components/Contact.module.css';
import phoneIcon from '../components/images/phone.svg';
import headquartersIcon from '../components/images/home.svg';
import atlantaOfficeIcon from '../components/images/buildings.svg';
import Footer from '../components/Footer';

const Contact = () => {
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch(event.currentTarget.action, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      const data = await response.json();

      if (data.result === 'success') {
        setMessage('Thank you for your message! We will get back to you shortly.');
      } else {
        setMessage('There was an error submitting the form. Please try again.');
      }
    } catch {
      setMessage('There was an error submitting the form. Please try again.');
    }
  };

  return (
    <Layout title="Contact Us">
      <div className={styles.pageHeader}>
        <h2>How Can We Help?</h2>
        <p>
          We&apos;d love to hear from you! Call today or complete the short form below
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
  action="https://solutionbuilt.us4.list-manage.com/subscribe/post?u=08e4a40043de75af56bcf056a&amp;id=e438686498&amp;f_id=00d967eaf0"
  method="post"
  id="mc-embedded-subscribe-form"
  name="mc-embedded-subscribe-form"
  className={styles.form}
  target="_blank"
  noValidate
  onSubmit={handleSubmit}
>
  <div className={styles.formRow}>
    <div className={styles.mcFieldGroup}>
      <label htmlFor="mce-FNAME">Name <span className={styles.asterisk}>*</span></label>
      <input
        type="text"
        name="FNAME"
        id="mce-FNAME"
        required
        placeholder="Your Full Name"
      />
    </div>
    <div className={styles.mcFieldGroup}>
      <label htmlFor="mce-EMAIL">Email <span className={styles.asterisk}>*</span></label>
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
    <div className={styles.mcFieldGroup} style={{ gridColumn: '1 / span 4' }}>
      <label htmlFor="mce-MESSAGE">Message</label>
      <textarea
        name="MESSAGE"
        id="mce-MESSAGE"
        placeholder="Your Message"
      />
    </div>
  </div>
  <div className={styles.optionalParent}>
    <input
      type="submit"
      value="Send"
      name="subscribe"
      id="mc-embedded-subscribe"
      className={styles.contactBtn}
    />
  </div>
</form>

        {message && <p className={styles.feedbackMessage}>{message}</p>}
      </div>
      <Footer />
    </Layout>
  );
};

export default Contact;
