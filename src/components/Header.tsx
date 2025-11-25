import Link from "next/link";
import Image from "next/image";
import { Michroma, Allan } from "next/font/google";

const michroma = Michroma({
  weight: "400",
  subsets: ["latin"],
});

const allan = Allan({
  weight: "400",
  subsets: ["latin"],
});

const allanBold = Allan({
  weight: "700",
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
        <div className="flex flex-col md:flex-row justify-between items-center py-4 md:h-32 gap-4 md:gap-0">
          <div className="flex items-center gap-4">
            <Image
              src="/images/cybcologo.png"
              alt="Cybco Logo"
              width={60}
              height={60}
              className="h-[41px] md:h-[55px] lg:h-[69px] w-auto pr-[30px] -mt-2"
            />
            <Link href="/" className="flex flex-col gap-0 justify-center">
              <span className={`text-3xl md:text-4xl lg:text-5xl font-bold ${allanBold.className}`} style={{ color: '#042259' }}>
                CYBERNETICS CORPORATION
              </span>
              <span className={`text-sm md:text-base lg:text-lg ${allan.className}`} style={{ color: '#042259' }}>
                MAKING THE FUTURE LOOK EASY
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Image
              src="/images/roboman.png"
              alt="Roboman"
              width={88}
              height={88}
              className="h-[60px] md:h-20 lg:h-[100px] w-auto pr-[30px] scale-x-[-1]"
            />
            <nav className="flex flex-row md:flex-col space-x-6 md:space-x-0 md:space-y-2">
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
      </div>
    </header>
  );
}
