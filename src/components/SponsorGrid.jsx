import GRLogo from "/image/GRLogo.png";
import YadaLogo from "/image/Yada.png";
import PrismaLogo from "/image/Prisma.png";
import NuraLogo from "/image/Nura.png";
import KanomLogo from "/image/Kanom.png";
import HausLogo from "/image/1575.png";

function SponsorGrid() {
  return (
    <div className="max-w-full">
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-4">
        {/* KOL, อินฟลูเอนเซอร์ */}
        <div className="bg-white overflow-hidden shadow-lg rounded-xl">
          <p className="text-xl text-white bg-primary-500 text-center p-2">
            KOL, อินฟลูเอนเซอร์
          </p>
          <div className="flex p-4 items-center justify-center gap-4">
            <img className="w-32" src={GRLogo} alt="gr" />
          </div>
        </div>

        {/* สุขภาพและความงาม */}
        <div className="bg-white overflow-hidden shadow-lg rounded-xl">
          <p className="text-xl text-white bg-primary-500 text-center p-2">
            สุขภาพและความงาม
          </p>
          <div className="flex p-4 items-center justify-center gap-4">
            <img className="w-32" src={YadaLogo} alt="yd" />
            <img className="w-32" src={PrismaLogo} alt="pr" />
          </div>
        </div>

        {/* กลุ่มค้าขายออนไลน์ */}
        <div className="bg-white overflow-hidden shadow-lg rounded-xl">
          <p className="text-xl text-white bg-primary-500 text-center p-2">
            กลุ่มค้าขายออนไลน์
          </p>
          <div className="flex p-4 items-center justify-center gap-4">
            <img className="w-32" src={NuraLogo} alt="nu" />
            <img className="w-32" src={KanomLogo} alt="kr" />
          </div>
        </div>

        {/* ร้านอาหาร */}
        <div className="bg-white overflow-hidden shadow-lg rounded-xl">
          <p className="text-xl text-white bg-primary-500 text-center p-2">
            ร้านอาหาร
          </p>
          <div className="flex p-4 items-center justify-center gap-4">
            <img className="w-32" src={HausLogo} alt="ha" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SponsorGrid;
