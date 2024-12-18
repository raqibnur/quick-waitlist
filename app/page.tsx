import EmailForm from "@/components/EmailForm";
import {Tag} from "lucide-react";


export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center gap-2 bg-gray-200 text-black px-4 py-2 rounded-full">
        <Tag
          size={20}
          strokeWidth={2}
          aria-hidden="true"
        />
        <p className="text-md">New Feature</p>
      </div>

      <div>
        <h1
          className="relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-white via-blue-200 to-blue-500 bg-clip-text text-6xl font-extrabold text-transparent text-center select-auto">
          Coming Soon
        </h1>
      </div>

      <div
        className="flex flex-col items-center gap-5 bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 px-10 py-10">
        <h1 className="text-white text-center text-4xl">Join Our Waitlist</h1>
        <p className="text-white text-center">Signup to be the first to know when we launch. <br/>We will let you know
          once we are ready to go on production.</p>
        <EmailForm/>
      </div>

    </div>
  );
}
