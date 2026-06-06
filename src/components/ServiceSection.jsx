import ourservice from "/image/OurServiceBG.png";

const services = [
  { img: "/image/FirstServiceLogo.png", alt: "firstservice", label: "รับทำบัญชีรายเดือน \n และยื่นภาษี" },
  { img: "/image/SecondServiceLogo.png", alt: "secondservice", label: "บริการตรวจสอบ \n รับรองบัญชี" },
  { img: "/image/ThirdServiceLogo.png", alt: "thirdservice", label: "จดทะเบียนบริษัทจำกัด \n / ห้างหุ้นส่วนฯ" },
  { img: "/image/FourthServiceLogo.png", alt: "fourthservice", label: "บริการที่ปรึกษา \n และวางแผนภาษี" },
];

function ServiceSection() {
  return (
    <section
      id="service"
      className="flex flex-col min-h-[400px] h-fit lg:min-h-fit lg:h-[600px] w-full items-center justify-center relative mx-auto"
    >
      <div className="min-w-full bg-cover min-h-full flex flex-col justify-center items-center mt-10 lg:mt-0 pt-20 pb-28 lg:pt-0 lg:pb-0">
        <div className="flex text-primary-500 text-[30px] lg:text-[40px] font-semibold mb-5 lg:mb-10 z-10 select-none">
          บริการของเรา
        </div>
        <div className="grid grid-cols-2 gap-2 md:gap-5 lg:gap-0 lg:flex lg:flex-row lg:space-x-6 xl:space-x-12 lg:mb-10 items-center justify-center">
          {services.map(({ img, alt, label }) => (
            <div
              key={alt}
              className="scale-100 hover:scale-110 ease-in-out duration-[0.2s] flex w-[150px] h-[170px] lg:w-[230px] lg:h-[250px] bg-white flex-col z-10 cursor-pointer"
            >
              <img src={img} alt={alt} />
              <p className="flex select-none text-center font-normal text-primary-500 text-[14px] lg:text-[20px] justify-center items-center w-full h-full break-words">
                {label.split(" \n ").map((line, i) => (
                  <span key={i}>{line}{i === 0 && <br />}</span>
                ))}
              </p>
            </div>
          ))}
        </div>
        <img src={ourservice} alt="carouselbg" className="object-cover w-full h-full absolute right-0 bottom-0 brightness-95" />
        <div className="gray-overlay absolute md:inset-0 xl:inset-10 bg-[#FFFFFF]/90 opacity-50" />
      </div>
    </section>
  );
}

export default ServiceSection;
