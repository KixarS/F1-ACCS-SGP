import "./App.css";
import navlogo from "./image/ACCS-Logo.png";
import thailogo from "./image/Thai-Logo.png";
import carouselbg from "./image/Carousel-BG.png";

function App() {
  return (
    // Home Page
    <div className="flex w-full h-full flex-col">
      {/* Navigation Bar */}
      <div className="flex flex-row justify-between items-center w-full h-[79px] bg-white drop-shadow-lg text-base overflow-hidden z-50">
        {/* Logo */}
        <div className="flex w-fit h-full flex-row items-center ml-24 mt-2">
          <img
            src={navlogo}
            alt="accs-logo"
            className="flex min-w-[100px] max-w-[100px] min-h-[95px] max-h-[95px] cursor-pointer object-contain"
          />
        </div>
        {/* Navbar Content */}
        <div className="w-full flex justify-end">
          {/* Home , Customer , Service , Contact */}
          <div className="flex flex-row space-x-10 mr-5">
            <p className="cursor-pointer">หน้าหลัก</p>
            <p className="cursor-pointer">ลูกค้าของเรา</p>
            <p className="cursor-pointer">บริการของเรา</p>
            <p className="cursor-pointer">ติดต่อเรา</p>
          </div>
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
            <p>ภาษาไทย</p>
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
      <div className="flex w-full h-full bg-red-200">
        {/* Carousel */}
        <div className="flex bg-blue-100 min-w-full">
          <img src={carouselbg} alt="carouselbg" className="object-cover min-w-full blur-sm" />
        </div>
      </div>
    </div>
  );
}

export default App;
