import MainLayout from "@/components/MainLayout";
import Image from "next/image";

export default function ThankYou() {
  return (
    <MainLayout>
      <div className="w-full">
        <Image
          src="/images/thankyoubg.png"
          alt="Thank you"
          width={2674}
          height={1711}
          className="w-full h-auto"
          priority
        />
      </div>
    </MainLayout>
  );
}
