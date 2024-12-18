"use client";
import {SyntheticEvent, useState} from "react";
import {sendMail} from "@/lib/send-mail";
import toast from "react-hot-toast";
import { Hourglass, LoaderCircle, Mail, User } from "lucide-react";

const EmailForm = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    const target = event.target as HTMLFormElement;
    const form = new FormData(target);
    const email = form.get("email") as string;
    try {
      setLoading(true);
      await sendMail({
        sendTo: email,
        subject: "You’re on the waitlist for",
      });
      target.reset();
      toast.success("Thank you for subscribing 🎉");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return <div>
    <form onSubmit={(e) => handleSubmit(e)} className="space-y-5">
      <div className="relative w-fit">
        <input
          type="email"
          name="email"
          id="email"
          required
          className="outline-none bg-black text-white px-5 py-4 rounded-full min-w-[500px]"
          placeholder="Enter your email"
        />
        <button type="submit"
                className="absolute flex items-center justify-center top-1/2 right-1.5 w-36 z-10 bg-white text-black h-4/5 -translate-y-1/2 rounded-full gap-1 disabled:opacity-80"
                disabled={loading}>
          {
            loading && <LoaderCircle
              className="animate-spin"
              size={18}
              strokeWidth={2}
              aria-hidden="true"
            />
          }
          Join Waitlist
        </button>
      </div>
    </form>

  </div>;
};


export default EmailForm;