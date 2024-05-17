import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";


const JetBrainsMono = JetBrains_Mono({ 
  subsets: ["latin"], 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Seba Guerrero | Portafolio",
  description: "Mi Portafolio"
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={JetBrainsMono.variable}>
     <Header />
     <PageTransition>{children}</PageTransition>

      </body>
    </html>
  );
}
