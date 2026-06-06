import accsonlylogo from "../../public/image/AccsOnlyLogo.png";
import accsonlytext from "../../public/image/AccsOnlyText.png";
import PictureLine from "../../public/image/PictureLine.png";
import linelogo from "../../public/image/LineLogo.png";
import Facebook from "../../public/image/Facebook.png";

function Footer() {
  return (
    <section className="flex relative bg-white flex-col">
      <div className="flex w-full h-full xl:flex-row flex-col mt-10">
        {/* Logo + taglines */}
        <div className="flex flex-col items-center xl:w-6/12 w-full justify-center">
          <img src={accsonlylogo} alt="accs-logo" className="cursor-pointer" />
          <img src={accsonlytext} alt="accs-text" className="cursor-pointer" />
          <div className="flex flex-col items-center space-y-1 mt-1 text-lg text-primary-500 text-[20px] select-none">
            <p>สำนักงานบัญชียุคใหม่</p>
            <p>ยินดีให้บริการด้านบัญชีและภาษีครบวงจร</p>
            <p>เราพร้อมจะเป็นที่ปรึกษาให้ธุรกิจของคุณ</p>
          </div>
        </div>

        <div className="flex items-center flex-col w-full">
          {/* Nav links */}
          <div className="flex flex-row justify-center items-center xl:gap-20 gap-5 text-sm text-primary-500 xl:text-lg xl:p-10 p-5 w-full">
            <a href="#">หน้าหลัก</a>
            <a href="#sponsor">เกี่ยวกับเรา</a>
            <a href="#service">บริการของเรา</a>
            <a href="#contact">ติดต่อเรา</a>
          </div>
          <img className="w-full object-cover" src={PictureLine} alt="" />

          <div className="mt-14 flex items-start lg:flex-row flex-col justify-center w-full">
            {/* Contact info */}
            <div className="p-4 h-44 w-full">
              <p className="text-xl text-primary-500">ช่องทางการติดต่อ</p>
              <div className="mt-5">
                <p>Info.acclusive@gmail.com</p>
                <p>(085) 044-6664 , (062) 556-5549</p>
                <p>เวลาทำการ : 9.00 - 18.00 น. วันจันทร์ - ศุกร์</p>
              </div>
            </div>
            <div className="lg:h-44 h-[1px] lg:w-[1px] w-full bg-gray-300" />

            {/* Office address */}
            <div className="p-4 h-44 w-full">
              <p className="text-xl text-primary-500">ที่ตั้งสำนักงาน</p>
              <div className="mt-5">
                <p>บริษัทแอคคลูซีฟ จำกัด</p>
                <p>754/87 ซอย สุขุมวิท 101 แขวงบางจาก</p>
                <p>เขตพระโขนง กรุงเทพมหานคร 10260</p>
              </div>
            </div>
            <div className="lg:h-44 h-[1px] lg:w-[1px] w-full bg-gray-300" />

            {/* Social links */}
            <div className="p-4 h-44 w-full">
              <p className="text-xl text-primary-500">ติดตามเรา</p>
              <div className="mt-5">
                <p>กดติดตามช่องทางต่างๆ</p>
                <p>เพื่อรับข่าวสารสดใหม่จากเรา</p>
                <div className="space-y-3 mt-5">
                  <a target="_blank" href="https://line.me/R/ti/p/@608izthw" className="flex items-center gap-3 cursor-pointer">
                    <img className="w-7" src={linelogo} alt="" />
                    <p>Line Official</p>
                  </a>
                  <a target="_blank" href="https://www.facebook.com/profile.php?id=100078187762237" className="flex items-center gap-1 cursor-pointer">
                    <img className="w-9" src={Facebook} alt="" />
                    <p>Facebook</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="mt-28 flex w-full h-[75px] flex-row justify-center items-center text-white bg-black-500">
        <p className="select-none">© {new Date().getFullYear()} ACCLUSIVE Co., Ltd. All Rights Reserved</p>
      </div>
    </section>
  );
}

export default Footer;
