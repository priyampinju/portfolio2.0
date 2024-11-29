import React from "react";
// import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
// import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p vaiants={fadeIn("", "", 0.1, 1)} className="">
        I'm Pinu thebrjbdfsdbfs Lorem ipsum dolor sit amet, adipisicing elit.
        Eum, autem?
      </motion.p>
    </>
  );
};

export default About;
