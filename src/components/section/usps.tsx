import { Container } from "../container";
import { FadeIn } from "./fadeIn";

export const Usps = () => {
  return (
    <Container className="text-white z-10 relative text-4xl py-36 font-bold space-y-16 max-w-[692px]">
      <FadeIn>
        <p>New anime episodes and exclusive manga releases every month.</p>
      </FadeIn>
      <FadeIn>
        <p>
          Stream your favorite shows on the A+ app, on your TV, or straight from
          your PC!
        </p>
      </FadeIn>
      <FadeIn>
        <p>
          Experience anime like never before with stunning 4K HDR visuals and
          immersive surround sound.
        </p>
      </FadeIn>
      <FadeIn>
        <p>
          Enjoy a seamless watching experience, with no ads, across all your
          devices.
        </p>
      </FadeIn>
    </Container>
  );
};
