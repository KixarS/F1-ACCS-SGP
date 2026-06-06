import recommendBG from "../../public/image/RecommendBG.jpg";
import example from "../../public/image/Example.jpg";
import example2 from "../../public/image/Example2.jpg";
import example3 from "../../public/image/Example3.jpg";
import example4 from "../../public/image/Example4.jpg";

const ChatIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#60947d" className="w-7 h-7 mt-1">
    <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 0 0-1.032-.211 50.89 50.89 0 0 0-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 0 0 2.433 3.984L7.28 21.53A.75.75 0 0 1 6 21v-4.03a48.527 48.527 0 0 1-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979Z" />
    <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 0 0 1.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0 0 15.75 7.5Z" />
  </svg>
);

function ProblemSection() {
  return (
    <section className="flex w-full h-[750px] xl:h-[750px] flex-row">
      <div className="w-full flex relative flex-col xl:flex-row items-center justify-center overflow-hidden">
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
            <div id="indicators-carousel" className="relative w-full" data-carousel="static">
              <div className="relative w-full h-52 overflow-hidden rounded-lg">
                <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
                  <img src={example} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                  <img src={example2} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                  <img src={example3} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                  <img src={example4} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 scale-90" alt="..." />
                </div>
              </div>
              {/* Bullet buttons */}
              <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse -bottom-10 left-1/2">
                {[0, 1, 2, 3].map((i) => (
                  <button
                    key={i}
                    type="button"
                    className="w-3 h-3 rounded-full"
                    aria-current={i === 0 ? "true" : "false"}
                    aria-label={`Slide ${i + 1}`}
                    data-carousel-slide-to={i}
                  />
                ))}
              </div>
              <button
                type="button"
                className="absolute top-0 -start-16 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-prev
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
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
                  <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                  </svg>
                  <span className="sr-only">Next</span>
                </span>
              </button>
            </div>
          </div>
        </div>
        {/* Problem text */}
        <div className="flex flex-col z-10 xl:ml-24 h-fit justify-end text-black-500 md:text-[20px] md:w-[670px] space-y-10 mt-16">
          <p className="break-words select-none flex flex-row space-x-3">
            <ChatIcon />
            <p>
              หลายคนที่เคย<span className="text-secondary-500">เจอประสบการณ์เลวร้าย</span>กับสำนักงานบัญชีที่ขาดความรับผิดชอบ<br />
              อาจทำให้คุณต้องเสียค่าปรับภาษีเป็นจำนวนมาก
            </p>
          </p>
          <p className="break-words select-none flex flex-row space-x-3">
            <ChatIcon />
            <p>
              อย่าเสี่ยงกับความเสียหายที่แก้ไขไม่ได้ ให้เราช่วยดูแลบัญชีของคุณ<br />
              ด้วยทีมงานมืออาชีพที่คุณวางใจได้
              <span className="text-secondary-500"> ติดต่อเราวันนี้เพื่อรับคำปรึกษาเบื้องต้นฟรี!</span>
            </p>
          </p>
        </div>
        {/* Background */}
        <img src={recommendBG} alt="recommendBG" className="object-cover w-full h-full absolute right-0 bottom-0 brightness-75 blur-[2px]" />
        <div className="gray-overlay absolute inset-0 xl:inset-10 bg-[#FFFFFF] opacity-90" />
      </div>
    </section>
  );
}

export default ProblemSection;
