import { NavLink, useParams } from "react-router-dom";
import HostForm from "../components/HostForm/HostForm";

const BecomeAHostFormPage = () => {
  const { placeId } = useParams();

  return (
    <div className="flex w-full relative">
      <div className="absolute left-0 w-1/2">
        <div className="max-h-full h-screen fixed flex flex-col justify-center bg-gradient-to-b from-[#CF2C79] to-[#531CA3] text-5xl text-white font-semibold">
          <div className="fixed top-8 left-14">
            <NavLink to="/hosts/home">
              <img src="/assets/logo-icon-white.png" alt="logo-icon-white" />
            </NavLink>
          </div>

          <div className="max-w-[75%] ml-14 w-full mr-6">
            <h1 className="mb-3">What kind of place with you host?</h1>
          </div>
        </div>
      </div>

      <div className="fixed top-0 right-0 text-[#222222] z-10 w-1/2">
        <div className="h-[88px] flex justify-end items-start p-[32px_48px_0] ">
          <button className="bg-[#F7F7F7] text-xs font-semibold px-3.5 h-8 rounded-full">
            <NavLink to="/hosts/home">Exit</NavLink>
          </button>
        </div>
      </div>

      <div className="bg-white h-screen z-0 ml-[50vw] w-1/2 flex-[1_1_50%] text-white">
        <div className="mt-[88px] flex flex-col items-center justify-center mb-[82px] overflow-y-auto px-[48px] h-[calc(100vh_-_calc(88px_+_82px))]">
          <HostForm placeId={placeId} />
        </div>

        <div className="w-1/2 z-10 fixed bottom-0 hidden">
          <div className="border-t-2 border-gray-200">
            <div className="flex py-4 justify-between items-center">
              <div className="ml-12">
                <button className="flex justify-center max-h-[48px] text-center py-4 px-6 border border-transparent rounded-md shadow-sm leading-none text-base font-medium text-[#222222] underline focus:outline-none">
                  <NavLink to="/host/become-a-host">Back</NavLink>
                </button>
              </div>

              <div className="mr-12">
                <button
                  type="submit"
                  className="flex justify-center max-h-[48px] text-center py-4 px-6 border border-transparent rounded-[8px] shadow-sm leading-none text-base font-medium text-white bg-[#222222] hover:bg-black focus:outline-none"
                >
                  <NavLink to="/host/become-a-host/property-type-group">
                    Next
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

export default BecomeAHostFormPage;
