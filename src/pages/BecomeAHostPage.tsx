import { NavLink } from "react-router-dom";

const BecomeAHostPage = () => {
  return (
    <div className="flex w-full relative">
      <div className="absolute left-0 h-screen w-1/2">
        <div className="object-cover">
          <iframe
            className="h-screen w-full aspect-video"
            title="A Host waves from their living room and adjusts their sofa. Another Host takes a photo in their plant-filled space. Finally, two Hosts sit beside each other and wave hello."
            src="https://a0.muscache.com/v/8b/04/8b0456c7-13f8-54bc-889a-7cf549f144a3/8b0456c713f854bc889a7cf549f144a3_4000k_1.mp4"
            allow="autoplay"
          />
        </div>
      </div>

      <div className="fixed top-0 right-0 text-white z-10 w-1/2">
        <div className="h-[88px] flex justify-end items-start p-[32px_48px_0] ">
          <button className="bg-[#222222] text-xs font-semibold px-4 h-8 rounded-full">
            <NavLink to="/hosts/home">Exit</NavLink>
          </button>
        </div>
      </div>

      <div className="bg-[#000] h-screen z-0 ml-[50vw] w-1/2 flex-[1_1_50%] text-white">
        <div className="mt-[88px] flex flex-col items-center justify-center mb-[82px] overflow-y-auto px-[48px] h-[calc(100%_-_calc(88px_+_82px))]">
          <h1 className="max-w-[480px] text-center text-5xl font-semibold mb-8">
            Become a Host in 10 easy steps
          </h1>

          <div>
            <span className="text-lg font-medium">
              Join us. We'll help you every step of the way.
            </span>
          </div>
        </div>

        <div className="w-1/2 z-10 fixed bottom-0">
          <div className="border-t-2 border-[#222222]">
            <div className="flex py-4 justify-end items-center">
              <div className="mr-12">
                <button
                  type="submit"
                  className="flex justify-center max-h-[48px] text-center py-4 px-6 border border-transparent rounded-md shadow-sm leading-none text-base font-medium text-white bg-[#DE3151] hover:bg-[#f43054] focus:outline-none"
                >
                  <NavLink to="/host/become-a-host/property-type-group">
                    Let's go!
                  </NavLink>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomeAHostPage;
