/* [1] import object "styles" from "About.module.css" */
// import styles from "../styles/Contact.module.css";

/* [1] import object "styles" from "About.module.scss" */
import styles from "../styles/Contact.module.scss";

function Contact() {
  return (
    <>
      <h2>Contact Page</h2>

      {/* [2] Usage Of CSS Modules */}
      {/* <p className={styles.highlighted}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi nobis
        natus, praesentium corrupti laborum cum quas non quia inventore? Tempora
        eius incidunt vitae expedita nemo nihil earum cum perspiciatis ut.
      </p> */}

      {/* [2] Usage Of SCSS Modules */}
      <p className={styles.highlighted_SCSS}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi nobis
        natus, praesentium corrupti laborum cum quas non quia inventore? Tempora
        eius incidunt vitae expedita nemo nihil earum cum perspiciatis ut.
      </p>
    </>
  );
}

export default Contact;
