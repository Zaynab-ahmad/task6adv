type HeroProps = {
  title: string;
};

const Hero = ({ title }: HeroProps) => {
  return (
    <h1 className="mb-[30px] font-bold text-center lg:text-[16vw] text-[18vw] leading-100% overflow-hidden border-y border-(0, 0, 0, 0.34) dark:border-white whitespace-nowrap">
      {title}
    </h1>
  );
};

export default Hero;
