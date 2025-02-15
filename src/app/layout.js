import {Inter,  Open_Sans } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from './lib/registry'

const inter = Inter({ subsets: ["latin"] });
const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Adacubator",
  description: "Your gateway to success on Cardano",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>  
      </body>
    </html>
  );
}
