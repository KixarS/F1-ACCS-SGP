import "./App.css";
import navlogo from "./image/AccsLogo.png";
import thailogo from "./image/ThaiLogo.png";
import carouselBG from "./image/CarouselBG.png";
import carouselPropOne from "./image/CarouselPropOne.png";
import accsonlylogo from "./image/AccsOnlyLogo.png";
import accsonlytext from "./image/AccsOnlyText.png";
import linelogo from "./image/LineLogo.png";
import grlogo from "./image/GRLogo.png";

function App() {
  return (
    <div className="flex w-full h-full flex-col relative">
      {/* Navigation Bar */}
      <div className="flex flex-row justify-between items-center w-full h-[79px] bg-white drop-shadow-lg text-base overflow-hidden z-50">
        {/* Logo */}
        <div className="flex w-fit h-full flex-row items-center ml-5 lg:ml-24 mt-2">
          <img
            src={navlogo}
            alt="accs-logo"
            className="flex min-w-[100px] max-w-[100px] min-h-[95px] max-h-[95px] cursor-pointer object-contain"
          />
        </div>
        {/* Navbar Content */}
        <div className="w-full flex justify-end">
          {/* Home , Customer , Service , Contact */}
          <div className="flex flex-row space-x-10 mr-5 text-[18px]">
            <button className="cursor-pointer whitespace-nowrap">
              หน้าหลัก
            </button>
            <button className="cursor-pointer whitespace-nowrap">
              ลูกค้าของเรา
            </button>
            <button className="cursor-pointer whitespace-nowrap">
              บริการของเรา
            </button>
            <button className="cursor-pointer whitespace-nowrap">
              ติดต่อเรา
            </button>
          </div>
          {/* Localize Container */}
          <div className="flex flex-row space-x-2 ml-4 mr-16 items-center select-none cursor-pointer">
            {/* Flag */}
            <div className="flex h-full w-fit items-center">
              <img
                src={thailogo}
                alt="thaiFlag"
                className="flex min-w-[20px] max-w-[20px] min-h-[20px] max-h-[20px] rounded-full object-cover"
              />
            </div>
            {/* Language */}
            <p className="whitespace-nowrap cursor-pointer text-[18px] ">
              ภาษาไทย
            </p>
            {/* Dropdown Icon */}
            <div>
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 8L0.669871 0.5L9.33013 0.5L5 8Z"
                  fill="#252525"
                  fill-opacity="0.75"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* body */}
      <div className="flex min-w-full h-fit flex-col">
        {/* Carousel */}
        <div className="flex relative min-w-full w-full h-fit min-h-[450px] overflow-hidden">
          <img
            src={carouselBG}
            alt="carouselbg"
            className="object-cover min-w-full"
          />
          <img
            src={carouselPropOne}
            alt="standingGirl"
            className="absolute -right-9 sm:right-0 lg:right-[20%] -bottom-11 sm:bottom-6 scale-75 sm:scale-110 sm:h-5/6 object-cover"
          />
        </div>
        {/* Sponsor */}
        <div className="flex flex-col items-center justify-center bg-white h-[500px]">
          {/* Our Sponsor Head Text */}
          <p className="flex text-primary-500 text-[40px] font-semibold mb-4">
            ที่ปรึกษาที่รู้ใจ
          </p>
          {/* Our Sponsor Logo */}
          <img
            src={grlogo}
            alt="gr-sponsor"
            className="object-cover min-h-[175px] min-w-[175px] max-h-[175px] max-w-[175px] mt-3"
          />
          {/* Our Sponsor Text */}
          <div className="w-full h-fit flex items-center justify-center flex-col">
            <p className="font-bold text-secondary-500 text-[32px] whitespace-nowrap my-4">
              ยีราฟพารวย
            </p>
            <p className="whitespace-nowrap text-[18px]">
              เป็นที่ปรึกษาด้านบัญชีที่ยีราฟไว้ใจ
            </p>
            <p className="whitespace-nowrap text-[18px]">
              อีกทั้งยังเป็นผู้ช่วยที่ช่วยดูแลธุรกิจของยีราฟอีกด้วย
            </p>
          </div>
        </div>
      </div>
      {/* footer */}
      <div className="flex relative h-[550px] bg-white flex-col ">
        {/* footer contents */}
        <div className="flex w-full h-full flex-row">
          {/*accs logo */}
          <div className="flex flex-col items-center w-6/12 justify-center">
            <img src={accsonlylogo} alt="accs-logo" />
            <img src={accsonlytext} alt="accs-logo" />
            {/* Slogan */}
            <div className="flex flex-col items-center space-y-1 mt-1 font-medium text-primary-500 text-[18px]">
              <p>สำนักงานบัญชียุคใหม่</p>
              <p>ยินดีให้บริการด้านบัญชีและภาษีครบวงจร</p>
              <p>เราพร้อมจะเป็นที่ปรึกษาให้ธุรกิจของคุณ</p>
            </div>
          </div>
          {/* main contents */}
          <div className="flex flex-col w-full bg-red-200">
            {/* navigator buttons */}
            <div className="flex flex-row w-full">
              <button></button>
              <button></button>
              <button></button>
              <button></button>
            </div>
          </div>
        </div>
        {/* licence */}
        <div className="flex w-full h-[75px] flex-row justify-center items-center text-white bg-black-500">
          <p className="select-none">
            © 2024 ACCLUSIVE Co., Ltd. All Rights Reserved
          </p>
        </div>
        {/* line floating button */}
        <button className="fixed bottom-3 right-3 z-50 flex justify-end bg-[#F8F8F8] p-2 rounded-xl h-fit w-fit select-none">
          <div className="flex w-[45px] h-[45px] items-center justify-center flex-row object-cover">
            <img
              src={linelogo}
              alt="line"
              className="min-w-[45px] min-h-[45px] max-w-[45px] max-h-[45px] object-cover"
            />
          </div>
        </button>
      </div>
    </div>
  );
}

export default App;
