import Image from "next/image";
import Speaker from "/public/speaker.svg";
const siteLogo = process.env.NEXT_PUBLIC_LOGO || Speaker;

const CardHeader = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div>
      <div className="w-20 md:w-28 h-20 md:h-28 relative mx-auto">
        <Image src={siteLogo} alt="speaker" fill />
      </div>
      <div className="text-center mb-4 lg:mb-6 space-y-4 lg:space-y-6">
        <h1 className="text-4xl md:text-[55px] font-semibold leading-none md:leading-tight text-[#482307]">
          {title}
        </h1>
        <p className="text-lg md:text-[26px] font-normal text-[#A1724E]/60">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default CardHeader;
