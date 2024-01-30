import Link from "next/link";
import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <section className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-2">
      <div className="max-w-screen-lg border-[1.5px] border-[#F0E4D2] mx-auto relative">
        <div className="flex flex-col items-center p-4 md:p-12">
          <div className="text-center mb-4 lg:mb-6">
            <h1 className="text-2xl md:text-[55px] font-semibold leading-none md:leading-tight">
              Privacy Policy
            </h1>
          </div>
          <p className="text-black/40 font-normal mb-6">
            {process.env.NEXT_PUBLIC_PRIVACY || "Add Privacy Policy From ENV"}
          </p>
          <Link
            href="/"
            className="bg-black text-white px-2.5 py-1.5 rounded-md text-base transition-all duration-200 hover:bg-black/60"
          >
            Back to home
          </Link>
        </div>
        {/* element */}
        <span className="w-2 h-2 absolute z-10 -top-[1%] -left-[0.5%] block bg-white border border-[#F0E4D2]"></span>
        <span className="w-2 h-2 absolute z-10 -bottom-[1%] -left-[0.5%] block bg-white border border-[#F0E4D2]"></span>
        <span className="w-2 h-2 absolute z-10 -top-[1%] -right-[0.5%] block bg-white border border-[#F0E4D2]"></span>
        <span className="w-2 h-2 absolute z-10 -bottom-[1%] -right-[0.5%] block bg-white border border-[#F0E4D2]"></span>
      </div>
    </section>
  );
};

export default PrivacyPolicyPage;
