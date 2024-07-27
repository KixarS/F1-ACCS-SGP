/* eslint-disable react/prop-types */
import clsx from "clsx";
import facebookIcon from "/image/FacebookLogo.png";
import lineIcon from "/image/LineIcon.png";
import XIcon from "/image/XLogo.png";
import { useEffect, useRef } from "react";

function SharePopup({ show, onClose }) {
  const popupRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (show) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [show, onClose]);

  if (!show) {
    return null;
  }

  return (
    <div
      ref={popupRef}
      className={clsx(
        show ? "flex" : "hidden",
        "absolute space-y-3 -bottom-16 right-0 shadow-md z-20 bg-white rounded-lg w-32 flex-col p-2 h-fit"
      )}
    >
      <button className="hover:bg-gray-200 p-1 ease-in-out duration-[0.2s] rounded-lg px-2">
        <a
          target="_blank"
          className="flex w-full h-fit items-center justify-between text-black-500"
          href="https://www.facebook.com/sharer/sharer.php?u=https://acclusive.co"
        >
          <p>แชร์ไปยัง</p>
          <img className="w-6 h-6" src={facebookIcon} alt="" />
        </a>
      </button>

      <button className="hover:bg-gray-200 p-1 ease-in-out duration-[0.2s] rounded-lg px-2">
        <a
          target="_blank"
          className="flex w-full h-fit items-center justify-between text-black-500"
          href="https://social-plugins.line.me/lineit/share?url=https://acclusive.co"
        >
          <p>แชร์ไปยัง</p>
          <img className="w-6 h-6" src={lineIcon} alt="" />
        </a>
      </button>

      <button className="hover:bg-gray-200 p-1 ease-in-out duration-[0.2s] rounded-lg px-2">
        <a
          target="_blank"
          className="flex w-full h-fit items-center justify-between text-black-500"
          href="https://twitter.com/intent/tweet?url=https://acclusive.co"
        >
          <p>แชร์ไปยัง</p>
          <img className="w-6 h-6" src={XIcon} alt="" />
        </a>
      </button>
    </div>
  );
}

export default SharePopup;
