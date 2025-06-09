
// import { motion } from "framer-motion";
// import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";

// const Hero = () => {
//   return (
//     <section className={`relative w-full h-screen mx-auto`}>
//       <div
//         className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
//       >
//         <div className='flex flex-col justify-center items-center mt-5'>
//           <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
//           <div className='w-1 sm:h-80 h-40 violet-gradient' />
//         </div>

//         <div>
//           <h1 className={`${styles.heroHeadText} text-white`}>
//             Hi, I'm <span className='text-[#915EFF]'>Suniti</span>
//           </h1>
//           <p className={`${styles.heroSubText} mt-2 text-white-100`}>
//        I create dynamic apps with real-time features <br className='sm:block hidden'/>and user-focused design.
//           </p>
//         </div>
//       </div>




//     <ComputersCanvas />
        
//       <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
//         <a href='#about'>
//           <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
//             <motion.div
//               animate={{
//                 y: [0, 24, 0],
//               }}
//               transition={{
//                 duration: 1.5,
//                  repeat: Infinity,
//                  repeatType: "loop",
//               }}
//               className='w-3 h-3 rounded-full bg-secondary mb-1'
//             />
//           </div>
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Hero;



import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className=' relative w-full h-screen mx-auto'>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Suniti</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I create dynamic apps with real-time features <br className='sm:block hidden' />
            and user-focused design.
          </p>
        </div>
      </div>

      {/* 3D Canvas */}
{/* 3D Canvas */}
<div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
 <div className="w-full h-full min-h-[500px] transition-all duration-500 ease-in-out">
"
    <ComputersCanvas />
  </div>
</div>



      {/* Scroll Indicator */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>

{/* Let's Connect Section */}
<div className='absolute bottom-10 left-1/2 transform -translate-x-1/2 sm:left-[10%] sm:translate-x-0 flex flex-col sm:flex-row items-center gap-4 z-10'>
  <p className='text-[16px] sm:text-[17px] text-white font-medium'>Let's connect:</p>
  <div className='flex'>
    <a
      href='https://github.com/Sjsuniti/Portfolio'
      target='_blank'
      className='social-icon'
    >
      <i className='bx bxl-github'></i>
    </a>
    <a
      href='https://www.linkedin.com/in/suniti-jha-14496822a'
      target='_blank'
      className='social-icon'
    >
      <i className='bx bxl-linkedin'></i>
    </a>
    <a
      href='mailto:sjsuniti1512@gmail.com?subject=Feedback&body=Message'
      className='social-icon'
    >
      <i className='bx bxl-gmail'></i>
    </a>
    <a
      href='https://instagram.com/sjsuniti?igshid=OGQ5ZDc2ODk2ZA=='
      target='_blank'
      className='social-icon'
    >
      <i className='bx bxl-instagram'></i>
    </a>
  </div>
</div>

    </section>
  );
};

export default Hero;


