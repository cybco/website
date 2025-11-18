"use client";

import { useState } from "react";
import { Allan } from "next/font/google";
import PrivacyModal from "./PrivacyModal";

const allan = Allan({
  weight: "400",
  subsets: ["latin"],
});

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  return (
    <>
      <footer className="bg-black border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className={`flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 ${allan.className}`}>
            <div className="text-white text-base">
              {currentYear} CYBERNETICS CORPORATION
            </div>

            <div className="flex space-x-6">
              <button
                onClick={() => setIsPrivacyOpen(true)}
                className="text-white hover:text-gray-300 transition-colors text-base cursor-pointer"
              >
                Privacy Policy
              </button>
            </div>
          </div>
        </div>
      </footer>

      <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
    </>
  );
}
