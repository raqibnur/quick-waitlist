"use client";
import React, { useTransition } from "react";
import Mail from "/public/mail.svg";
import Image from "next/image";
import toast from "react-hot-toast";

const EmailForm = () => {
  const [isPending, startTransaction] = useTransition();

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const target = event.target as HTMLFormElement;
    const form = new FormData(target);
    const email = form.get("email");

    startTransaction(async () => {
      try {
        const res = await fetch("/api/resend", {
          method: "POST",
          body: JSON.stringify({ email }),
          headers: { "Content-Type": "application/json" },
        });

        if (res.ok) {
          // const result = await res.json();
          target.reset();
          toast.success("Thank you for subscribing 🎉");
        } else {
          console.error("Error:", res.status, res.statusText);
          toast.error("Something went wrong");
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    });
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)} className="flex gap-2">
      <div className="relative">
        <label
          htmlFor="email"
          className="absolute inset-y-0 left-0 pl-2.5 flex items-center"
        >
          <Image src={Mail} alt="mail" />
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          placeholder="Join our waiting list..."
          className="lg:w-[300px] py-2 px-3 rounded-md text-base pl-8 shadow-button-shadow border bg-white/50 focus-visible:outline-none focus-visible:bg-white"
        />
      </div>
      <button
        disabled={isPending}
        type="submit"
        className="bg-gradient-to-b from-white to-[#f8eedb] text-[#482307] shadow-button-shadow font-semibold px-2.5 py-1.5 rounded-md text-base transition-all duration-200 "
      >
        Subscribe
      </button>
    </form>
  );
};

export default EmailForm;
