function CTASection() {
  return (
    <section
      id="contact"
      className="flex flex-col w-full h-[500px] items-center justify-center text-center md:mx-auto break-words px-5"
    >
      <p className="text-secondary-500 text-[25px] lg:text-[32px] font-medium mb-4 select-none">
        หมดกังวลทุกเรื่องบัญชีภาษี
      </p>
      <p className="font-semibold text-primary-500 text-[25px] lg:text-[32px] mb-6 select-none">
        เราพร้อมตอบทุกข้อสงสัย
        <br className="flex md:hidden" />
        และดูแลบัญชีภาษีให้คุณ
      </p>
      <a
        href="#form"
        className="flex bg-[#88AD9C] text-center text-white font-medium text-[21px] lg:text-[28px] px-10 py-4 rounded-sm duration-300 ease-in-out hover:scale-105"
      >
        ยินดีให้คำปรึกษา
      </a>
    </section>
  );
}

export default CTASection;
