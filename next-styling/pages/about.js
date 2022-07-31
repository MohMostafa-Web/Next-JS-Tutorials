/* [1] import object "styles" from "About.module.css" */
// import styles from "./../styles/About.module.css";

/* [1] import object "styles" from "About.module.scss" */
import styles from "./../styles/About.module.scss";

function About() {
  return (
    <>
      <h2 className="w-50 mx-auto p-2 text-center">About Page</h2>
      <button className="btn btn-primary d-block mx-auto mb-3">Click me</button>

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

export default About;
