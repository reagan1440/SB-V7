import React from 'react';
import Head from 'next/head';
import styles from '../components/Contact.module.css';

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    fetch(event.target.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result === 'success') {
          alert('Thank you for your message! We will get back to you shortly.');
        } else {
          alert('There was an error submitting the form. Please try again.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('There was an error submitting the form. Please try again.');
      });
  };

  return (
    <div className={styles.container}>
      <Head>
        <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css" />
        <style type="text/css">
          {`
            #mc_embed_signup {
              background: #fff; 
              clear: left; 
              font: 14px Helvetica, Arial, sans-serif;
              width: 100%;
              padding: 20px;
            }
            .contact-info {
              margin-bottom: 20px;
            }
            .mc-field-group {
              margin-bottom: 15px;
            }
            .button {
              display: inline-block;
              padding: 10px 20px;
              font-size: 16px;
              background-color: #007bff;
              color: #fff;
              border: none;
              cursor: pointer;
              text-align: center;
              border-radius: 5px;
            }
            .button:hover {
              background-color: #0056b3;
            }
          `}
        </style>
      </Head>

      <div className="contact-info">
        {/* Contact information section */}
        <h2>How Can We Help?</h2>
        <p>We'd love to hear from you! Call today or complete the short form below and we will be in touch with you shortly.</p>
        <div className={styles.contactDetails}>
          <div className={styles.contactDetail}>
            <h3>Sales</h3>
            <p>404-835-7730 - Option 1</p>
          </div>
          <div className={styles.contactDetail}>
            <h3>Support</h3>
            <p>404-835-7730 - Option 2</p>
          </div>
          <div className={styles.contactDetail}>
            <h3>Headquarters</h3>
            <p>379 Atlanta St SE Marietta, Georgia 30060</p>
          </div>
          <div className={styles.contactDetail}>
            <h3>Atlanta Office</h3>
            <p>1100 Peachtree Street, Suite 200 Atlanta, Georgia 30309</p>
          </div>
        </div>
      </div>

      <div id="mc_embed_signup">
        <form
          action="https://solutionbuilt.us4.list-manage.com/subscribe/post?u=08e4a40043de75af56bcf056a&amp;id=e438686498&amp;f_id=00d967eaf0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          noValidate
          onSubmit={handleSubmit}
        >
          <div id="mc_embed_signup_scroll">
            <div className="mc-field-group">
              <label htmlFor="mce-FNAME">Name <span className="asterisk">*</span></label>
              <input type="text" name="FNAME" className="required" id="mce-FNAME" required placeholder="Your Full Name" />
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-EMAIL">Email <span className="asterisk">*</span></label>
              <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" required placeholder="Your Email Address" />
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-MMERGE4">Phone <span className="asterisk">*</span></label>
              <input type="tel" name="MMERGE4" className="required" id="mce-MMERGE4" required placeholder="Your Phone Number" />
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-MMERGE3">Company</label>
              <input type="text" name="MMERGE3" id="mce-MMERGE3" placeholder="Your Company" />
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-MMERGE5">Your Message</label>
              <input type="text" name="MMERGE5" id="mce-MMERGE5" placeholder="What's on your mind?" />
            </div>

            <div id="mce-responses" className="clear foot">
              <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
              <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
            </div>

            <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
              <input
                type="text"
                name="b_08e4a40043de75af56bcf056a_e438686498"
                tabIndex={-1}
                value=""
              />
            </div>

            <div className="optionalParent">
              <div className="clear foot">
                <input
                  type="submit"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="button"
                  value="Submit"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
