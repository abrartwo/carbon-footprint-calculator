import { Delius } from "next/font/google";
import "./globals.css";

const delius = Delius({
  weight: "400",
  variable: "--font-delius",
  subsets: ["latin"],
});

export const metadata = {
  title: "Urban Bangladeshi university carbon-footprint calculator",
  description: "Urban Bangladeshi university carbon-footprint calculator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${delius.variable} antialiased`}>{children}</body>
    </html>
  );
}
