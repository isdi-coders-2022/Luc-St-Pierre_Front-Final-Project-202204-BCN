import { NavLink } from "react-router-dom";

const MobileNav = () => {
  return (
    <nav className="flex items-center justify-center w-full md:hidden">
      <button className="flex flex-1 flex-col items-center flex-shrink-0 justify-center sm:mx-2 pt-1 max-w-[99px] sm:max-w-[100px] md:max-w-[112px]">
        <NavLink to="/hosts/home">
          <span className="flex flex-col justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 stroke-[#FF385C]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="stroke-[#FF385C]"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <div className="leading-none">
              <span className="text-xs font-semibold">Explore</span>
            </div>
          </span>
        </NavLink>
      </button>

      <button className="flex flex-1 flex-col items-center flex-shrink-0 justify-center md:mx-2 pt-1 max-w-[99px] sm:max-w-[100px] md:max-w-[112px]">
        <NavLink to="/hosts/wishlists">
          <span className="flex flex-col justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 stroke-[#B0B0B0]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>

            <div className="leading-none">
              <span className="text-xs text-[#484848] font-normal">
                Wishlists
              </span>
            </div>
          </span>
        </NavLink>
      </button>

      <button className="flex flex-1 flex-col items-center flex-shrink-0 justify-center md:mx-2 pt-1 max-w-[99px] sm:max-w-[100px] md:max-w-[112px]">
        <NavLink to="/user/login">
          <span className="flex flex-col justify-center items-center">
            <svg
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              className="h-6 w-6 fill-[#B0B0B0]"
            >
              <path d="m16 1c8.2842712 0 15 6.71572875 15 15 0 8.2842712-6.7157288 15-15 15-8.28427125 0-15-6.7157288-15-15 0-8.28427125 6.71572875-15 15-15zm0 8c-2.7614237 0-5 2.2385763-5 5 0 2.0143973 1.2022141 3.7998876 2.9996346 4.5835001l.0003231 2.0984999-.1499943.0278452c-2.8326474.5613112-5.31897338 2.2230336-6.93575953 4.5872979 2.34343054 2.291067 5.54974273 3.7028569 9.08579613 3.7028569 3.5355506 0 6.7414538-1.4113884 9.0850203-3.701476-1.6141801-2.3628535-4.0978119-4.0247647-6.929184-4.5867938l-.1558786-.0287302.001228-2.0991413c1.7288399-.7547474 2.9066959-2.4357565 2.9936498-4.355479l.0051645-.2283797c0-2.7614237-2.2385763-5-5-5zm0-6c-7.17970175 0-13 5.82029825-13 13 0 2.9045768.95257276 5.5866683 2.56235849 7.7509147 1.42074739-1.9134907 3.33951478-3.4002416 5.53860831-4.2955956l.3480332-.1363191-.0229565-.0189706c-1.43704227-1.2411241-2.34462949-3.045583-2.42083359-5.0285539l-.00520991-.2714755c0-3.8659932 3.1340068-7 7-7s7 3.1340068 7 7c0 1.9941317-.8415062 3.8279876-2.224566 5.1193683l-.225434.2006317.0447787.0163138c2.3268368.8792152 4.3570558 2.4138611 5.8430586 4.4127726 1.6098837-2.1632453 2.5621627-4.8449575 2.5621627-7.7490864 0-7.17970175-5.8202983-13-13-13z"></path>
            </svg>

            <div className="leading-none">
              <span className="text-xs text-[#484848] font-normal">Log in</span>
            </div>
          </span>
        </NavLink>
      </button>
    </nav>
  );
};

export default MobileNav;
