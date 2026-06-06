import navlogo from "/image/AccsLogo.png";
import carouselBG from "/image/CarouselBG.png";
import carouselPropOne from "/image/CarouselPropOne.png";

function HeroSection() {
  return (
    <section
      id="home"
      className="flex flex-row justify-start relative w-full min-h-[450px] h-[500px] overflow-hidden mx-auto"
    >
      {/* Content */}
      <div className="flex w-full h-full justify-center flex-row z-10">
        <div className="flex flex-col md:flex-row h-full w-fit lg:items-center">
          {/* Logo */}
          <div className="sm:min-w-[170px] sm:min-h-[140px] sm:max-w-[170px] sm:max-h-[170px] lg:min-w-[340px] lg:min-h-[280px] lg:max-w-[340px] lg:max-h-[280px] mb-12 lg:flex hidden">
            <img src={navlogo} alt="accsonlylogo" className="object-cover w-full h-full" />
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
              {[
                <>ใส่ใจเรื่อง<span className="text-secondary-600">ภาษี</span>และ<span className="text-secondary-600">ความถูกต้อง</span></>,
                <>ให้ความสำคัญกับ<span className="text-secondary-600">คุณภาพของงาน</span>มากกว่าราคาที่ถูก</>,
                <>อยากได้ที่<span className="text-secondary-600">ปรึกษาที่รับฟัง</span>และ<span className="text-secondary-600">พร้อมช่วยแก้ปัญหา</span></>,
              ].map((text, i) => (
                <div key={i} className="flex flex-row space-x-3 items-center">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.38999 8.9435C3.57665 8.13016 2.25749 8.13016 1.44332 8.9435C0.629154 9.75683 0.629987 11.076 1.44332 11.8902L5.31415 15.761C6.52165 16.9685 8.47832 16.9685 9.68582 15.761L10.4467 15.0002L4.38999 8.9435Z" fill="#75b498" />
                    <path d="M18.5567 3.9435C17.7433 3.13016 16.4242 3.13016 15.61 3.9435L7.5 12.0535L10.4467 15.0002L18.5567 6.89016C19.37 6.076 19.37 4.75683 18.5567 3.9435Z" fill="#75b498" />
                  </svg>
                  <p className="text-black-300 text-[14px] lg:text-[18px] text-start whitespace-nowrap">{text}</p>
                </div>
              ))}
            </div>
            <div className="flex w-full justify-start lg:justify-center h-fit mt-5">
              <a
                href="#sponsor"
                className="duration-300 hover:scale-105 ease-in-out flex w-[100px] h-[36px] lg:w-[130px] lg:h-[45px] bg-secondary-500 text-white justify-center items-center rounded-sm"
              >
                <p className="font-light text-[14px] lg:text-[18px]">เกี่ยวกับเรา</p>
              </a>
            </div>
          </div>
          {/* Woman prop */}
          <div className="relative flex flex-col h-full w-fit justify-end">
            <img
              src={carouselPropOne}
              alt="standingGirl"
              className="object-cover max-w-[140px] sm:min-w-[150px] sm:min-h-[250px] lg:min-w-[300px] lg:min-h-[400px] absolute bottom-0 left-52 sm:left-80 md:-right-32 lg:-right-0 md:left-0 lg:relative"
            />
          </div>
        </div>
      </div>
      {/* Background */}
      <img src={carouselBG} alt="carouselbg" className="object-cover min-w-full min-h-full absolute right-0 bottom-0 brightness-95" />
      <div className="gray-overlay absolute inset-0 h-full bg-[#FFFFFF] opacity-50 z-0" />
    </section>
  );
}

export default HeroSection;
