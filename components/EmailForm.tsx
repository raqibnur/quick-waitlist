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
          placeholder="Join our waiting list..."
          className="lg:w-[300px] py-1.5 px-2.5 rounded-md text-base border border-[#D0D5DD] pl-8"
        />
      </div>
      <button
        disabled={isPending}
        type="submit"
        className="bg-black text-white px-2.5 py-1.5 rounded-md text-base transition-all duration-200 hover:bg-black/60"
      >
        Subscribe
      </button>
    </form>
  );
};

export default EmailForm;
