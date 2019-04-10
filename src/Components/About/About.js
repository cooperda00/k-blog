//Modules
import React from "react";
//SASS
import styles from "./About.module.scss";
//Assets
import hanok from "../../assets/hanokVillage.jpg";

const About = () => {
  return (
    <div className={styles.About}>
      <h1>About</h1>
      <img src={hanok} alt="Jeonju Hanok Village" />
      <div className={styles.Text}>
        <p>
          This blog is simply for documentation of what I am learning at the
          moment, which can hopefully be of use to others in some way.
        </p>
        <p>
          I have been learning Korean on and off for over 7 years. I am by no
          means an expert! Just a regular guy trying to maintain a habit of
          studying when he has a lot of other stuff on his plate! I would place
          my level solidly in the 'intermediate' category.
        </p>
        <p>
          I lived in Korea for 6 years, in the city pictured above (Jeonju), and
          miss it dearly!
        </p>
      </div>
    </div>
  );
};

export default About;
