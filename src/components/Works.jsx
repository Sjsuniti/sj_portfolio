import React from 'react'
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

// const Works = () => {
//   return (
//     <>
//        <motion.div variants={textVariant()}>
//       <p className={styles.sectionSubText}> My work </p>
//       <h2 className={styles.sectionHeadText}>Some  Other Projects </h2>
//     </motion.div>

// <div className='w-full flex'>
//   <motion.p 
//     variants={fadeIn("", "", 0.1, 1)}
//     className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
//   >
//     The following projects showcase my skills and expertise. Each project is briefly described, with links to the code and repositories. They reflect my ability to solve complex problems, work with different technologies, and manage projects effectively.
//   </motion.p>
// </div>

//     </>
//   )
// }


// export default SectionWrapper(Works, "");

const Works = () => {
  return (
    <div style={{ display: "none" }}>hi</div>
  );
};

export default Works;
