import Image from "next/image";
import Speaker from "/public/speaker.svg";
import Twitter from "/public/twitter.svg";
import Github from "/public/github.svg";
import Linkedin from "/public/linkedin.svg";
import Link from "next/link";

export default function Home() {
  return (
    <section className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-2">
      <div className="max-w-screen-lg mx-auto relative">
        <div className="w-full border-[1.5px] border-[#F0E4D2] flex flex-col items-center p-4 md:p-20">
          <div className="w-20 md:w-28 h-20 md:h-28 relative">
            <Image src={Speaker} alt="speaker" fill/>
          </div>
          {/* Heading */}
          <div className="text-center mb-4 lg:mb-6">
            <h1 className="text-3xl md:text-[55px] font-semibold leading-none md:leading-tight">
              We are coming Soon
            </h1>
            <p className="text-lg md:text-[26px] text-black/30 font-normal">
              An AI directory build for digital nomad
            </p>
          </div>
          {/* Form */}
          <div>
            <form action="" className="flex gap-2">
              <input
                type="email"
                name="email"
                placeholder="Join our waiting list..."
                className="lg:w-[300px] py-1.5 px-2.5 rounded-md text-base border border-[#D0D5DD]"
              />
              <button
                type="submit"
                className="bg-black text-white px-2.5 py-1.5 rounded-md text-base "
              >
                Subscribe
              </button>
            </form>
            <p className="text-[#B1ACA4] text-[12px] text-center mt-2">
              we care about your data in our{" "}
              <Link href="#" className="underline">privacy policy</Link>
            </p>
          </div>
          {/* Social Media */}
          <div className="flex gap-2 mt-6">
            <Link href="#" className="relative w-[22px] h-[22px]">
              <Image src={Linkedin} alt="Linkedin" fill/>
            </Link>
            <Link href="#" className="relative w-[22px] h-[22px]">
              <Image src={Twitter} alt="Twitter" fill/>
            </Link>
            <Link href="#" className="relative w-[22px] h-[22px]">
              <Image src={Github} alt="Github" fill/>
            </Link>
          </div>
        </div>
        {/* element */}
        <span className="w-2 h-2 absolute z-10 -top-[0.5%] -left-[0.5%] block bg-white border border-[#F0E4D2]"></span>
        <span className="w-2 h-2 absolute z-10 -bottom-[0.5%] -left-[0.5%] block bg-white border border-[#F0E4D2]"></span>
        <span className="w-2 h-2 absolute z-10 -top-[0.5%] -right-[0.5%] block bg-white border border-[#F0E4D2]"></span>
        <span className="w-2 h-2 absolute z-10 -bottom-[0.5%] -right-[0.5%] block bg-white border border-[#F0E4D2]"></span>
      </div>
    </section>
  );
}
