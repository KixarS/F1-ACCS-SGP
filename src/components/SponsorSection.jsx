import SponsorGrid from "./SponsorGrid";

function SponsorSection() {
  return (
    <section
      id="sponsor"
      className="flex flex-col items-center pt-28 justify-center h-fit pb-10 w-full mx-auto relative"
    >
      <p className="flex text-primary-500 text-[30px] lg:text-[40px] font-semibold mb-4 select-none text-center break-words">
        ส่วนหนึ่งของบริษัทที่วางใจใช้บริการ Acclusive
      </p>
      <SponsorGrid />
    </section>
  );
}

export default SponsorSection;
