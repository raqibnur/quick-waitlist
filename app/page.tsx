import Image from "next/image";
import Speaker from "/public/speaker.svg";
import Twitter from "/public/twitter.svg";
import Github from "/public/github.svg";
import Linkedin from "/public/linkedin.svg";
import Mail from "/public/mail.svg";
import Link from "next/link";

export default function Home() {
  return (
    <section className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-2">
      <div className="max-w-screen-lg mx-auto relative border-[1.5px] border-[#F0E4D2]">
        <div className="w-full flex flex-col items-center p-4 md:p-20">
          <div className="w-20 md:w-28 h-20 md:h-28 relative">
            <Image src={Speaker} alt="speaker" fill />
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
              <div className="relative">
                <label
                  htmlFor="email"
                  className="absolute inset-y-0 left-0 pl-2.5 flex items-center"
                >
                  <Image src={Mail} alt="mail"/>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Join our waiting list..."
                  className="lg:w-[300px] py-1.5 px-2.5 rounded-md text-base border border-[#D0D5DD] pl-8"
                />
              </div>
              <button
                type="submit"
                className="bg-black text-white px-2.5 py-1.5 rounded-md text-base transition-all duration-200 hover:bg-black/60"
              >
                Subscribe
              </button>
            </form>
            <p className="text-[#B1ACA4] text-[12px] text-center mt-2">
              we care about your data in our{" "}
              <Link href="/privacy-policy" className="underline transition-all duration-200 hover:text-black/70">
                privacy policy
              </Link>
            </p>
          </div>
          {/* Social Media */}
          <div className="flex gap-2 mt-6">
            <Link href="#" className="relative w-[22px] h-[22px]">
              <Image src={Linkedin} alt="Linkedin" fill />
            </Link>
            <Link href="#" className="relative w-[22px] h-[22px]">
              <Image src={Twitter} alt="Twitter" fill />
            </Link>
            <Link href="#" className="relative w-[22px] h-[22px]">
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
  );
}
