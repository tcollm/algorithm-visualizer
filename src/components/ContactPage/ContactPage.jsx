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
          <h3>Email:</h3>
          <a href="mailto:your-email@example.com">your-email@example.com</a>
        </div>

        <div className={styles.contactItem}>
          <h3>LinkedIn:</h3>
          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn Profile
          </a>
        </div>

        <div className={styles.contactItem}>
          <h3>GitHub:</h3>
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Profile
          </a>
        </div>
      </div>

      <h2>Or send a message directly:</h2>
      <form
        action="mailto:your-email@example.com"
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
