import Link from "next/link";
import Image from "next/image";
import { Fugaz_One, Allan } from "next/font/google";

const fugazOne = Fugaz_One({
  weight: "400",
  subsets: ["latin"],
});

const allan = Allan({
  weight: "400",
  subsets: ["latin"],
});

export default function Header() {
  return (
    <header
      className="shadow-sm"
      style={{
        backgroundImage: 'url(/images/fullbg.png)',
        backgroundRepeat: 'repeat',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-32">
          <div className="flex items-center gap-4">
            <Image
              src="/images/roboman.png"
              alt="Roboman"
              width={96}
              height={96}
              className="h-24 w-auto"
            />
            <Link href="/" className="flex flex-col gap-1">
              <span className={`text-2xl md:text-3xl lg:text-[2.625rem] font-bold text-black ${fugazOne.className}`}>
                CYBERNETICS CORPORATION
              </span>
              <span className={`text-base md:text-xl lg:text-2xl text-black ${allan.className}`}>
                MAKING THE FUTURE LOOK EASY
              </span>
            </Link>
          </div>

          <nav className="flex flex-col space-y-2">
            <Link
              href="/"
              className="text-black hover:text-gray-700 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/contact"
              className="text-black hover:text-gray-700 transition-colors"
            >
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
