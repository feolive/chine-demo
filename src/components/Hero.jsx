import { useState } from "react";
import { backIn, motion } from "framer-motion";

import { InvitationModal } from "./InvitationModal";

export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const backgroundImg = {
    backgroundImage: "url(/public/title_img.png)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    opacity: 0.5
  };


  return (
    <section
      className="w-screen  flex justify-center items-center bg-bgDark1 mb-[28vw] md:mb-[18vw] lg:mb-[10vw] xl:mb-[13vw] 2xl:mb-60 hero-bg-gradient pb-24 sm:pb-32 md:pb-44 lg:pb-0"
      id="home"
    >
      <div className="z-1 w-full md:w-[800px] xl:w-[900px] flex flex-col justify-center items-center pt-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-secondaryColor text-sm sm:text-base  mb-6 sm:mt-32 mt-16 font-bold">
            Make yourself at home
          </h3>
        </motion.div>
        <motion.div
          className="hero-bg-image"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 0.05 }}
          // style={backgroundImg}
        >
          <div className="text-5xl sm:text-6xl lg:text-7xl xl:text-7xl font-bold tracking-wide  text-primaryText  px-8 sm:px-8 md:px-20 lg:px-4">
            <h1 className="inline md:hidden">Chine Legendary</h1>
            <h1 className="hidden md:inline">Chine Legendary</h1>
          </div>
          <h1 className="mt-2 sm:mt-2 text-4xl sm:text-6xl lg:text-7xl xl:text-7xl font-bold tracking-wide  text-primaryText  px-8 sm:px-20 md:px-24 lg:px-24">
            Hot Pot & Noodles
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-secondaryText text-sm lg:text-base xl:text-lg sm:text-base mt-10 px-12 sm:px-48 ">
            Chine Hot Pot provides an authentic Chinese Szechuan style hot pot dining experience.
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="flex flex-col gap-2 sm:flex-row mt-14 mb-14 sm:mb-40 justify-center">
            <button
              className="contained-button w-64 sm:w-52 h-12 mr-0 sm:mr-4 lg:mr-6 mb-2 sm:mb-0"
              onClick={() => setIsModalOpen(true)}
              aria-label="Reservation"
            >
              RESERVATION
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10, zIndex: 20 }}
          animate={{ opacity: 1, y: 0, zIndex: 20 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="relative w-screen flex justify-center">
            <video className="w-4/5 2xl:w-[1400px] mx-auto absolute z-10 rounded-xl main-border-gray hero-dashboard-border-gradient lg:top-6 xl:top-0" autoPlay muted loop="loop" alt="intro video">
              <source src="https://video.wixstatic.com/video/89a0b9_2af11a1a8e244c31a4043b198837ca38/1080p/mp4/file.mp4" type="video/mp4" />
            </video>
          </div>
        </motion.div>
        <div className="relative w-screen flex justify-center ">
          <div className="shape-divider-bottom-1665343298 mt-4 sm:mt-16 md:mt-52 hidden lg:block">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="bg-bgDark2"
            >
              <path
                d="M1200 0L0 0 598.97 114.72 1200 0z"
                className="shape-fill bg-bgDark1  fill-bgDark1"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  );
};
