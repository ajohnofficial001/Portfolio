import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HeroImage, MobileHero } from "../assets/index";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const [shouldRender3DModel, setShouldRender3DModel] = useState(true);
  const isMobileScreen = window.innerWidth <= 500;

  useEffect(() => {
    async function checkInternetSpeed() {
      try {
        const connection =
          navigator.connection ||
          navigator.mozConnection ||
          navigator.webkitConnection;
        if (!connection) {
          console.log("Internet connection API not supported");
          return;
        }

        const { effectiveType, downlink } = connection;

        const downlinkMbps = downlink * 0.001;

        const thresholdSpeedMbps = 5; // Adjust this threshold as needed

        if (downlinkMbps >= thresholdSpeedMbps) {
          setShouldRender3DModel(true);
        } else {
          setShouldRender3DModel(false);
        }
      } catch (error) {
        console.error("Error checking internet speed:", error);
      }
    }

    checkInternetSpeed();
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[80px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">John</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visuals, user <br className="sm:block hidden" />
            interfaces and frontend solutions
          </p>
        </div>
      </div>
      {shouldRender3DModel ? (
        <ComputersCanvas />
      ) : (
        <ComputersCanvas />
      )}

      <div className="absolute xs:bottom-10 bottom-15 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[30px] h-[60px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
