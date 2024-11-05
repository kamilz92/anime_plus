import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { Button } from "../button";
import { Container } from "../container";
import imageHero from "/img/imageHero.jpg";

export const Hero = () => {
  const videoContainerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: videoContainerRef,
    offset: ["start start", "end end"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  return (
    <div className=" bg-black text-white relative">
      <motion.div
        style={{ opacity }}
        ref={videoContainerRef}
        className="absolute left-0 -top-[--header-height] h-[200vh]"
      >
        <img
          src={imageHero}
          className="sticky top-0 w-screen h-screen object-cover"
          alt="Hero"
        />
      </motion.div>
      <Container className="relative z-10 h-[--hero-height] pb-7">
        <motion.div
          className="flex h-full flex-col items-start justify-end"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          whileInView="visible"
          exit="hidden"
          animate="hidden"
          viewport={{ amount: 0.9 }}
        >
          <h1 className="text-5xl font-bold mb-10">
            All hits in one place. <br />
            Only on Anime+
          </h1>
          <Button className="mb-16" size="large">
            Stream Now!
          </Button>
          <p>Watch on our A+ app.</p>
        </motion.div>
      </Container>
    </div>
  );
};
