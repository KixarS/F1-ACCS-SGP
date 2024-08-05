import GRLogo from "/image/GRLogo.png";
import YadaLogo from "/image/Yada.png";
import PrismaLogo from "/image/Prisma.png";
import NuraLogo from "/image/Nura.png";
import KanomLogo from "/image/Kanom.png";
import HausLogo from "/image/1575.png";

function SponsorSlide() {
  return (
    <div className="wrapper h-[300px] w-full mt-10 flex justify-center items-center">
      <div className="item item1 flex justify-center max-w-fit min-w-fit max-h-fit min-h-fit ">
        <img
          src={GRLogo}
          alt="grlogo"
          className="object-cover min-w-[200px] max-w-[200px] min-h-[200px] max-h-[200px]"
        />
      </div>
      <div className="item item2 flex justify-center max-w-fit min-w-fit max-h-fit min-h-fit">
        <img
          src={YadaLogo}
          alt="youngdo"
          className="object-cover min-w-[150px] max-w-[200px] min-h-[150px] max-h-[200px]"
        />
      </div>
      <div className="item item3 flex justify-center max-w-fit min-w-fit max-h-fit min-h-fit">
        <img
          src={NuraLogo}
          alt="nura"
          className="object-cover min-w-[250px] max-w-[250px] min-h-[250px] max-h-[250px]"
        />
      </div>
      <div className="item item4 flex justify-center max-w-fit min-w-fit max-h-fit min-h-fit">
        <img
          src={KanomLogo}
          alt="kanom"
          className="object-cover min-w-[200px] max-w-[200px] min-h-[200px] max-h-[200px]"
        />
      </div>
      <div className="item item5 flex justify-center max-w-fit min-w-fit max-h-fit min-h-fit">
        <img
          src={PrismaLogo}
          alt="pismo"
          className="object-cover min-w-[200px] max-w-[200px] min-h-[200px] max-h-[200px]"
        />
      </div>
      <div className="item item6 flex justify-center max-w-fit min-w-fit max-h-fit min-h-fit">
        <img
          src={HausLogo}
          alt="haus"
          className="object-cover min-w-[200px] max-w-[200px] min-h-[200px] max-h-[200px]"
        />
      </div>
    </div>
  );
}

export default SponsorSlide;
