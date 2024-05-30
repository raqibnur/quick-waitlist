import Card from "@/components/Card";
import CardFooter from "@/components/CardFooter";
import CardHeader from "@/components/CardHeader";
import EmailForm from "@/components/EmailForm";

export default function Home() {
  // Data from env
  const Title = process.env.NEXT_PUBLIC_HERO_TITLE || "We are coming Soon";
  const Subtitle = process.env.NEXT_PUBLIC_HERO_SUBTITLE || "Stay tuned";

  return (
    <Card>
      <CardHeader title={Title} subtitle={Subtitle} />
      <EmailForm />
      <CardFooter />

      {/* element */}
      <span className="w-2 h-2 absolute z-10 -top-[1%] -left-[0.5%] block bg-white border border-[#F0E4D2]"></span>
      <span className="w-2 h-2 absolute z-10 -bottom-[1%] -left-[0.5%] block bg-white border border-[#F0E4D2]"></span>
      <span className="w-2 h-2 absolute z-10 -top-[1%] -right-[0.5%] block bg-white border border-[#F0E4D2]"></span>
      <span className="w-2 h-2 absolute z-10 -bottom-[1%] -right-[0.5%] block bg-white border border-[#F0E4D2]"></span>
    </Card>
  );
}
