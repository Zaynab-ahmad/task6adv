
type SubscribeProps = {
  smallHeading: string;
  mainHeading: string;
  description: string;
};

const Subscribe: React.FC<SubscribeProps> = ({
  smallHeading,
  mainHeading,
  description,
}) => {
  return (
    <div className="flex flex-col item-start md:items-center justify-between px-4">
      <h4 className="text-base/[24px] text-purple2 font-semibold mb-3">
        {smallHeading}
      </h4>
      <h2 className="text-5xl/[60px] font-semibold text-start md:text-center mb-6">
        {mainHeading}
      </h2>
      <p className="text-xl/[30px] text-gray-4 font-normal text-start md:text-center mb-10">
        {description}
      </p>

      <form className="flex flex-col justify-between gap-2">
        <div className="flex sm:flex-row flex-col justify-between gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="pr-[14px] pl-4 py-3 text-sm/[20px] max-w-[326px] md:max-w-[360px] dark:bg-white text-gray-4 font-normal border border-gray-8 shadow-xs shadow-gray-9 rounded-md"
          />
          <input
            type="submit"
            value="Subscribe"
            className="bg-purple2 w-fit text-white px-6 py-2 rounded-lg cursor-pointer"
          />
        </div>
        <p className="self-start text-sm/[20px] text-gray-4 font-normal mt-4">
          We care about your data in our{" "}
          <a href="/privacy" className="underline">
            privacy policy
          </a>
        </p>
      </form>
    </div>
  );
};

export default Subscribe;
