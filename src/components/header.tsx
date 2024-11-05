import { Container } from "./container";
import { Button } from "./button";

export const Header = () => {
  return (
    <>
      <header className="bg-backgroundContrast text-white relative z-20">
        <Container className="flex min-h-[--header-row-height] items-center">
          <a className="h-[--header-row-height] flex items-center pr-6 " href="/">
            Homepage
          </a>
        </Container>
      </header>
      <div className="sticky top-0 bg-backgroundContrast text-white border-b border-white z-20">
        <Container className="flex items-center justify-between min-h-[--header-row-height]">
            <p className="text-xl font-semibold">Anime+</p>
            <Button size="small">Stream now!</Button>
        </Container>
      </div>
    </>
  );
};
