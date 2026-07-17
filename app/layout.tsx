import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import "./globals.css";

const sans = DM_Sans({ variable: "--font-sans", subsets: ["latin"] });
const display = Fraunces({ variable: "--font-display", subsets: ["latin"] });

const publicUrl = "https://greenesrepair.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(publicUrl),
  title: "Greens Repair | Phone Repair by Alex Greene",
  description: "Personal phone repair from Alex Greene, helping people with their devices since 2018. PC repair coming soon.",
  openGraph: {
    url: publicUrl,
    title: "Greens Repair | Phone Repair by Alex Greene",
    description: "Personal phone repair since 2018. PC repair coming soon.",
    images: [{ url: `${publicUrl}/og.png`, width: 1732, height: 909, alt: "Greens Repair - Phone repair by Alex Greene since 2018" }],
  },
  twitter: { card: "summary_large_image", images: [`${publicUrl}/og.png`] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${sans.variable} ${display.variable}`}>{children}</body></html>;
}
