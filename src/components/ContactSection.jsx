import { useState } from "react";
import clsx from "clsx";
import Swal from "sweetalert2";
import Loading from "./Loading";
import SharePopup from "./SharePopup";
import FormBG from "../../public/image/FormBG.png";
import googleMapIcon from "../../public/image/GoogleMapIcon.png";
import emailIcon from "../../public/image/EmailIcon.png";
import facebookIcon from "../../public/image/FacebookLogo.png";
import lineIcon from "../../public/image/LineIcon.png";
import XIcon from "../../public/image/XLogo.png";
import FollowInfomationIcon from "../../public/image/FollowInfomationIcon.png";

function ContactSection() {
  const [showLoad, setShowLoad] = useState(false);
  const [sharePopup, setSharePopup] = useState(false);

  const handleEmailClick = () => {
    const email = "Info.acclusive@gmail.com";
    const subject = "Your Subject Here";
    const body = "Your email body here.";
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
    window.open(gmailUrl, "_blank");
  };

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
      { method: "POST", body: formData }
    ).then((res) => {
      setShowLoad(false);
      if (res.ok) {
        Swal.fire({ title: "แจ้งเตือน", text: "ส่งฟอร์มสำเร็จ", icon: "success", confirmButtonText: "ตกลง" });
      } else {
        Swal.fire({ title: "แจ้งเตือน", text: "ส่งฟอร์มไม่สำเร็จ", icon: "error", confirmButtonText: "ตกลง" });
      }
    });
  };

  return (
    <section
      id="form"
      className="relative flex w-full flex-col items-center h-[1060px] overflow-hidden mx-auto"
    >
      <Loading show={showLoad} text="กำลังส่งฟอร์ม" />
      <img src={FormBG} alt="form" className="object-cover w-full h-full absolute right-0 bottom-0 brightness-95" />

      {/* Header text */}
      <div className="flex w-full text-center h-fit flex-col items-center mt-28 z-20">
        <p className="select-none text-primary-500 md:text-[40px] text-2xl font-semibold break-all">
          ส่งรายละเอียดเกี่ยวกับคุณ
        </p>
        <p className="select-none break-words text-black-500 md:text-[20px] mt-2">
          <span className="md:text-[30px] text-[20px] font-medium text-primary-500">เรา</span>
          ยินดีที่จะให้บริการแก่คุณลูกค้าอย่างเต็มที่ <br />
          หากท่าน
          <span className="text-primary-500 font-medium md:text-[22px] mr-2">มีข้อสงสัยหรือมีความต้องการ</span>
          เรายินดีรับฟังและหารือเกี่ยวกับบริการ
          <br />
          ด้านบัญชี ภาษี และพร้อมที่จะเป็นที่ปรึกษาธุรกิจแก่คุณ
        </p>
      </div>

      {/* Info + Form row */}
      <div className="flex flex-row w-full h-fit mt-14 z-20 justify-center px-4">
        {/* Desktop info cards */}
        <div className="xl:flex hidden flex-col items-start w-full h-full space-y-8 pl-16">
          {/* Location */}
          <div className="flex flex-row gap-5 bg-white h-36 xl:pl-10 pl-5 w-[70%] rounded-r-full items-center justify-start opacity-85">
            <img src={googleMapIcon} alt="map" className="object-cover min-w-[80px] min-h-[80px] max-w-[80px] max-h-[80px]" />
            <div>
              <p className="text-xl font-bold text-primary-500">ที่ตั้งสำนักงาน</p>
              <div>
                <p>บริษัท แอคคลูซีฟ จำกัด</p>
                <p>754/87 ซอย สุขุมวิท 101 แขวงบางจาก</p>
                <p>เขตพระโขนง กรุงเทพมหานคร 10260</p>
              </div>
            </div>
          </div>
          {/* Email */}
          <div
            onClick={handleEmailClick}
            className="flex cursor-pointer flex-row gap-5 bg-white duration-300 ease-in-out from-white to-secondary-300 h-36 pl-5 xl:pl-10 w-[70%] rounded-r-full items-center justify-start opacity-85"
          >
            <img src={emailIcon} alt="email" className="object-cover min-w-[80px] min-h-[80px] max-w-[80px] max-h-[80px]" />
            <div>
              <p className="text-xl font-bold text-primary-500">ติดต่อทางอีเมล</p>
              <p>Info.acclusive@gmail.com</p>
            </div>
          </div>
          {/* Follow */}
          <div className="flex flex-row gap-5 bg-white h-36 pl-5 xl:pl-10 w-[70%] rounded-r-full items-center justify-start opacity-85">
            <img src={FollowInfomationIcon} alt="follow" className="object-cover min-w-[80px] min-h-[80px] max-w-[80px] max-h-[80px]" />
            <div>
              <p className="text-xl font-bold text-primary-500">ติดตามข้อมูล</p>
              <p>รับข่าวสารสดใหม่เพียงติดตามเราช่องทางต่างๆ</p>
              <div className="flex space-x-5 mt-3">
                <a href="https://www.facebook.com/profile.php?id=100078187762237" className="flex cursor-pointer pl-2 pr-4 py-1 bg-[#295396] text-white items-center gap-2 rounded-full">
                  <img className="w-6 h-6" src={facebookIcon} alt="facebook logo" />
                  <p className="text-xs">Facebook</p>
                </a>
                <a href="https://line.me/R/ti/p/@608izthw" className="flex cursor-pointer pl-2 pr-4 bg-[#00B900] text-white items-center gap-2 rounded-full">
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
          <form onSubmit={formSubmitHandle} className="flex flex-col space-y-5 mt-8">
            <div className="flex gap-8">
              <input type="text" className="p-2 w-full outline outline-1 outline-gray-500 rounded-xl pl-4" required placeholder="ชื่อ *" name="Firstname" />
              <input type="text" className="p-2 w-full outline outline-1 outline-gray-500 rounded-xl pl-4" required placeholder="นามสกุล *" name="Lastname" />
            </div>
            <input type="tel" className="p-2 outline outline-1 outline-gray-500 rounded-xl pl-4" required placeholder="เบอร์ติดต่อ *" name="Phone" />
            <input type="email" className="p-2 outline outline-1 outline-gray-500 rounded-xl pl-4" required placeholder="อีเมล *" name="Email" />
            <select className="p-2 outline outline-1 outline-gray-500 rounded-xl pl-4" name="Service" required>
              <option value={null} disabled>เลือกบริการที่สนใจ *</option>
              <option value="รับทำบัญชีรายเดือน และยื่นภาษี">รับทำบัญชีรายเดือน และยื่นภาษี</option>
              <option value="บริการตรวจสอบ รับรองบัญชี">บริการตรวจสอบ รับรองบัญชี</option>
              <option value="จดทะเบียนบริษัทจำกัด / ห้างหุ้นส่วนฯ">จดทะเบียนบริษัทจำกัด / ห้างหุ้นส่วนฯ</option>
              <option value="บริการที่ปรึกษา และวางแผนภาษี">บริการที่ปรึกษา และวางแผนภาษี</option>
            </select>
            <textarea className="p-2 outline outline-1 outline-gray-500 rounded-xl pl-4" name="Detail" placeholder="รายละเอียด..." />
            <button className="bg-secondary-600 p-3 text-white rounded-xl" type="submit">ยืนยัน</button>
          </form>

          {/* Share icons (desktop) */}
          <div className="hidden z-20 absolute -bottom-20 right-0 xl:flex flex-col items-start space-y-2">
            <p className="text-sm">แชร์ :</p>
            <div className="flex gap-2">
              <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https://acclusive.co">
                <img className="w-8" src={facebookIcon} alt="facebook logo" />
              </a>
              <a target="_blank" href="https://social-plugins.line.me/lineit/share?url=https://acclusive.co">
                <img className="w-8" src={lineIcon} alt="line logo" />
              </a>
              <a target="_blank" href="https://twitter.com/intent/tweet?url=https://acclusive.co">
                <img className="w-8" src={XIcon} alt="x logo" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile contact icons */}
      <div className="flex xl:hidden items-center justify-center w-full h-20 z-20 mt-10 lg:px-64 md:px-48">
        <div className="flex items-center justify-center gap-5">
          <div className="flex flex-col items-center space-y-2" onClick={handleEmailClick}>
            <img className="w-12 h-12 bg-white rounded-full" src={emailIcon} alt="email icon" />
            <p className="text-primary-500 text-xs font-bold">อีเมล</p>
          </div>
          <a target="_blank" className="flex flex-col items-center space-y-2" href="https://www.facebook.com/profile.php?id=100078187762237">
            <img className="w-12 h-12 bg-white rounded-full" src={facebookIcon} alt="facebook icon" />
            <p className="text-primary-500 text-xs font-bold">Facebook</p>
          </a>
          <a target="_blank" className="flex flex-col items-center space-y-2" href="https://line.me/R/ti/p/@608izthw">
            <img className="w-12 h-12 bg-white rounded-full" src={lineIcon} alt="line icon" />
            <p className="text-primary-500 text-xs font-bold">LINE</p>
          </a>
          <div onClick={() => setSharePopup(true)} className="relative flex flex-col items-center space-y-2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-12 h-12 bg-white rounded-full p-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
            </svg>
            <p className="text-primary-500 text-xs font-bold">แชร์</p>
            <SharePopup show={sharePopup} onClose={() => setSharePopup(false)} />
          </div>
        </div>
      </div>

      <div className="gray-overlay absolute md:inset-20 inset-0 -top-20 bg-[#FFFFFF] opacity-50 z-10" />
    </section>
  );
}

export default ContactSection;
