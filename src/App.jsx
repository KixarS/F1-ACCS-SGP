import "./App.css";
import navlogo from "/image/AccsLogo.png";
import carouselBG from "/image/CarouselBG.png";
import recommendBG from "/image/RecommendBG.jpg";
import carouselPropOne from "/image/CarouselPropOne.png";
import accsonlylogo from "/image/AccsOnlyLogo.png";
import accsonlytext from "/image/AccsOnlyText.png";
import ourservice from "/image/OurServiceBG.png";
import linelogo from "/image/LineLogo.png";
import example from "/image/Example.jpg";
import example2 from "/image/Example2.jpg";
import example3 from "/image/Example3.jpg";
import example4 from "/image/Example4.jpg";
import googleMapIcon from "/image/GoogleMapIcon.png";
import emailIcon from "/image/EmailIcon.png";
import facebookIcon from "/image/FacebookLogo.png";
import lineIcon from "/image/LineIcon.png";
import XIcon from "/image/XLogo.png";
import FormBG from "/image/FormBG.png";
import PictureLine from "/image/PictureLine.png";
import Facebook from "/image/Facebook.png";
import FollowInfomationIcon from "/image/FollowInfomationIcon.png";
import { useEffect, useState } from "react";
import clsx from "clsx";
import SharePopup from "./components/SharePopup";
import Loading from "./components/Loading";
import Swal from "sweetalert2";
import SponsorGrid from "./components/SponsorGrid";
import "flowbite";

function App() {
  const [HamNavOpen, setHamNavOpen] = useState(false);
  const HamNavOpenHandle = () => {
    setHamNavOpen(!HamNavOpen);
  };

  const [sharePopup, setSharePopup] = useState(false);

  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const bottomPosition = document.documentElement.scrollHeight;

      if (scrollPosition >= bottomPosition) {
        setIsAtBottom(true);
      } else {
        setIsAtBottom(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    HamNavOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [HamNavOpen]);

  const handleEmailClick = () => {
    const email = "Info.acclusive@gmail.com"; // Replace with the desired email address
    const subject = "Your Subject Here";
    const body = "Your email body here.";
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;

    window.open(gmailUrl, "_blank");
  };

  const [showLoad, setShowLoad] = useState(false);

  const formSubmitHandle = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const now = new Date();
    const datetimeString = now.toLocaleString("th-TH", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });

    formData.append("Date", datetimeString);

    setShowLoad(true);

    fetch(
      "https://script.google.com/macros/s/AKfycbyLty2GqtbGv3eTISvxgsp5Xxvn0YaSRmnoCWzH1Kl9fQB4hzOTbWDfdEkjuxvQvfjA/exec",
      {
        method: "POST",
        body: formData,
      }
    ).then((res) => {
      if (res.ok) {
        setShowLoad(false);
        Swal.fire({
          title: "แจ้งเตือน",
          text: "ส่งฟอร์มสำเร็จ",
          icon: "success",
          confirmButtonText: "ตกลง",
        });
      } else {
        Swal.fire({
          title: "แจ้งเตือน",
          text: "ส่งฟอร์มไม่สำเร็จ",
          icon: "error",
          confirmButtonText: "ตกลง",
        });
      }
    });
  };

  return (
    <div className="flex w-full min-h-screen h-fit flex-col relative">
      {/* Loading */}
      <Loading show={showLoad} text="กำลังส่งฟอร์ม" />

      {/* Navigation Bar */}
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
        {/* Navbar Content */}
        <nav className="w-full hidden lg:flex justify-end mr-10 h-full items-center">
          {/* Home , Customer , Service , Contact */}
          <nav className="flex flex-row items-center mr-5 text-[18px] h-full space-x-10 min-w-fit duration-300 font-medium ">
            <a
              href="#"
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
              "flex w-7 bg-black-300 h-[3px] duration-300 rounded-xl",
              HamNavOpen
                ? "rotate-45 translate-y-2 "
                : "rotate-0  translate-y-0"
            )}
          />
          <div
            className={clsx(
              "flex w-7 bg-black-300 h-[3px] rounded-xl",
              HamNavOpen ? "opacity-0 duration-200" : "opacity-100 duration-500"
            )}
          />
          <div
            className={clsx(
              "flex w-7 bg-black-300 h-[3px] duration-300 rounded-xl",
              HamNavOpen
                ? "-rotate-45 -translate-y-2 "
                : "rotate-0  translate-y-0"
            )}
          />
        </button>
      </header>
      {/* body */}
      <div className="flex lg:h-full flex-col overflow-hidden">
        {/* Hamburger content */}
        <div
          className={clsx(
            "fixed flex flex-row justify-center lg:hidden left-0 z-40 bg-white w-screen ease-in-out",
            HamNavOpen
              ? "ml-0 h-screen opacity-100 duration-300 "
              : "ml-[100%] opacity-100 h-screen duration-300 "
          )}
          onClick={HamNavOpenHandle}
        >
          <nav className=" flex flex-col items-start justify-end text-[24px] max-h-screen space-y-8 h-1/2 min-w-fit duration-300 font-medium mt-16 text-[#75b498]">
            <a
              href="#"
              className="flex flex-col relative h-10 items-center min-w-fit justify-center duration-300 lg:underline-button"
            >
              <div className="flex flex-row justify-center h-full items-center space-x-5">
                <div className="flex justify-center items-center h-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-9"
                    viewBox="0 0 26 26"
                    fill="#03474B"
                  >
                    <path d="M 20 2.03125 C 19.449219 2.03125 19 2.480469 19 3.03125 L 19 7.8125 L 13.71875 2.53125 C 13.328125 2.140625 12.671875 2.140625 12.28125 2.53125 L 0.5625 14.28125 C 0.171875 14.671875 0.171875 15.296875 0.5625 15.6875 C 0.953125 16.078125 1.578125 16.078125 1.96875 15.6875 L 13 4.65625 L 24.0625 15.71875 C 24.257813 15.914063 24.523438 16.03125 24.78125 16.03125 C 25.039063 16.03125 25.273438 15.914063 25.46875 15.71875 C 25.859375 15.328125 25.859375 14.703125 25.46875 14.3125 L 22 10.84375 L 22 3.03125 C 22 2.480469 21.550781 2.03125 21 2.03125 Z M 13 6.5 L 2 17.5 L 2 23 C 2 24.65625 3.34375 26 5 26 L 21 26 C 22.65625 26 24 24.65625 24 23 L 24 17.5 Z M 11 16 L 15 16 C 15.550781 16 16 16.449219 16 17 L 16 23 C 16 23.550781 15.550781 24 15 24 L 11 24 C 10.449219 24 10 23.550781 10 23 L 10 17 C 10 16.449219 10.449219 16 11 16 Z"></path>
                  </svg>
                </div>
                <p className="flex h-[40px] flex-row justify-start items-end">
                  หน้าหลัก
                </p>
              </div>
            </a>
            <a
              href="#sponsor"
              className="flex relative h-10 items-center min-w-fit justify-center duration-300 lg:underline-button"
            >
              <div className="flex flex-row justify-start items-start space-x-5">
                <div className="flex justify-center items-center">
                  <svg
                    className="w-10 h-10 mt-1"
                    viewBox="5 0 60 60"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#03474B"
                  >
                    <path d="M64,12.78v17s-3.63.71-4.38.81-3.08.85-4.78-.78C52.22,27.25,42.93,18,42.93,18a3.54,3.54,0,0,0-4.18-.21c-2.36,1.24-5.87,3.07-7.33,3.78a3.37,3.37,0,0,1-5.06-2.64,3.44,3.44,0,0,1,2.1-3c3.33-2,10.36-6,13.29-7.52,1.78-1,3.06-1,5.51,1C50.27,12,53,14.27,53,14.27a2.75,2.75,0,0,0,2.26.43C58.63,14,64,12.78,64,12.78ZM27,41.5a3,3,0,0,0-3.55-4.09,3.07,3.07,0,0,0-.64-3,3.13,3.13,0,0,0-3-.75,3.07,3.07,0,0,0-.65-3,3.38,3.38,0,0,0-4.72.13c-1.38,1.32-2.27,3.72-1,5.14s2.64.55,3.72.3c-.3,1.07-1.2,2.07-.09,3.47s2.64.55,3.72.3c-.3,1.07-1.16,2.16-.1,3.46s2.84.61,4,.25c-.45,1.15-1.41,2.39-.18,3.79s4.08.75,5.47-.58a3.32,3.32,0,0,0,.3-4.68A3.18,3.18,0,0,0,27,41.5Zm25.35-8.82L41.62,22a3.53,3.53,0,0,0-3.77-.68c-1.5.66-3.43,1.56-4.89,2.24a8.15,8.15,0,0,1-3.29,1.1,5.59,5.59,0,0,1-3-10.34C29,12.73,34.09,10,34.09,10a6.46,6.46,0,0,0-5-2C25.67,8,18.51,12.7,18.51,12.7a5.61,5.61,0,0,1-4.93.13L8,10.89v19.4s1.59.46,3,1a6.33,6.33,0,0,1,1.56-2.47,6.17,6.17,0,0,1,8.48-.06,5.4,5.4,0,0,1,1.34,2.37,5.49,5.49,0,0,1,2.29,1.4A5.4,5.4,0,0,1,26,34.94a5.47,5.47,0,0,1,3.71,4,5.38,5.38,0,0,1,2.39,1.43,5.65,5.65,0,0,1,1.48,4.89,0,0,0,0,1,0,0s.8.9,1.29,1.39a2.46,2.46,0,0,0,3.48-3.48s2,2.48,4.28,1c2-1.4,1.69-3.06.74-4a3.19,3.19,0,0,0,4.77.13,2.45,2.45,0,0,0,.13-3.3s1.33,1.81,4,.12c1.89-1.6,1-3.43,0-4.39Z" />
                  </svg>
                </div>
                <div className="flex h-[40px] flex-row justify-start items-end">
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
                    className="w-10 h-10"
                    viewBox="-5 -5 60 60"
                    fill="#03474B"
                  >
                    <path d="M 19 5 C 17.355469 5 16 6.355469 16 8 L 16 11 L 3 11 C 1.347656 11 0 12.347656 0 14 L 0 22 L 9 22 C 9 20.898438 9.898438 20 11 20 L 16 20 C 17.101563 20 18 20.898438 18 22 L 32 22 C 32 20.898438 32.898438 20 34 20 L 39 20 C 40.101563 20 41 20.898438 41 22 L 50 22 L 50 14 C 50 12.347656 48.652344 11 47 11 L 34 11 L 34 8 C 34 6.355469 32.644531 5 31 5 Z M 19 7 L 31 7 C 31.5625 7 32 7.4375 32 8 L 32 11 L 18 11 L 18 8 C 18 7.4375 18.4375 7 19 7 Z M 11 22 L 11 24 L 16 24 L 16 22 Z M 34 22 L 34 24 L 39 24 L 39 22 Z M 0 24 L 0 42 C 0 43.652344 1.347656 45 3 45 L 47 45 C 48.652344 45 50 43.652344 50 42 L 50 24 L 41 24 C 41 25.101563 40.101563 26 39 26 L 34 26 C 32.898438 26 32 25.101563 32 24 L 18 24 C 18 25.101563 17.101563 26 16 26 L 11 26 C 9.898438 26 9 25.101563 9 24 Z"></path>
                  </svg>
                </div>
                <div className="flex h-[40px] flex-row justify-start items-end">
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
                    viewBox="0 0 24 24"
                    className="w-10 h-10"
                    fill="#03474B"
                  >
                    <path d="M21.384,17.752a2.108,2.108,0,0,1-.522,3.359,7.543,7.543,0,0,1-5.476.642C10.5,20.523,3.477,13.5,2.247,8.614a7.543,7.543,0,0,1,.642-5.476,2.108,2.108,0,0,1,3.359-.522L8.333,4.7a2.094,2.094,0,0,1,.445,2.328A3.877,3.877,0,0,1,8,8.2c-2.384,2.384,5.417,10.185,7.8,7.8a3.877,3.877,0,0,1,1.173-.781,2.092,2.092,0,0,1,2.328.445Z" />
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
          className="flex flex-row justify-start relative w-full min-h-[450px] h-[500px] overflow-hidden mx-auto"
        >
          {/* Content */}
          <div className="flex w-full h-full justify-center flex-row z-10">
            <div className="flex flex-col md:flex-row h-full w-fit lg:items-center ">
              {/* logo */}
              <div className="sm:min-w-[170px] sm:min-h-[140px] sm:max-w-[170px] sm:max-h-[170px] lg:min-w-[340px] lg:min-h-[280px] lg:max-w-[340px] lg:max-h-[280px] mb-12 lg:flex hidden">
                <img
                  src={navlogo}
                  alt="accsonlylogo"
                  className="object-cover w-full h-full"
                />
              </div>
              {/* Text */}
              <div className="flex w-full h-full ml-4 lg:ml-0 mt-24 lg:mt-52 flex-col justify-start select-none mx-auto z-20">
                <p className="text-primary-500 font-semibold text-[30px] sm:text-[41px]">
                  บริการด้านบัญชีภาษี <br /> ดูแลธุรกิจครบวงจร
                </p>
                <p className="text-black-300 ml-1 text-[16px] sm:text-[20px] font-medium text-start mt-3">
                  ถ้าหากคุณเป็นผู้ประกอบการที่...
                </p>
                <div className="flex flex-col lg:ml-10 mt-2 space-y-1 w-full">
                  <div className="flex flex-row space-x-3 items-center">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.38999 8.9435C3.57665 8.13016 2.25749 8.13016 1.44332 8.9435C0.629154 9.75683 0.629987 11.076 1.44332 11.8902L5.31415 15.761C6.52165 16.9685 8.47832 16.9685 9.68582 15.761L10.4467 15.0002L4.38999 8.9435Z"
                        fill="#75b498"
                      />
                      <path
                        d="M18.5567 3.9435C17.7433 3.13016 16.4242 3.13016 15.61 3.9435L7.5 12.0535L10.4467 15.0002L18.5567 6.89016C19.37 6.076 19.37 4.75683 18.5567 3.9435Z"
                        fill="#75b498"
                      />
                    </svg>
                    <p className="text-black-300 text-[14px] lg:text-[18px] text-start">
                      ใส่ใจเรื่อง
                      <span className="text-secondary-600">ภาษี</span>และ
                      <span className="text-secondary-600">ความถูกต้อง</span>
                    </p>
                  </div>
                  <div className="flex flex-row space-x-3 items-center">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.38999 8.9435C3.57665 8.13016 2.25749 8.13016 1.44332 8.9435C0.629154 9.75683 0.629987 11.076 1.44332 11.8902L5.31415 15.761C6.52165 16.9685 8.47832 16.9685 9.68582 15.761L10.4467 15.0002L4.38999 8.9435Z"
                        fill="#75b498"
                      />
                      <path
                        d="M18.5567 3.9435C17.7433 3.13016 16.4242 3.13016 15.61 3.9435L7.5 12.0535L10.4467 15.0002L18.5567 6.89016C19.37 6.076 19.37 4.75683 18.5567 3.9435Z"
                        fill="#75b498"
                      />
                    </svg>
                    <p className="text-black-300 text-[14px] lg:text-[18px] text-start whitespace-nowrap">
                      ให้ความสำคัญกับ
                      <span className="text-secondary-600">คุณภาพของงาน</span>
                      มากกว่าราคาที่ถูก
                    </p>
                  </div>
                  <div className="flex flex-row space-x-3 items-center">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.38999 8.9435C3.57665 8.13016 2.25749 8.13016 1.44332 8.9435C0.629154 9.75683 0.629987 11.076 1.44332 11.8902L5.31415 15.761C6.52165 16.9685 8.47832 16.9685 9.68582 15.761L10.4467 15.0002L4.38999 8.9435Z"
                        fill="#75b498"
                      />
                      <path
                        d="M18.5567 3.9435C17.7433 3.13016 16.4242 3.13016 15.61 3.9435L7.5 12.0535L10.4467 15.0002L18.5567 6.89016C19.37 6.076 19.37 4.75683 18.5567 3.9435Z"
                        fill="#75b498"
                      />
                    </svg>
                    <p className="text-black-300 text-[14px] lg:text-[18px] text-start whitespace-nowrap">
                      อยากได้ที่
                      <span className="text-secondary-600">
                        ปรึกษาที่รับฟัง
                      </span>
                      และ
                      <span className="text-secondary-600">
                        พร้อมช่วยแก้ปัญหา
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex w-full justify-start lg:justify-center h-fit mt-5">
                  <a
                    href="#sponsor"
                    className="duration-300 hover:scale-105 ease-in-out flex w-[100px] h-[36px] lg:w-[130px] lg:h-[45px] bg-secondary-500 text-white justify-center items-center rounded-sm"
                  >
                    <p className="font-light text-[14px] lg:text-[18px]">
                      เกี่ยวกับเรา
                    </p>
                  </a>
                </div>
              </div>
              {/* woman prop */}
              <div className="relative flex flex-col h-full w-fit justify-end ">
                <img
                  src={carouselPropOne}
                  alt="standingGirl"
                  className="object-cover max-w-[140px] sm:min-w-[150px] sm:min-h-[250px] lg:min-w-[300px] lg:min-h-[400px] absolute bottom-0 left-52 sm:left-80 md:-right-32 lg:-right-0 md:left-0 lg:relative"
                />
              </div>
            </div>
          </div>
          {/* bg */}
          <img
            src={carouselBG}
            alt="carouselbg"
            className="object-cover min-w-full min-h-full absolute right-0 bottom-0 brightness-95"
          />
          <div className="gray-overlay absolute inset-0 h-full bg-[#FFFFFF] opacity-50 z-0 " />
        </section>
        {/* Sponsor */}
        <section
          id="sponsor"
          className="flex flex-col items-center pt-28 justify-center h-fit pb-10 w-full mx-auto relative"
        >
          {/* Our Sponsor Head Text */}
          <p className="flex text-primary-500 text-[30px] lg:text-[40px] font-semibold mb-4 select-none text-center break-words">
            ส่วนหนึ่งของบริษัทที่วางใจใช้บริการ Acclusive
          </p>
          {/* <SponsorSlide /> */}
          <SponsorGrid />
        </section>
        <section className="flex w-full h-[750px] xl:h-[750px] flex-row ">
          <div className=" w-full flex relative flex-col xl:flex-row items-center justify-center overflow-hidden">
            <div className="flex flex-col">
              <div className="flex z-10 h-fit flex-col w-fit md:w-[500px] text-[30px] lg:text-[30px] xl:text-[40px] select-none">
                <p className="w-full text-center xl:justify-start text-secondary-500 font-medium brightness-110">
                  เคยเจอปัญหาแบบนี้ไหม?
                </p>
                <p className="w-full justify-center xl:justify-end flex font-semibold text-primary-500">
                  แค่เลือกผิดชีวิตเปลี่ยน..
                </p>
              </div>
              <div className="flex mt-10">
                <div
                  id="indicators-carousel"
                  className="relative w-full"
                  data-carousel="static"
                >
                  <div className="relative w-full h-52 overflow-hidden rounded-lg">
                    <div
                      className="hidden duration-700 ease-in-out"
                      data-carousel-item="active"
                    >
                      <img
                        src={example}
                        className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        alt="..."
                      />
                    </div>
                    <div
                      className="hidden duration-700 ease-in-out"
                      data-carousel-item
                    >
                      <img
                        src={example2}
                        className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        alt="..."
                      />
                    </div>
                    <div
                      className="hidden duration-700 ease-in-out"
                      data-carousel-item
                    >
                      <img
                        src={example3}
                        className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        alt="..."
                      />
                    </div>
                    <div
                      className="hidden duration-700 ease-in-out"
                      data-carousel-item
                    >
                      <img
                        src={example4}
                        className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 scale-90"
                        alt="..."
                      />
                    </div>
                  </div>
                  {/* bullet Button */}
                  <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse -bottom-10 left-1/2">
                    <button
                      type="button"
                      className="w-3 h-3 rounded-full"
                      aria-current="true"
                      aria-label="Slide 1"
                      data-carousel-slide-to="0"
                    ></button>
                    <button
                      type="button"
                      className="w-3 h-3 rounded-full"
                      aria-current="false"
                      aria-label="Slide 2"
                      data-carousel-slide-to="1"
                    ></button>
                    <button
                      type="button"
                      className="w-3 h-3 rounded-full"
                      aria-current="false"
                      aria-label="Slide 3"
                      data-carousel-slide-to="2"
                    ></button>
                    <button
                      type="button"
                      className="w-3 h-3 rounded-full"
                      aria-current="false"
                      aria-label="Slide 4"
                      data-carousel-slide-to="3"
                    ></button>
                  </div>
                  <button
                    type="button"
                    className="absolute top-0 -start-16 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    data-carousel-prev
                  >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                      <svg
                        className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 1 1 5l4 4"
                        />
                      </svg>
                      <span className="sr-only">Previous</span>
                    </span>
                  </button>
                  <button
                    type="button"
                    className="absolute top-0 -end-16 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    data-carousel-next
                  >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                      <svg
                        className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 9 4-4-4-4"
                        />
                      </svg>
                      <span className="sr-only">Next</span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
            {/* Text */}
            <div className="flex flex-col z-10 xl:ml-24 h-fit justify-end text-black-500 md:text-[20px] md:w-[670px] space-y-10 mt-16">
              <p className="break-words select-none flex flex-row space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#60947d"
                  className="w-7 h-7 mt-1"
                >
                  <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 0 0-1.032-.211 50.89 50.89 0 0 0-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 0 0 2.433 3.984L7.28 21.53A.75.75 0 0 1 6 21v-4.03a48.527 48.527 0 0 1-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979Z" />
                  <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 0 0 1.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0 0 15.75 7.5Z" />
                </svg>
                <p>
                  หลายคนที่เคย
                  <span className="text-secondary-500">
                    เจอประสบการณ์เลวร้าย
                  </span>
                  กับสำนักงานบัญชีที่ขาดความรับผิดชอบ
                  <br />
                  อาจทำให้คุณต้องเสียค่าปรับภาษีเป็นจำนวนมาก
                </p>
              </p>
              <p className="break-words select-none flex flex-row space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#60947d"
                  className="w-7 h-7 mt-1"
                >
                  <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 0 0-1.032-.211 50.89 50.89 0 0 0-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 0 0 2.433 3.984L7.28 21.53A.75.75 0 0 1 6 21v-4.03a48.527 48.527 0 0 1-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979Z" />
                  <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 0 0 1.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0 0 15.75 7.5Z" />
                </svg>
                <p>
                  อย่าเสี่ยงกับความเสียหายที่แก้ไขไม่ได้
                  ให้เราช่วยดูแลบัญชีของคุณ
                  <br />
                  ด้วยทีมงานมืออาชีพที่คุณวางใจได้
                  <span className="text-secondary-500">
                    {" "}
                    ติดต่อเราวันนี้เพื่อรับคำปรึกษาเบื้องต้นฟรี!
                  </span>
                </p>
              </p>
            </div>
            {/* Background */}
            <img
              src={recommendBG}
              alt="recommendBG"
              className="object-cover w-full h-full absolute right-0 bottom-0 brightness-75 blur-[2px]"
            />

            <div className="gray-overlay absolute inset-0 xl:inset-10 bg-[#FFFFFF] opacity-90 " />
          </div>
        </section>
        {/* Service */}
        <section
          id="service"
          className="flex flex-col min-h-[400px] h-fit lg:min-h-fit lg:h-[600px] w-full items-center justify-center relative mx-auto "
        >
          <div className="min-w-full bg-cover min-h-full flex flex-col justify-center items-center mt-10 lg:mt-0 pt-20 pb-28 lg:pt-0 lg:pb-0">
            {/* Service Text */}
            <div className="flex text-primary-500 text-[30px] lg:text-[40px] font-semibold mb-5 lg:mb-10 z-10 select-none">
              บริการของเรา
            </div>
            {/* Service Choices */}
            <div className="grid grid-cols-2 gap-2 md:gap-5 lg:gap-0 lg:flex lg:flex-row lg:space-x-6 xl:space-x-12 lg:mb-10 items-center justify-center">
              {/* Service 1 */}
              <div className="scale-100 hover:scale-110 ease-in-out duration-[0.2s] flex w-[150px] h-[170px] lg:w-[230px] lg:h-[250px] bg-white flex-col z-10 cursor-pointer">
                {/* image 1 */}
                <img src="../image/FirstServiceLogo.png" alt="firstservice" />
                {/* text 1 */}
                <p className="flex select-none text-center font-normal text-primary-500 text-[14px] lg:text-[20px] justify-center items-center w-full h-full break-words">
                  รับทำบัญชีรายเดือน <br /> และยื่นภาษี
                </p>
              </div>
              {/* Service 2 */}
              <div className="scale-100 hover:scale-110 ease-in-out duration-[0.2s] flex w-[150px] h-[170px] lg:w-[230px] lg:h-[250px] bg-white flex-col z-10 cursor-pointer">
                {/* image 2 */}
                <img src="../image/SecondServiceLogo.png" alt="secondservice" />
                {/* text 2 */}
                <p className="flex select-none text-center font-normal text-primary-500 text-[14px] lg:text-[20px] justify-center items-center w-full h-full break-words">
                  บริการตรวจสอบ <br /> รับรองบัญชี
                </p>
              </div>
              {/* Service 3 */}
              <div className="scale-100 hover:scale-110 ease-in-out duration-[0.2s] flex w-[150px] h-[170px] lg:w-[230px] lg:h-[250px] bg-white flex-col z-10 cursor-pointer">
                {/* image 3 */}
                <img src="../image/ThirdServiceLogo.png" alt="thirdservice" />
                {/* text 3 */}
                <p className="flex select-none font-normal text-primary-500 text-[14px] lg:text-[20px] justify-center items-center w-full h-full break-word text-center">
                  จดทะเบียนบริษัทจำกัด <br /> / ห้างหุ้นส่วนฯ
                </p>
              </div>
              {/* Service 4 */}
              <div className="scale-100 hover:scale-110 ease-in-out duration-[0.2s] flex w-[150px] h-[170px] lg:w-[230px] lg:h-[250px] bg-white flex-col z-10 cursor-pointer">
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
            <img
              src={ourservice}
              alt="carouselbg"
              className="object-cover w-full h-full absolute right-0 bottom-0 brightness-95"
            />
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
            className="flex bg-[#88AD9C] text-center text-white font-medium text-[21px] lg:text-[28px] px-10 py-4 rounded-sm duration-300 ease-in-out hover:scale-105"
          >
            ยินดีให้คำปรึกษา
          </a>
        </section>
        {/* Information & Form */}
        <section
          id="form"
          className="relative flex w-full flex-col items-center h-[1060px] overflow-hidden mx-auto"
        >
          <img
            src={FormBG}
            alt="form"
            className="object-cover w-full h-full absolute right-0 bottom-0 brightness-95"
          />
          {/* Send Us Informations Text */}
          <div className="flex w-full text-center h-fit flex-col items-center mt-28 z-20">
            <p className="select-none text-primary-500 md:text-[40px] text-2xl font-semibold break-all">
              ส่งรายละเอียดเกี่ยวกับคุณ
            </p>
            <p className="select-none break-words text-black-500 md:text-[20px] mt-2">
              <span className="md:text-[30px] text-[20px] font-medium text-primary-500">
                เรา
              </span>
              ยินดีที่จะให้บริการแก่คุณลูกค้าอย่างเต็มที่ <br />
              หากท่าน
              <span className="text-primary-500 font-medium md:text-[22px] mr-2">
                มีข้อสงสัยหรือมีความต้องการ
              </span>
              เรายินดีรับฟังและหารือเกี่ยวกับบริการ
              <br />
              ด้านบัญชี ภาษี และพร้อมที่จะเป็นที่ปรึกษาธุรกิจแก่คุณ
            </p>
          </div>
          {/* InformationTab & Form */}
          <div className="flex flex-row w-full h-fit mt-14 z-20 justify-center px-4">
            {/* Informations */}
            <div className="xl:flex hidden flex-col items-start w-full h-full space-y-8 pl-16">
              {/* location */}
              <div className="flex flex-row gap-5 bg-white h-36 xl:pl-10 pl-5 w-[70%] rounded-r-full items-center justify-start opacity-85">
                {/* Google Map Icon */}
                <img
                  src={googleMapIcon}
                  alt="map"
                  className="object-cover min-w-[80px] min-h-[80px] max-w-[80px] max-h-[80px]"
                />
                {/* Company Location */}
                <div>
                  <p className="text-xl font-bold text-primary-500">
                    ที่ตั้งสำนักงาน
                  </p>
                  <div>
                    <p>บริษัท แอคคลูซีฟ จำกัด</p>
                    <p>754/87 ซอย สุขุมวิท 101 แขวงบางจาก</p>
                    <p>เขตพระโขนง กรุงเทพมหานคร 10260</p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div
                onClick={() => {
                  handleEmailClick();
                }}
                className="flex cursor-pointer flex-row gap-5 bg-white  duration-300 ease-in-out from-white to-secondary-300 h-36 pl-5 xl:pl-10 w-[70%] rounded-r-full items-center justify-start opacity-85"
              >
                {/* Email Icon */}
                <img
                  src={emailIcon}
                  alt="map"
                  className="object-cover min-w-[80px] min-h-[80px] max-w-[80px] max-h-[80px]"
                />
                {/* Email contact */}
                <div>
                  <p className="text-xl font-bold text-primary-500">
                    ติดต่อทางอีเมล
                  </p>
                  <p>Info.acclusive@gmail.com</p>
                </div>
              </div>

              {/* Follow Infomation */}
              <div className="flex flex-row gap-5 bg-white h-36 pl-5 xl:pl-10 w-[70%] rounded-r-full items-center justify-start opacity-85">
                {/* Follow Infomation Icon */}
                <img
                  src={FollowInfomationIcon}
                  alt="map"
                  className="object-cover min-w-[80px] min-h-[80px] max-w-[80px] max-h-[80px]"
                />
                {/* Follow Infomation Content */}
                <div>
                  <p className="text-xl font-bold text-primary-500">
                    ติดตามข้อมูล
                  </p>
                  <p>รับข่าวสารสดใหม่เพียงติดตามเราช่องทางต่างๆ</p>
                  <div className="flex space-x-5 mt-3">
                    <a
                      href="https://www.facebook.com/profile.php?id=100078187762237"
                      className="flex cursor-pointer pl-2 pr-4 py-1 bg-[#295396] text-white items-center gap-2 rounded-full"
                    >
                      <img
                        className="w-6 h-6"
                        src={facebookIcon}
                        alt="facebook logo"
                      />
                      <p className="text-xs">Facebook</p>
                    </a>
                    <a
                      href="https://line.me/R/ti/p/@608izthw"
                      className="flex cursor-pointer pl-2 pr-4 bg-[#00B900] text-white items-center gap-2 rounded-full"
                    >
                      <img className="w-6 h-6" src={lineIcon} alt="line logo" />
                      <p className="text-xs">LINE</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="relative text-center p-8 bg-white h-fit rounded-2xl 2xl:mr-80 xl:mr-48 mr-0 w-[50rem]">
              <p className="text-secondary-500 text-2xl">ติดต่อเรา</p>
              <form
                onSubmit={formSubmitHandle}
                className="flex flex-col space-y-5 mt-8"
              >
                <div className="flex gap-8">
                  <input
                    type="text"
                    className="p-2 w-full outline outline-1 outline-gray-500 rounded-xl pl-4"
                    required
                    placeholder="ชื่อ *"
                    name="Firstname"
                  />
                  <input
                    type="text"
                    className="p-2 w-full outline outline-1 outline-gray-500 rounded-xl pl-4"
                    required
                    placeholder="นามสกุล *"
                    name="Lastname"
                  />
                </div>
                <input
                  type="tel"
                  className="p-2 outline outline-1 outline-gray-500 rounded-xl pl-4"
                  required
                  placeholder="เบอร์ติดต่อ *"
                  name="Phone"
                />
                <input
                  type="email"
                  className="p-2 outline outline-1 outline-gray-500 rounded-xl pl-4"
                  required
                  placeholder="อีเมล *"
                  name="Email"
                />
                <select
                  className="p-2 outline outline-1 outline-gray-500 rounded-xl pl-4"
                  name="Service"
                  required
                >
                  <option value={null} disabled>
                    เลือกบริการที่สนใจ *
                  </option>
                  <option value="รับทำบัญชีรายเดือน และยื่นภาษี">
                    รับทำบัญชีรายเดือน และยื่นภาษี
                  </option>
                  <option value="บริการตรวจสอบ รับรองบัญชี">
                    บริการตรวจสอบ รับรองบัญชี
                  </option>
                  <option value="จดทะเบียนบริษัทจำกัด / ห้างหุ้นส่วนฯ">
                    จดทะเบียนบริษัทจำกัด / ห้างหุ้นส่วนฯ
                  </option>
                  <option value="บริการที่ปรึกษา และวางแผนภาษี">
                    บริการที่ปรึกษา และวางแผนภาษี
                  </option>
                </select>
                <textarea
                  className="p-2 outline outline-1 outline-gray-500 rounded-xl pl-4"
                  name="Detail"
                  placeholder="รายละเอียด..."
                ></textarea>
                <button
                  className="bg-secondary-600 p-3 text-white rounded-xl"
                  type="submit"
                >
                  ยืนยัน
                </button>
              </form>

              {/* แชร์ */}
              <div className="hidden z-20 absolute -bottom-20 right-0 xl:flex flex-col items-start space-y-2">
                <p className="text-sm">แชร์ :</p>
                <div className="flex gap-2">
                  <a
                    target="_blank"
                    href="https://www.facebook.com/sharer/sharer.php?u=https://acclusive.co"
                  >
                    <img
                      className="w-8"
                      src={facebookIcon}
                      alt="facebook logo"
                    />
                  </a>
                  <a
                    target="_blank"
                    href="https://social-plugins.line.me/lineit/share?url=https://acclusive.co"
                  >
                    <img className="w-8" src={lineIcon} alt="line logo" />
                  </a>
                  <a
                    target="_blank"
                    href="https://twitter.com/intent/tweet?url=https://acclusive.co"
                  >
                    <img className="w-8" src={XIcon} alt="x logo" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* InformationTab Mobile size */}
          <div className="flex xl:hidden items-center justify-center w-full h-20 z-20 mt-10 lg:px-64 md:px-48">
            <div className="flex items-center justify-center gap-5">
              <div
                className="flex flex-col items-center space-y-2"
                onClick={() => {
                  handleEmailClick();
                }}
              >
                <img
                  className="w-12 h-12 bg-white rounded-full"
                  src={emailIcon}
                  alt="google map icon"
                />
                <p className="text-primary-500 text-xs font-bold">อีเมล</p>
              </div>

              <a
                target="_blank"
                className="flex flex-col items-center space-y-2"
                href="https://www.facebook.com/profile.php?id=100078187762237"
              >
                <img
                  className="w-12 h-12 bg-white rounded-full"
                  src={facebookIcon}
                  alt="google map icon"
                />
                <p className="text-primary-500 text-xs font-bold">Facebook</p>
              </a>

              <a
                target="_blank"
                className="flex flex-col items-center space-y-2"
                href="https://line.me/R/ti/p/@608izthw"
              >
                <img
                  className="w-12 h-12 bg-white rounded-full"
                  src={lineIcon}
                  alt="google map icon"
                />
                <p className="text-primary-500 text-xs font-bold">LINE</p>
              </a>

              <div
                onClick={() => {
                  setSharePopup(true);
                }}
                className="relative flex flex-col items-center space-y-2 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-12 h-12 bg-white rounded-full p-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                  />
                </svg>

                <p className="text-primary-500 text-xs font-bold">แชร์</p>

                <SharePopup
                  show={sharePopup}
                  onClose={() => {
                    setSharePopup(false);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="gray-overlay absolute md:inset-20 inset-0 -top-20 bg-[#FFFFFF] opacity-50 z-10 " />
        </section>
      </div>
      {/* footer */}
      <section className="flex relative bg-white flex-col">
        <div className="flex w-full h-full xl:flex-row flex-col mt-10">
          {/* Logo */}
          <div className="flex flex-col items-center xl:w-6/12 w-full justify-center">
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
            <div className="flex flex-col items-center space-y-1 mt-1 text-lg text-primary-500 text-[20px] select-none">
              <p>สำนักงานบัญชียุคใหม่</p>
              <p>ยินดีให้บริการด้านบัญชีและภาษีครบวงจร</p>
              <p>เราพร้อมจะเป็นที่ปรึกษาให้ธุรกิจของคุณ</p>
            </div>
          </div>
          <div className="flex items-center flex-col w-full">
            <div className="flex flex-row justify-center items-center xl:gap-20 gap-5 text-sm text-primary-500 xl:text-lg xl:p-10 p-5 w-full">
              <a href="#">หน้าหลัก</a>
              <a href="#sponsor">เกี่ยวกับเรา</a>
              <a href="#service">บริการของเรา</a>
              <a href="#contact">ติดต่อเรา</a>
            </div>
            <img className="w-full object-cover" src={PictureLine} alt="" />
            <div className="mt-14 flex items-start lg:flex-row flex-col justify-center w-full">
              <div className="p-4 h-44 w-full">
                <p className="text-xl text-primary-500">ช่องทางการติดต่อ</p>
                <div className="mt-5">
                  <p>Info.acclusive@gmail.com</p>
                  <p>(085) 044-6664 , (062) 556-5549</p>
                  <p>เวลาทำการ : 9.00 - 18.00 น. วันจันทร์ - ศุกร์</p>
                </div>
              </div>

              <div className="lg:h-44 h-[1px] lg:w-[1px] w-full bg-gray-300" />

              <div className="p-4 h-44 w-full">
                <p className="text-xl text-primary-500">ที่ตั้งสำนักงาน</p>
                <div className="mt-5">
                  <p>บริษัทแอคคลูซีฟ จำกัด</p>
                  <p>754/87 ซอย สุขุมวิท 101 แขวงบางจาก</p>
                  <p>เขตพระโขนง กรุงเทพมหานคร 10260</p>
                </div>
              </div>

              <div className="lg:h-44 h-[1px] lg:w-[1px] w-full bg-gray-300" />

              <div className="p-4 h-44 w-full">
                <p className="text-xl text-primary-500">ติดตามเรา</p>
                <div className="mt-5">
                  <p>กดติดตามช่องทางต่างๆ</p>
                  <p>เพื่อรับข่าวสารสดใหม่จากเรา</p>
                  <div className="space-y-3 mt-5">
                    <a
                      target="_blank"
                      href="https://line.me/R/ti/p/@608izthw"
                      className="flex items-center gap-3 cursor-pointer"
                    >
                      <img className="w-7" src={linelogo} alt="" />
                      <p>Line Official</p>
                    </a>
                    <a
                      target="_blank"
                      href="https://www.facebook.com/profile.php?id=100078187762237"
                      className="flex items-center gap-1 cursor-pointer"
                    >
                      <img className="w-9" src={Facebook} alt="" />
                      <p>Facebook</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-28 flex w-full h-[75px] flex-row justify-center items-center text-white bg-black-500">
          <p className="select-none">
            © 2024 ACCLUSIVE Co., Ltd. All Rights Reserved
          </p>
        </div>
      </section>
      <button
        className={clsx(
          "fixed right-2 bottom-0 transition-all z-20 duration-75 flex justify-end bg-secondary-100 p-2 rounded-xl h-fit w-fit select-none",
          isAtBottom ? "bottom-20" : "bottom-2"
        )}
      >
        <a
          href="https://line.me/R/ti/p/@608izthw"
          className="flex w-[45px] h-[45px] items-center justify-center flex-row object-cover"
        >
          <img
            src={linelogo}
            alt="line"
            className="min-w-[45px] min-h-[45px] max-w-[45px] max-h-[45px] object-cover"
          />
        </a>
        <div className="absolute right-0 w-fit h-fgi">
          <svg
            width="160"
            height="44"
            viewBox="0 0 182 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-16 "
          >
            <path
              d="M180.25 30.7631C180.25 30.7631 177.781 32.2946 176 32.5C174.436 32.6803 172 32 172 32V26L173.124 27.2841C174.659 29.0393 176.76 30.2025 179.063 30.5725L180.25 30.7631Z"
              fill="#B6C7D8"
            />
            <rect
              opacity="1"
              x="17"
              y="2"
              width="155"
              height="41"
              rx="5"
              fill="#B6C7D8"
            />
          </svg>

          <p className="absolute right-[90px] top-[10px] whitespace-nowrap text-white font-light">
            สอบถามคลิกที่นี่
          </p>
        </div>
      </button>
    </div>
  );
}

export default App;
