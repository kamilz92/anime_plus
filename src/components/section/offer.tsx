import { Button } from "../button";
import { Container } from "../container";
import { FadeIn } from "./fadeIn";

export const Offer = () => {
  return (
    <Container className="max-w-[1200px] py-40">
      <div className="grid place-content-center grid-cols-1 lg:grid-cols-3 lg:space-x-5">
        <FadeIn>
          <Card
            headingText="Watch the Latest Anime"
            mainText="7-day Free Trial"
            description="Stream the latest episodes of top anime shows like Attack on Titan, One Piece, and Demon Slayer. Sign up today and get your first 7 days free!"
            buttonText="Start Free Trial"
          />
        </FadeIn>
        <FadeIn>
          <Card
            headingText="Explore Classic Anime"
            mainText="Top Picks"
            description="Relive the classics! From Cowboy Bebop to Naruto, dive into the best anime shows that shaped the genre. New episodes added weekly."
            buttonText="Explore Now"
          />
        </FadeIn>
        <FadeIn>
          <Card
            headingText="Upcoming Anime Releases"
            mainText="2024 Premieres"
            description="Don't miss out on the upcoming 2024 anime season! Stay tuned for exclusive previews and release dates for new shows."
            buttonText="Learn More"
          />
        </FadeIn>
      </div>
    </Container>
  );
};

type CardProps = {
  headingText: string;
  mainText: string;
  description: string;
  buttonText: string;
};

const Card = ({
  headingText,
  mainText,
  description,
  buttonText,
}: CardProps) => {
  return (
    <div className="py-10 mx-auto lg:mx-0 lg:py-0 bg-black text-white rounded-lg max-w-sm">
      <h2 className="text-xl font-semibold">{headingText}</h2>
      <h1 className="text-4xl font-bold mb-4">{mainText}</h1>
      <p className="text-base mb-10">{description}</p>
      <Button size="medium">{buttonText}</Button>
    </div>
  );
};
