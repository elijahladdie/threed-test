
import { M_PLUS_Code_Latin } from "next/font/google";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import img from "../public/site-bg.jpg";
const inter = M_PLUS_Code_Latin({ subsets: ["latin"] });

 export const metadata = {
  title: "Text to 3D",
  description: "Generates 2D text to 3D dimension text",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={`${inter.className} h-screen flex flex-col justify-between text-blue-200` }
    style={{backgroundImage: `url(${img.src})`,
    backgroundPosition:"center",
    backgroundRepeat: "no-repeat",
    backgroundSize:"cover"}}>
        <Navbar /> 
        {children}
        <Footer />
      </body>
    </html>
  );
}
