import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CYBERNETICS CORPORATION",
  description: "Welcome to CYBERNETICS CORPORATION",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{
          backgroundImage: 'url(/images/fullbg.png)',
          backgroundRepeat: 'repeat',
        }}
      >
        {children}
      </body>
    </html>
  );
}
