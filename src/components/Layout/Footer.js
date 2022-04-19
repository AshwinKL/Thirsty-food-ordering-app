import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <h3>
        Made with 💖 by{" "}
        <a
          href="https://www.linkedin.com/in/ashwinkl"
          target="_blank"
          rel="noreferrer"
        >
          Ashwin K L
        </a>
      </h3>
    </div>
  );
};

export default Footer;
