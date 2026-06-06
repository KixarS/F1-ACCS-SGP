import { useEffect, useState } from "react";
import clsx from "clsx";
import navlogo from "/image/AccsLogo.png";

function Navbar() {
  const [HamNavOpen, setHamNavOpen] = useState(false);
  const HamNavOpenHandle = () => setHamNavOpen((prev) => !prev);

  useEffect(() => {
    document.body.style.overflow = HamNavOpen ? "hidden" : "auto";
  }, [HamNavOpen]);

  return (
    <>
      <header className="flex flex-row sticky top-0 justify-between items-center w-full h-[79px] text-black-300 bg-white drop-shadow-lg text-base z-50">
        {/* Logo */}
        <a
          href="#"
          className="flex w-fit h-full flex-row items-center ml-1 lg:ml-24 mt-2"
        >
          <img
            src={navlogo}
            alt="accs-logo"
            className="flex md:min-w-[100px] md:max-w-[100px] md:min-h-[95px] md:max-h-[95px] min-w-[90px] max-w-[90px] min-h-[85px] max-h-[85px] cursor-pointer object-contain"
          />
        </a>
        {/* Desktop Nav */}
        <nav className="w-full hidden lg:flex justify-end mr-10 h-full items-center">
          <nav className="flex flex-row items-center mr-5 text-[18px] h-full space-x-10 min-w-fit duration-300 font-medium">
            <a href="#" className="flex relative h-full items-center min-w-fit justify-center duration-300 underline-button active">
              หน้าหลัก
            </a>
            {/* <a href="#sponsor" className="flex relative h-full items-center min-w-fit justify-center duration-300 underline-button">
              ลูกค้าของเรา
            </a> */}
            <a href="#service" className="flex relative h-full items-center min-w-fit justify-center duration-300 underline-button">
              บริการของเรา
            </a>
            <a href="#contact" className="flex relative h-full items-center min-w-fit justify-center duration-300 underline-button">
              ติดต่อเรา
            </a>
          </nav>
        </nav>
        {/* Hamburger Button */}
        <button
          onClick={HamNavOpenHandle}
          className="flex flex-col lg:hidden w-20 justify-center items-center h-full space-y-[5px] transition-transform"
        >
          <div className={clsx("flex w-7 bg-black-300 h-[3px] duration-300 rounded-xl", HamNavOpen ? "rotate-45 translate-y-2" : "rotate-0 translate-y-0")} />
          <div className={clsx("flex w-7 bg-black-300 h-[3px] rounded-xl", HamNavOpen ? "opacity-0 duration-200" : "opacity-100 duration-500")} />
          <div className={clsx("flex w-7 bg-black-300 h-[3px] duration-300 rounded-xl", HamNavOpen ? "-rotate-45 -translate-y-2" : "rotate-0 translate-y-0")} />
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={clsx(
          "fixed flex flex-row justify-center lg:hidden left-0 z-40 bg-white w-screen ease-in-out",
          HamNavOpen ? "ml-0 h-screen opacity-100 duration-300" : "ml-[100%] opacity-100 h-screen duration-300"
        )}
        onClick={HamNavOpenHandle}
      >
        <nav className="flex flex-col items-start justify-end text-[24px] max-h-screen space-y-8 h-1/2 min-w-fit duration-300 font-medium mt-16 text-[#75b498]">
          <a href="#" className="flex flex-col relative h-10 items-center min-w-fit justify-center duration-300 lg:underline-button">
            <div className="flex flex-row justify-center h-full items-center space-x-5">
              <div className="flex justify-center items-center h-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-9" viewBox="0 0 26 26" fill="#03474B">
                  <path d="M 20 2.03125 C 19.449219 2.03125 19 2.480469 19 3.03125 L 19 7.8125 L 13.71875 2.53125 C 13.328125 2.140625 12.671875 2.140625 12.28125 2.53125 L 0.5625 14.28125 C 0.171875 14.671875 0.171875 15.296875 0.5625 15.6875 C 0.953125 16.078125 1.578125 16.078125 1.96875 15.6875 L 13 4.65625 L 24.0625 15.71875 C 24.257813 15.914063 24.523438 16.03125 24.78125 16.03125 C 25.039063 16.03125 25.273438 15.914063 25.46875 15.71875 C 25.859375 15.328125 25.859375 14.703125 25.46875 14.3125 L 22 10.84375 L 22 3.03125 C 22 2.480469 21.550781 2.03125 21 2.03125 Z M 13 6.5 L 2 17.5 L 2 23 C 2 24.65625 3.34375 26 5 26 L 21 26 C 22.65625 26 24 24.65625 24 23 L 24 17.5 Z M 11 16 L 15 16 C 15.550781 16 16 16.449219 16 17 L 16 23 C 16 23.550781 15.550781 24 15 24 L 11 24 C 10.449219 24 10 23.550781 10 23 L 10 17 C 10 16.449219 10.449219 16 11 16 Z" />
                </svg>
              </div>
              <p className="flex h-[40px] flex-row justify-start items-end">หน้าหลัก</p>
            </div>
          </a>
          {/* <a href="#sponsor" className="flex relative h-10 items-center min-w-fit justify-center duration-300 lg:underline-button">
            <div className="flex flex-row justify-start items-start space-x-5">
              <div className="flex justify-center items-center">
                <svg className="w-10 h-10 mt-1" viewBox="5 0 60 60" xmlns="http://www.w3.org/2000/svg" fill="#03474B">
                  <path d="M64,12.78v17s-3.63.71-4.38.81-3.08.85-4.78-.78C52.22,27.25,42.93,18,42.93,18a3.54,3.54,0,0,0-4.18-.21c-2.36,1.24-5.87,3.07-7.33,3.78a3.37,3.37,0,0,1-5.06-2.64,3.44,3.44,0,0,1,2.1-3c3.33-2,10.36-6,13.29-7.52,1.78-1,3.06-1,5.51,1C50.27,12,53,14.27,53,14.27a2.75,2.75,0,0,0,2.26.43C58.63,14,64,12.78,64,12.78ZM27,41.5a3,3,0,0,0-3.55-4.09,3.07,3.07,0,0,0-.64-3,3.13,3.13,0,0,0-3-.75,3.07,3.07,0,0,0-.65-3,3.38,3.38,0,0,0-4.72.13c-1.38,1.32-2.27,3.72-1,5.14s2.64.55,3.72.3c-.3,1.07-1.2,2.07-.09,3.47s2.64.55,3.72.3c-.3,1.07-1.16,2.16-.1,3.46s2.84.61,4,.25c-.45,1.15-1.41,2.39-.18,3.79s4.08.75,5.47-.58a3.32,3.32,0,0,0,.3-4.68A3.18,3.18,0,0,0,27,41.5Zm25.35-8.82L41.62,22a3.53,3.53,0,0,0-3.77-.68c-1.5.66-3.43,1.56-4.89,2.24a8.15,8.15,0,0,1-3.29,1.1,5.59,5.59,0,0,1-3-10.34C29,12.73,34.09,10,34.09,10a6.46,6.46,0,0,0-5-2C25.67,8,18.51,12.7,18.51,12.7a5.61,5.61,0,0,1-4.93.13L8,10.89v19.4s1.59.46,3,1a6.33,6.33,0,0,1,1.56-2.47,6.17,6.17,0,0,1,8.48-.06,5.4,5.4,0,0,1,1.34,2.37,5.49,5.49,0,0,1,2.29,1.4A5.4,5.4,0,0,1,26,34.94a5.47,5.47,0,0,1,3.71,4,5.38,5.38,0,0,1,2.39,1.43,5.65,5.65,0,0,1,1.48,4.89,0,0,0,0,1,0,0s.8.9,1.29,1.39a2.46,2.46,0,0,0,3.48-3.48s2,2.48,4.28,1c2-1.4,1.69-3.06.74-4a3.19,3.19,0,0,0,4.77.13,2.45,2.45,0,0,0,.13-3.3s1.33,1.81,4,.12c1.89-1.6,1-3.43,0-4.39Z" />
                </svg>
              </div>
              <div className="flex h-[40px] flex-row justify-start items-end">พาร์ทเนอร์</div>
            </div>
          </a> */}
          <a href="#service" className="flex relative h-fit items-center min-w-fit justify-center duration-300 lg:underline-button">
            <div className="flex flex-row justify-start items-start space-x-5">
              <div className="flex justify-center items-center h-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="-5 -5 60 60" fill="#03474B">
                  <path d="M 19 5 C 17.355469 5 16 6.355469 16 8 L 16 11 L 3 11 C 1.347656 11 0 12.347656 0 14 L 0 22 L 9 22 C 9 20.898438 9.898438 20 11 20 L 16 20 C 17.101563 20 18 20.898438 18 22 L 32 22 C 32 20.898438 32.898438 20 34 20 L 39 20 C 40.101563 20 41 20.898438 41 22 L 50 22 L 50 14 C 50 12.347656 48.652344 11 47 11 L 34 11 L 34 8 C 34 6.355469 32.644531 5 31 5 Z M 19 7 L 31 7 C 31.5625 7 32 7.4375 32 8 L 32 11 L 18 11 L 18 8 C 18 7.4375 18.4375 7 19 7 Z M 11 22 L 11 24 L 16 24 L 16 22 Z M 34 22 L 34 24 L 39 24 L 39 22 Z M 0 24 L 0 42 C 0 43.652344 1.347656 45 3 45 L 47 45 C 48.652344 45 50 43.652344 50 42 L 50 24 L 41 24 C 41 25.101563 40.101563 26 39 26 L 34 26 C 32.898438 26 32 25.101563 32 24 L 18 24 C 18 25.101563 17.101563 26 16 26 L 11 26 C 9.898438 26 9 25.101563 9 24 Z" />
                </svg>
              </div>
              <div className="flex h-[40px] flex-row justify-start items-end">บริการของเรา</div>
            </div>
          </a>
          <a href="#contact" className="flex relative h-fit items-center min-w-fit justify-center duration-300 lg:underline-button">
            <div className="flex flex-row justify-start items-start space-x-5">
              <div className="flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-10 h-10" fill="#03474B">
                  <path d="M21.384,17.752a2.108,2.108,0,0,1-.522,3.359,7.543,7.543,0,0,1-5.476.642C10.5,20.523,3.477,13.5,2.247,8.614a7.543,7.543,0,0,1,.642-5.476,2.108,2.108,0,0,1,3.359-.522L8.333,4.7a2.094,2.094,0,0,1,.445,2.328A3.877,3.877,0,0,1,8,8.2c-2.384,2.384,5.417,10.185,7.8,7.8a3.877,3.877,0,0,1,1.173-.781,2.092,2.092,0,0,1,2.328.445Z" />
                </svg>
              </div>
              <div className="flex h-10 flex-row justify-start items-end">ติดต่อเรา</div>
            </div>
          </a>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
