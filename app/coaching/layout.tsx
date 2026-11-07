import { Inter, Instrument_Serif } from "next/font/google";
import "./coaching.css";

const inter = Inter({ subsets: ["latin"], weight: ["400", "600", "800", "900"], variable: "--coaching-inter", display: "swap" });
const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: "italic", variable: "--coaching-serif", display: "swap" });

export default function CoachingLayout({ children }: { children: React.ReactNode }) {
  return <div className={`coaching ${inter.variable} ${serif.variable}`}>{children}</div>;
}
