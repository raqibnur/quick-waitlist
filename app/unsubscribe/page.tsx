"use client";
import React, { useTransition } from "react";

const UnsubscribePage = () => {
  const [isPending, startTransaction] = useTransition();

  const handleSubmit = () => {
    startTransaction(async () => {
      try {
        const res = await fetch("http://localhost:3000/api/resend", {
          method: "POST",
          body: JSON.stringify(""),
          headers: { "Content-Type": "application/json" },
        });

        if (res.ok) {
          const result = await res.json();
          console.log(result);
        } else {
          console.error("Error:", res.status, res.statusText);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    });
  };
  return (
    <section className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-2">
      <div className="max-w-screen-lg border-[1.5px] border-[#F0E4D2] mx-auto relative">
        <div className="flex flex-col items-center p-4 md:p-12">
          <div className="text-center mb-4 lg:mb-6">
            <h1 className="text-3xl md:text-[55px] font-semibold leading-none md:leading-tight">
              Sorry to see you go!
            </h1>
          </div>

          {/* form to unsubscribe */}

          <button className="bg-black text-white px-2.5 py-1.5 rounded-md text-base transition-all duration-200 hover:bg-black/60">
            Unsubscribe
          </button>
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

export default UnsubscribePage;
