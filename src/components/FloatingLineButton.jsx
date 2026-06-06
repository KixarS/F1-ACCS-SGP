import { useEffect, useState } from "react";
import clsx from "clsx";
import linelogo from "/image/LineLogo.png";

function FloatingLineButton() {
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const bottomPosition = document.documentElement.scrollHeight;
      setIsAtBottom(scrollPosition >= bottomPosition);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      className={clsx(
        "fixed right-2 transition-all z-20 duration-75 flex justify-end bg-secondary-100 p-2 rounded-xl h-fit w-fit select-none",
        isAtBottom ? "bottom-20" : "bottom-2"
      )}
    >
      <a
        href="https://line.me/R/ti/p/@608izthw"
        className="flex w-[45px] h-[45px] items-center justify-center flex-row object-cover"
      >
        <img src={linelogo} alt="line" className="min-w-[45px] min-h-[45px] max-w-[45px] max-h-[45px] object-cover" />
      </a>
      <div className="absolute right-0 w-fit h-fit">
        <svg
          width="160"
          height="44"
          viewBox="0 0 182 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-16"
        >
          <path d="M180.25 30.7631C180.25 30.7631 177.781 32.2946 176 32.5C174.436 32.6803 172 32 172 32V26L173.124 27.2841C174.659 29.0393 176.76 30.2025 179.063 30.5725L180.25 30.7631Z" fill="#B6C7D8" />
          <rect opacity="1" x="17" y="2" width="155" height="41" rx="5" fill="#B6C7D8" />
        </svg>
        <p className="absolute right-[90px] top-[10px] whitespace-nowrap text-white font-light">สอบถามคลิกที่นี่</p>
      </div>
    </button>
  );
}

export default FloatingLineButton;
