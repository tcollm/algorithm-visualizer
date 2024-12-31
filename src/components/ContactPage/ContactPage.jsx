import styles from "./ContactPage.module.css";

const ContactPage = () => {
  return (
    <section className={styles.contactContainer}>
      <h1>Contact Me</h1>
      <p>
        If you&apos;d like to get in touch, feel free to reach out through any
        of the platforms below:
      </p>

      <div className={styles.contactDetails}>
        <div className={styles.contactItem}>
          <a
            href="https://www.linkedin.com/in/tyler-collingridge-811630290/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="../src/assets/linkedin-svgrepo-com.svg"
              alt="Github"
              width="60"
              height="60"
            />
          </a>
        </div>

        <div className={styles.contactItem}>
          <a
            href="https://github.com/tcollm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="../src/assets/github-142-svgrepo-com.svg"
              alt="Github"
              width="50"
              height="50"
            />
          </a>
        </div>
      </div>

      <h2>Or send a message directly:</h2>
      <form
        action="mailto:collingridgetyler@gmail.com"
        method="post"
        encType="text/plain"
      >
        <div className={styles.formGroup}>
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message">Your Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>
        </div>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default ContactPage;
