import HeroImageBox from "../utils/HeroImageBox";
import useFetch from "../utils/useFetch";

const Hero = (props) => {
  const { items } = useFetch();

  return (
    <div className="w-full">
      <div className="max-w-[1440px] mx-auto py-5 px-10 md:mx-16  md:flex justify-between">
        <div className="md:grid text-center md:text-left grid-cols-2 gap-14">
          <div className="my-10 md:my-auto">
            <h1 className="pb-8 text-5xl md:text-6xl leading-">
              {props.header}
            </h1>
            <p className="text-2xl mb-10">{props.text}</p>
          </div>

          <HeroImageBox p="Aceyhost" url={items[0]?.url} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
