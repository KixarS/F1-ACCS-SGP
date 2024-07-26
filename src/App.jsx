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

function App() {
  let sections = document.querySelectorAll('section');
  let navLinks = document.querySelectorAll('header nav a');

  window.onscroll = () => {
    sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if(top >= offset && top < offset + height) {
        navLinks.forEach(links => {
          links.classList.remove('active');
          document.querySelector('header nav a [href*=' + id + ']').classList.add('active')
        });
      };
    });
  };

  return (
    <div className="flex w-full min-h-screen h-fit flex-col relative ">
      {/* Navigation Bar */}
      <header className="flex flex-row sticky top-0 justify-between items-center w-full h-[79px] bg-white drop-shadow-lg text-base z-50">
        {/* Logo */}
        <a href='#' className="flex w-fit h-full flex-row items-center ml-5 lg:ml-24 mt-2">
          <img
            src={navlogo}
            alt="accs-logo"
            className="flex min-w-[100px] max-w-[100px] min-h-[95px] max-h-[95px] cursor-pointer object-contain"
          />
        </a>
        {/* Navbar Content */}
        <div className="w-full hidden lg:flex justify-end mr-10  h-full items-center">
          {/* Home , Customer , Service , Contact */}
          <nav className="flex flex-row items-center mr-5 text-[18px] h-full space-x-10 min-w-fit duration-300">
            <a href="#home" className="flex relative h-full items-center min-w-fit justify-center underline-button duration-300">
              หน้าหลัก
            </a>
            <a href="#sponsor" className="flex relative h-full items-center min-w-fit justify-center underline-button duration-300">
              ลูกค้าของเรา
            </a>
            <a href="#service" className="flex relative h-full items-center min-w-fit justify-center underline-button duration-300">
              บริการของเรา
            </a>
            <a href="#contact" className="flex relative h-full items-center min-w-fit justify-center underline-button duration-300">
              ติดต่อเรา
            </a>
          </nav>
        </div>
      </header>
      {/* body */}
      <div className="flex w-full h-fit flex-col">
        {/* Carousel */}
        <section id="home" className="flex relative w-full h-fit min-h-[450px] overflow-hidden mx-auto">
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
        </section>
        {/* Sponsor */}
        <section id="sponsor" className="flex flex-col items-center pt-10 md:pt-0 justify-center bg-white h-[600px] w-full sm:pb-3 mx-auto">
          {/* Our Sponsor Head Text */}
          <p className="flex text-primary-500 text-[25px] lg:text-[40px] font-semibold mb-4 select-none">
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
        <section id="service" className="flex flex-col min-h-[600px] h-fit lg:min-h-fit lg:h-[600px] w-full items-center justify-center relative mx-auto ">
          <div className="min-w-full bg-cover min-h-full bg-[url(./image/OurServiceBG.png)] bg-opacity-70 flex flex-col justify-center items-center pt-5 pb-10 lg:pt-0 lg:pb-0">
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
        <section id="contact" className="flex flex-col w-full h-[500px] items-center justify-center text-center  md:mx-auto break-words px-5">
          <p className="text-secondary-500 text-[20px] md:text-[25px] lg:text-[32px] font-medium mb-4 select-none">
            หมดกังวลทุกเรื่องบัญชีภาษี
          </p>
          <p className="font-semibold text-primary-500 text-[20px] md:text-[25px] lg:text-[32px] mb-6 select-none">
            เราพร้อมตอบทุกข้อสงสัย
            <br className="flex md:hidden" />
            และดูแลบัญชีภาษีให้คุณ
          </p>
          <button className="flex bg-[#88AD9C] text-center text-white lg:text-[26px] px-10 py-4 rounded-sm">
            ยินดีให้คำปรึกษา
          </button>
        </section>
        {/* Information & Form */}
        <section id="form" className="relative flex w-full flex-col items-center h-[1060px] bg-[url(./image/FormBG.png)] bg-cover overflow-hidden mx-auto">
          {/* Send Us Informations Text */}
          <div className="flex w-full text-center h-fit flex-col items-center mt-16 z-10">
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
          <div className="flex flex-row w-full h-full mt-14 z-10 mx-auto">
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
          <div className="gray-overlay absolute inset-20 -top-20 h-full bg-[#FFFFFF]/90 opacity-50 z-0 " />
        </section>
      </div>
      {/* footer */}
      {/* <section className="flex relative h-[550px] bg-white flex-col ">
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
      </section> */}
    </div>
  );
}

export default App;
