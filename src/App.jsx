import "./App.css";
import navlogo from "./image/ACCS-Logo.png";

function App() {
  return (
    // Home Page
    <div className="flex w-full h-full">
      {/* Navigation Bar */}
      <div className="flex flex-row justify-between items-center w-full h-[79px] bg-white drop-shadow-lg text-base overflow-hidden">
        {/* Logo */}
        <div className="flex w-fit h-full flex-row items-center ml-24">
          <img
            src={navlogo}
            alt="accs-logo"
            className="flex min-w-[100px] max-w-[100px] min-h-[95px] max-h-[95px] cursor-pointer object-contain"
          />
        </div>
        {/* Navbar Content */}
        <div>content</div>
      </div>
    </div>
  );
}

export default App;
