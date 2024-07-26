import "./App.css";
import navlogo from "/image/AccsLogo.png";
import thailogo from "/image/ThaiLogo.png";
import carouselBG from "/image/CarouselBG.png";
import carouselPropOne from "/image/CarouselPropOne.png";
import accsonlylogo from "/image/AccsOnlyLogo.png";
import accsonlytext from "/image/AccsOnlyText.png";
import linelogo from "/image/LineLogo.png";
import GRLogo from "/image/GRLogo.png";
import googleMapIcon from "/image/GoogleMapIcon.png";
import { useEffect, useState } from "react";
import clsx from "clsx";

function App() {
  const [HamNavOpen, setHamNavOpen] = useState(false);
  const HamNavOpenHandle = () => {
    setHamNavOpen(!HamNavOpen);
  };

  useEffect(() => {
    HamNavOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [HamNavOpen]);

  return (
    <div className="flex w-full min-h-screen h-fit flex-col relative ">
      {/* Navigation Bar */}
      <header className="flex flex-row sticky top-0 justify-between items-center w-full h-[79px] bg-white drop-shadow-lg text-base z-50">
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
        {/* Navbar Content */}
        <nav className="w-full hidden lg:flex justify-end mr-10 h-full items-center">
          {/* Home , Customer , Service , Contact */}
          <nav className="flex flex-row items-center mr-5 text-[18px] h-full space-x-10 min-w-fit duration-300 font-medium ">
            <a
              href="#home"
              className="flex relative h-full items-center min-w-fit justify-center duration-300 underline-button active"
            >
              หน้าหลัก
            </a>
            <a
              href="#sponsor"
              className="flex relative h-full items-center min-w-fit justify-center duration-300 underline-button"
            >
              ลูกค้าของเรา
            </a>
            <a
              href="#service"
              className="flex relative h-full items-center min-w-fit justify-center duration-300 underline-button"
            >
              บริการของเรา
            </a>
            <a
              href="#contact"
              className="flex relative h-full items-center min-w-fit justify-center duration-300 underline-button"
            >
              ติดต่อเรา
            </a>
          </nav>
        </nav>
        {/* Hamburger Bar */}
        <button
          onClick={HamNavOpenHandle}
          className="flex flex-col lg:hidden w-20 justify-center items-center h-full space-y-[5px] transition-transform "
        >
          <div
            className={clsx(
              "flex w-7 bg-[#757575] h-[3px] duration-300 rounded-xl",
              HamNavOpen
                ? "rotate-45 translate-y-2 "
                : "rotate-0  translate-y-0"
            )}
          />
          <div
            className={clsx(
              "flex w-7 bg-[#757575] h-[3px] rounded-xl",
              HamNavOpen ? "opacity-0 duration-200" : "opacity-100 duration-500"
            )}
          />
          <div
            className={clsx(
              "flex w-7 bg-[#757575] h-[3px] duration-300 rounded-xl",
              HamNavOpen
                ? "-rotate-45 -translate-y-2 "
                : "rotate-0  translate-y-0"
            )}
          />
        </button>
      </header>
      {/* body */}
      <div className="flex lg:h-fit flex-col overflow-hidden">
        <div
          className={clsx(
            "fixed flex top-[75px] flex-row justify-center lg:hidden left-0 z-40 bg-white w-full",
            HamNavOpen
              ? "ml-0 h-screen opacity-100 duration-300 "
              : "ml-96 opacity-10 h-screen duration-300 "
          )}
          onClick={HamNavOpenHandle}
        >
          <nav className="flex mt-[79px] flex-col space-y-8 items-start text-[24px] h-full min-w-fit duration-300 font-medium">
            {/* home */}
            <a
              href="#home"
              className="flex relative h-10 items-center min-w-fit justify-center duration-300 lg:underline-button"
            >
              <div className="flex flex-row justify-start items-end space-x-5">
                <div className="flex justify-center items-center h-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-9"
                    viewBox="0 0 26 26"
                  >
                    <path d="M 20 2.03125 C 19.449219 2.03125 19 2.480469 19 3.03125 L 19 7.8125 L 13.71875 2.53125 C 13.328125 2.140625 12.671875 2.140625 12.28125 2.53125 L 0.5625 14.28125 C 0.171875 14.671875 0.171875 15.296875 0.5625 15.6875 C 0.953125 16.078125 1.578125 16.078125 1.96875 15.6875 L 13 4.65625 L 24.0625 15.71875 C 24.257813 15.914063 24.523438 16.03125 24.78125 16.03125 C 25.039063 16.03125 25.273438 15.914063 25.46875 15.71875 C 25.859375 15.328125 25.859375 14.703125 25.46875 14.3125 L 22 10.84375 L 22 3.03125 C 22 2.480469 21.550781 2.03125 21 2.03125 Z M 13 6.5 L 2 17.5 L 2 23 C 2 24.65625 3.34375 26 5 26 L 21 26 C 22.65625 26 24 24.65625 24 23 L 24 17.5 Z M 11 16 L 15 16 C 15.550781 16 16 16.449219 16 17 L 16 23 C 16 23.550781 15.550781 24 15 24 L 11 24 C 10.449219 24 10 23.550781 10 23 L 10 17 C 10 16.449219 10.449219 16 11 16 Z"></path>
                  </svg>
                </div>
                <div className="flex h-full flex-row justify-start items-center">
                  หน้าหลัก
                </div>
              </div>
            </a>
            {/* partner */}
            <a
              href="#sponsor"
              className="flex relative h-10 items-center min-w-fit justify-center duration-300 lg:underline-button"
            >
              <div className="flex flex-row justify-start items-start space-x-5">
                <div className="flex justify-center items-center">
                  <svg
                    className="w-10 h-10 mt-1"
                    viewBox="5 0 60 60"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      class="cls-1"
                      d="M64,12.78v17s-3.63.71-4.38.81-3.08.85-4.78-.78C52.22,27.25,42.93,18,42.93,18a3.54,3.54,0,0,0-4.18-.21c-2.36,1.24-5.87,3.07-7.33,3.78a3.37,3.37,0,0,1-5.06-2.64,3.44,3.44,0,0,1,2.1-3c3.33-2,10.36-6,13.29-7.52,1.78-1,3.06-1,5.51,1C50.27,12,53,14.27,53,14.27a2.75,2.75,0,0,0,2.26.43C58.63,14,64,12.78,64,12.78ZM27,41.5a3,3,0,0,0-3.55-4.09,3.07,3.07,0,0,0-.64-3,3.13,3.13,0,0,0-3-.75,3.07,3.07,0,0,0-.65-3,3.38,3.38,0,0,0-4.72.13c-1.38,1.32-2.27,3.72-1,5.14s2.64.55,3.72.3c-.3,1.07-1.2,2.07-.09,3.47s2.64.55,3.72.3c-.3,1.07-1.16,2.16-.1,3.46s2.84.61,4,.25c-.45,1.15-1.41,2.39-.18,3.79s4.08.75,5.47-.58a3.32,3.32,0,0,0,.3-4.68A3.18,3.18,0,0,0,27,41.5Zm25.35-8.82L41.62,22a3.53,3.53,0,0,0-3.77-.68c-1.5.66-3.43,1.56-4.89,2.24a8.15,8.15,0,0,1-3.29,1.1,5.59,5.59,0,0,1-3-10.34C29,12.73,34.09,10,34.09,10a6.46,6.46,0,0,0-5-2C25.67,8,18.51,12.7,18.51,12.7a5.61,5.61,0,0,1-4.93.13L8,10.89v19.4s1.59.46,3,1a6.33,6.33,0,0,1,1.56-2.47,6.17,6.17,0,0,1,8.48-.06,5.4,5.4,0,0,1,1.34,2.37,5.49,5.49,0,0,1,2.29,1.4A5.4,5.4,0,0,1,26,34.94a5.47,5.47,0,0,1,3.71,4,5.38,5.38,0,0,1,2.39,1.43,5.65,5.65,0,0,1,1.48,4.89,0,0,0,0,1,0,0s.8.9,1.29,1.39a2.46,2.46,0,0,0,3.48-3.48s2,2.48,4.28,1c2-1.4,1.69-3.06.74-4a3.19,3.19,0,0,0,4.77.13,2.45,2.45,0,0,0,.13-3.3s1.33,1.81,4,.12c1.89-1.6,1-3.43,0-4.39Z"
                    />
                  </svg>
                </div>
                <div className="flex h-10 flex-row justify-start items-center">
                  พาร์ทเนอร์
                </div>
              </div>
            </a>
            <a
              href="#service"
              className="flex relative h-fit items-center min-w-fit justify-center duration-300 lg:underline-button"
            >
              <div className="flex flex-row justify-start items-start space-x-5">
                <div className="flex justify-center items-center h-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8"
                    viewBox="0 0 26 26"
                  >
                    <path d="M 20 2.03125 C 19.449219 2.03125 19 2.480469 19 3.03125 L 19 7.8125 L 13.71875 2.53125 C 13.328125 2.140625 12.671875 2.140625 12.28125 2.53125 L 0.5625 14.28125 C 0.171875 14.671875 0.171875 15.296875 0.5625 15.6875 C 0.953125 16.078125 1.578125 16.078125 1.96875 15.6875 L 13 4.65625 L 24.0625 15.71875 C 24.257813 15.914063 24.523438 16.03125 24.78125 16.03125 C 25.039063 16.03125 25.273438 15.914063 25.46875 15.71875 C 25.859375 15.328125 25.859375 14.703125 25.46875 14.3125 L 22 10.84375 L 22 3.03125 C 22 2.480469 21.550781 2.03125 21 2.03125 Z M 13 6.5 L 2 17.5 L 2 23 C 2 24.65625 3.34375 26 5 26 L 21 26 C 22.65625 26 24 24.65625 24 23 L 24 17.5 Z M 11 16 L 15 16 C 15.550781 16 16 16.449219 16 17 L 16 23 C 16 23.550781 15.550781 24 15 24 L 11 24 C 10.449219 24 10 23.550781 10 23 L 10 17 C 10 16.449219 10.449219 16 11 16 Z"></path>
                  </svg>
                </div>
                <div className="flex h-10 flex-row justify-start items-end">
                  บริการของเรา
                </div>
              </div>
            </a>
            <a
              href="#contact"
              className="flex relative h-fit items-center min-w-fit justify-center duration-300 lg:underline-button"
            >
              <div className="flex flex-row justify-start items-start space-x-5">
                <div className="flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8"
                    viewBox="0 0 26 26"
                  >
                    <path d="M 20 2.03125 C 19.449219 2.03125 19 2.480469 19 3.03125 L 19 7.8125 L 13.71875 2.53125 C 13.328125 2.140625 12.671875 2.140625 12.28125 2.53125 L 0.5625 14.28125 C 0.171875 14.671875 0.171875 15.296875 0.5625 15.6875 C 0.953125 16.078125 1.578125 16.078125 1.96875 15.6875 L 13 4.65625 L 24.0625 15.71875 C 24.257813 15.914063 24.523438 16.03125 24.78125 16.03125 C 25.039063 16.03125 25.273438 15.914063 25.46875 15.71875 C 25.859375 15.328125 25.859375 14.703125 25.46875 14.3125 L 22 10.84375 L 22 3.03125 C 22 2.480469 21.550781 2.03125 21 2.03125 Z M 13 6.5 L 2 17.5 L 2 23 C 2 24.65625 3.34375 26 5 26 L 21 26 C 22.65625 26 24 24.65625 24 23 L 24 17.5 Z M 11 16 L 15 16 C 15.550781 16 16 16.449219 16 17 L 16 23 C 16 23.550781 15.550781 24 15 24 L 11 24 C 10.449219 24 10 23.550781 10 23 L 10 17 C 10 16.449219 10.449219 16 11 16 Z"></path>
                  </svg>
                </div>
                <div className="flex h-10 flex-row justify-start items-end">
                  ติดต่อเรา
                </div>
              </div>
            </a>
          </nav>
        </div>
        {/* Carousel */}
        <section
          id="home"
          className="flex relative w-full h-fit min-h-[450px] overflow-hidden mx-auto"
        >
          <img
            src={carouselBG}
            alt="carouselbg"
            className="object-cover min-w-full"
          />
          <img
            src={carouselPropOne}
            alt="standingGirl"
            className="absolute -right-9 sm:right-0 lg:right-[20%] -bottom-11 sm:bottom-5 scale-75 sm:scale-110 sm:h-5/6 object-cover"
          />
        </section>
        {/* Sponsor */}
        <section
          id="sponsor"
          className="flex flex-col items-center pt-10 md:pt-0 justify-center bg-white h-[600px] w-full sm:pb-3 mx-auto"
        >
          {/* Our Sponsor Head Text */}
          <p className="flex text-primary-500 text-[30px] lg:text-[40px] font-semibold mb-4 select-none">
            ที่ปรึกษาที่รู้ใจ
          </p>
          {/* Our Sponsor Logo */}
          <img
            src={GRLogo}
            alt="gr-sponsor"
            className="object-cover min-h-[175px] min-w-[175px] max-h-[175px] max-w-[175px] mt-3 cursor-pointer"
          />
          {/* Our Sponsor Text */}
          <div className="w-full h-fit flex items-center justify-center flex-col">
            <p className="font-bold text-secondary-500 text-[32px] my-4 cursor-pointer">
              ยีราฟพารวย
            </p>
            <p className=" text-[20px] select-none  break-words text-center">
              เป็น
              <span className="text-primary-500 font-semibold">
                ที่ปรึกษาด้านบัญชี
              </span>
              ที่ยีราฟไว้ใจ
            </p>
            <p className=" text-[20px] select-none  break-words text-center mx-10">
              อีกทั้งยังเป็นผู้ช่วยที่ช่วยดูแลธุรกิจของยีราฟอีกด้วย
            </p>
          </div>
        </section>
        {/* Service */}
        <section
          id="service"
          className="flex flex-col min-h-[400px] h-fit lg:min-h-fit lg:h-[600px] w-full items-center justify-center relative mx-auto "
        >
          <div className="min-w-full bg-cover min-h-full bg-[url(./image/OurServiceBG.png)] bg-opacity-70 flex flex-col justify-center items-center mt-10 pt-20 pb-28 lg:pt-0 lg:pb-0">
            {/* Service Text */}
            <div className="flex text-primary-500 text-[30px] lg:text-[40px] font-semibold mb-5 lg:mb-10 z-10 select-none">
              บริการของเรา
            </div>
            {/* Service Choices */}
            <div className="grid grid-cols-2 gap-2 md:gap-5 lg:gap-0 lg:flex lg:flex-row lg:space-x-6 xl:space-x-12 lg:mb-10 items-center justify-center">
              {/* Service 1 */}
              <div className="flex w-[150px] h-[170px] lg:w-[230px] lg:h-[250px] bg-white flex-col z-10 cursor-pointer">
                {/* image 1 */}
                <img src="../image/FirstServiceLogo.png" alt="firstservice" />
                {/* text 1 */}
                <p className="flex select-none text-center font-normal text-primary-500 text-[14px] lg:text-[20px] justify-center items-center w-full h-full break-words">
                  รับทำบัญชีรายเดือน <br /> และยื่นภาษี
                </p>
              </div>
              {/* Service 2 */}
              <div className="flex w-[150px] h-[170px] lg:w-[230px] lg:h-[250px] bg-white flex-col z-10 cursor-pointer">
                {/* image 2 */}
                <img src="../image/SecondServiceLogo.png" alt="secondservice" />
                {/* text 2 */}
                <p className="flex select-none text-center font-normal text-primary-500 text-[14px] lg:text-[20px] justify-center items-center w-full h-full break-words">
                  บริการตรวจสอบ <br /> รับรองบัญชี
                </p>
              </div>
              {/* Service 3 */}
              <div className="flex w-[150px] h-[170px] lg:w-[230px] lg:h-[250px] bg-white flex-col z-10 cursor-pointer">
                {/* image 3 */}
                <img src="../image/ThirdServiceLogo.png" alt="thirdservice" />
                {/* text 3 */}
                <p className="flex select-none font-normal text-primary-500 text-[14px] lg:text-[20px] justify-center items-center w-full h-full break-word text-center">
                  จดทะเบียนบริษัทจำกัด <br /> / ห้างหุ้นส่วนฯ
                </p>
              </div>
              {/* Service 4 */}
              <div className="flex w-[150px] h-[170px] lg:w-[230px] lg:h-[250px] bg-white flex-col z-10 cursor-pointer">
                {/* image 4 */}
                <img src="../image/FourthServiceLogo.png" alt="fourthservice" />
                {/* text 4 */}
                <p className="flex select-none text-center font-normal text-primary-500 text-[14px] lg:text-[20px] justify-center items-center w-full h-full break-words">
                  บริการที่ปรึกษา
                  <br />
                  และวางแผนภาษี
                </p>
              </div>
            </div>
            {/* WhiteCover BG */}
            <div className="gray-overlay absolute md:inset-0 xl:inset-10 bg-[#FFFFFF]/90 opacity-50" />
          </div>
        </section>
        {/* Slogan */}
        <section
          id="contact"
          className="flex flex-col w-full h-[500px] items-center justify-center text-center md:mx-auto break-words px-5"
        >
          <p className="text-secondary-500 text-[25px] lg:text-[32px] font-medium mb-4 select-none">
            หมดกังวลทุกเรื่องบัญชีภาษี
          </p>
          <p className="font-semibold text-primary-500 text-[25px] lg:text-[32px] mb-6 select-none">
            เราพร้อมตอบทุกข้อสงสัย
            <br className="flex md:hidden" />
            และดูแลบัญชีภาษีให้คุณ
          </p>
          <a
            href="#form"
            className="flex bg-[#88AD9C] text-center text-white font-medium text-[21px] lg:text-[28px] px-10 py-4 rounded-sm"
          >
            ยินดีให้คำปรึกษา
          </a>
        </section>
        {/* Information & Form */}
        <section
          id="form"
          className="relative flex w-full flex-col items-center h-[1060px] overflow-hidden mx-auto"
        >
          <div className="absolute flex w-full h-full bg-[url(./image/FormBG.png)] brightness-90 z-0 bg-cover" />
          {/* Send Us Informations Text */}
          <div className="flex w-full text-center h-fit flex-col items-center mt-28 z-20">
            <p className="select-none text-primary-500 text-[40px] font-semibold break-all">
              ส่งรายละเอียดเกี่ยวกับคุณ
            </p>
            <p className="select-none break-words text-black-500 text-[20px] mt-2">
              <span className="text-[30px] font-medium text-primary-500">
                เรา
              </span>
              ยินดีที่จะให้บริการแก่คุณลูกค้าอย่างเต็มที่ <br />
              หากท่าน
              <span className="text-primary-500 font-medium text-[22px] mr-2">
                มีข้อสงสัยหรือมีความต้องการ
              </span>
              เรายินดีรับฟังและหารือเกี่ยวกับบริการ
              <br />
              ด้านบัญชี ภาษี และพร้อมที่จะเป็นที่ปรึกษาธุรกิจแก่คุณ
            </p>
          </div>
          {/* InformationTab & Form */}
          <div className="flex flex-row w-full h-full mt-14 z-20 mx-auto">
            {/* Informations */}
            <div className="flex flex-col items-start ml-20 w-full h-full">
              {/* location */}
              <div className="flex flex-row bg-white w-[30%] rounded-r-full h-[165px] items-center justify-start opacity-85">
                {/* Google Map Icon */}
                <img
                  src={googleMapIcon}
                  alt="map"
                  className="object-cover min-w-[80px] min-h-[80px] max-w-[80px] max-h-[80px]"
                />
                {/* Company Location */}
                <div></div>
              </div>
            </div>
          </div>
          <div className="gray-overlay absolute inset-20 -top-20 h-full bg-[#FFFFFF] opacity-50 z-10 " />
        </section>
      </div>
      {/* footer */}
      <section className="flex relative h-[550px] bg-white flex-col ">
        <div className="flex w-full h-full flex-row">
          <div className="flex flex-col items-center w-6/12 justify-center">
            <img
              src={accsonlylogo}
              alt="accs-logo"
              className="cursor-pointer"
            />
            <img
              src={accsonlytext}
              alt="accs-logo"
              className="cursor-pointer"
            />
            <div className="flex flex-col items-center space-y-1 mt-1 font-medium text-primary-500 text-[20px] select-none">
              <p>สำนักงานบัญชียุคใหม่</p>
              <p>ยินดีให้บริการด้านบัญชีและภาษีครบวงจร</p>
              <p>เราพร้อมจะเป็นที่ปรึกษาให้ธุรกิจของคุณ</p>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <div className="flex flex-row w-full">
              <button></button>
              <button></button>
              <button></button>
              <button></button>
            </div>
          </div>
        </div>
        <div className="flex w-full h-[75px] flex-row justify-center items-center text-white bg-black-500">
          <p className="select-none">
            © 2024 ACCLUSIVE Co., Ltd. All Rights Reserved
          </p>
        </div>
        <button className="fixed bottom-3 right-3 z-50 flex justify-end bg-[#F8F8F8]/95 p-2 rounded-xl h-fit w-fit select-none">
          <div className="flex w-[45px] h-[45px] items-center justify-center flex-row object-cover">
            <img
              src={linelogo}
              alt="line"
              className="min-w-[45px] min-h-[45px] max-w-[45px] max-h-[45px] object-cover"
            />
          </div>
        </button>
      </section>
    </div>
  );
}

export default App;
