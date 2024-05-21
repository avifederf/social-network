import Image from "next/image";
import styles from "./page.module.css";

import Navbar from "@/utils/components/navbar/Navbar";
import Online_friends from "@/utils/components/online_friends/online_friends";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Online_friends />
    </main>
  );
}
