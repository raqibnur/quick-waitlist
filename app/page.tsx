import Image from "next/image";
import Speaker from "/public/speaker.svg";
import Twitter from "/public/twitter.svg";
import Github from "/public/github.svg";
import Linkedin from "/public/linkedin.svg";
import { Toaster } from "react-hot-toast";

import Link from "next/link";
import EmailForm from "@/components/EmailForm";

export default function Home() {
  return (
    <>
      <section className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-2">
        <div className="max-w-screen-lg mx-auto relative border-[1.5px] border-[#F0E4D2]">
          <div className="w-full flex flex-col items-center p-4 md:p-20">
            <div className="w-20 md:w-28 h-20 md:h-28 relative">
              <Image
                src={process.env.NEXT_PUBLIC_LOGO || Speaker}
                alt="speaker"
                fill
              />
            </div>
            {/* Heading */}
            <div className="text-center mb-4 lg:mb-6">
              <h1 className="text-4xl  py-2 md:text-[55px] font-semibold leading-none md:leading-tight">
                {process.env.NEXT_PUBLIC_HERO_TITLE || "We are coming Soon"}
              </h1>
              <p className="text-lg md:text-[26px] text-black/30 font-normal">
                {process.env.NEXT_PUBLIC_HERO_SUBTITLE || "Stay tuned"}
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
              <Link
                href={
                  process.env.NEXT_PUBLIC_LINKEDIN ||
                  "https://www.linkedin.com/"
                }
                className="relative w-[22px] h-[22px]"
              >
                <Image src={Linkedin} alt="Linkedin" fill />
              </Link>
              <Link
                href={process.env.NEXT_PUBLIC_TWITTER || "https://www.x.com/"}
                className="relative w-[22px] h-[22px]"
              >
                <Image src={Twitter} alt="Twitter" fill />
              </Link>
              <Link
                href={
                  process.env.NEXT_PUBLIC_GITHUB || "https://www.github.com/"
                }
                className="relative w-[22px] h-[22px]"
              >
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
      </section>
      <Toaster />
    </>
  );
}
