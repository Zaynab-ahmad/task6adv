
const Subscribe = () => {
  return (
    <div className="flex flex-col items-center justify-between">
      <h4 className="text-base/[24px] text-purple2 font-semibold mb-3">
        Newsletters
      </h4>
      <h2 className="text-5xl/[60px] font-semibold text-center mb-6">
        Stories and interviews
      </h2>
      <p className="text-xl/[30px] text-gray-4 font-normal text-center mb-10">
        Subscribe to learn about new product features, the latest in technology,
        solutions, and updates.
      </p>

      <form className="flex flex-col justify-between gap-2">
        <div className="flex sm:flex-row flex-col justify-between gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="pr-[14px] pl-4 py-3 text-sm/[20px] w-[326px] md:w-[360px] dark:bg-white text-gray-4 font-normal border border-gray-8 shadow-xs shadow-gray-9 rounded-md"
          />
          <input
            type="submit"
            value="Subscribe"
            className="bg-purple2 text-white px-6 py-2 rounded-lg cursor-pointer"
          />
        </div>
        <p className="self-start text-sm/[20px] text-gray-4 font-normal mt-4">
          We care about your data in our {" "}
          <a href="/privacy" className="underline">
            privacy policy
          </a>
        </p>
      </form>
    </div>
  );
}

export default Subscribe
