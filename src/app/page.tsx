import MainLayout from "@/components/MainLayout";
import Image from "next/image";

export default function Home() {
  return (
    <MainLayout>
      <div className="w-full">
        <Image
          src="/images/mainbg.png"
          alt="Main background"
          width={2674}
          height={1711}
          className="w-full h-auto"
          priority
        />
      </div>
    </MainLayout>
  );
}
