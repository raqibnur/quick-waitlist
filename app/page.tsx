import Image from "next/image";
import Github from "/public/github.svg";
import Linkedin from "/public/linkedin.svg";
import Speaker from "/public/speaker.svg";
import Twitter from "/public/twitter.svg";

import EmailForm from "@/components/EmailForm";
import Link from "next/link";

export default function Home() {
  // Data from env
  const siteLogo = process.env.NEXT_PUBLIC_LOGO || Speaker;
  const Title = process.env.NEXT_PUBLIC_HERO_TITLE || "We are coming Soon";
  const Subtitle = process.env.NEXT_PUBLIC_HERO_SUBTITLE || "Stay tuned";
  const LinkedinLink =
    process.env.NEXT_PUBLIC_LINKEDIN || "https://www.linkedin.com/";
  const TwitterLink = process.env.NEXT_PUBLIC_TWITTER || "https://www.x.com/";
  const GithubLink =
    process.env.NEXT_PUBLIC_GITHUB || "https://www.github.com/";

  return (
    <div className="max-w-screen-lg w-full mx-auto relative border-[1.5px] border-[#F0E4D2]">
      <div className="w-full flex flex-col items-center p-4 md:p-20 space-y-4 lg:space-y-6">
        <div className="w-20 md:w-28 h-20 md:h-28 relative">
          <Image src={siteLogo} alt="speaker" fill />
        </div>

        {/* Heading */}
        <div className="text-center mb-4 lg:mb-6 space-y-4 lg:space-y-6">
          <h1 className="text-4xl md:text-[55px] font-semibold leading-none md:leading-tight text-[#482307]">
            {Title}
          </h1>
          <p className="text-lg md:text-[26px] font-normal text-[#A1724E]/60">
            {Subtitle}
          </p>
        </div>

        {/* Form */}
        <div>
          <EmailForm />
          <p className="text-[#B1ACA4] text-[12px] text-center mt-2">
            we care about your data in our{" "}
            <Link
              href="/privacy-policy"
              className="underline transition-all duration-200 hover:text-black/70"
            >
              privacy policy
            </Link>
          </p>
        </div>
        {/* Social Media */}
        <div className="flex gap-2 mt-6">
          <Link href={LinkedinLink} className="relative w-[22px] h-[22px]">
            <Image src={Linkedin} alt="Linkedin" fill />
          </Link>
          <Link href={TwitterLink} className="relative w-[22px] h-[22px]">
            <Image src={Twitter} alt="Twitter" fill />
          </Link>
          <Link href={GithubLink} className="relative w-[22px] h-[22px]">
            <Image src={Github} alt="Github" fill />
          </Link>
        </div>
      </div>


      {/* element */}
      <span className="w-2 h-2 absolute z-10 -top-[1%] -left-[0.5%] block bg-white border border-[#F0E4D2]"></span>
      <span className="w-2 h-2 absolute z-10 -bottom-[1%] -left-[0.5%] block bg-white border border-[#F0E4D2]"></span>
      <span className="w-2 h-2 absolute z-10 -top-[1%] -right-[0.5%] block bg-white border border-[#F0E4D2]"></span>
      <span className="w-2 h-2 absolute z-10 -bottom-[1%] -right-[0.5%] block bg-white border border-[#F0E4D2]"></span>
    </div>
  );
}
