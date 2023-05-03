import { Inter } from "next/font/google";
import Navigation from "../../components/Navigation";
import Data from "../../components/Data";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navigation />
      <Data />
    </>
  );
}
