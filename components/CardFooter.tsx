import Image from "next/image";
import Link from "next/link";
import Github from "/public/github.svg";
import Linkedin from "/public/linkedin.svg";
import Twitter from "/public/twitter.svg";
const LinkedinLink = process.env.NEXT_PUBLIC_LINKEDIN || "https://www.linkedin.com/";
const TwitterLink = process.env.NEXT_PUBLIC_TWITTER || "https://www.x.com/";
const GithubLink = process.env.NEXT_PUBLIC_GITHUB || "https://www.github.com/";

const CardFooter = () => {
  return (
    <div>
      <p className="text-[#B1ACA4] text-[12px] text-center mt-2">
        we care about your data in our{" "}
        <Link
          href="/privacy-policy"
          className="underline transition-all duration-200 hover:text-black/70"
        >
          privacy policy
        </Link>
      </p>
      {/* Social Media */}
      <div className="flex justify-center items-center gap-2 mt-6">
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
  );
};

export default CardFooter;
