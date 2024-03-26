import Image from "next/image";
import Link from "next/link";
import Main from "./podex/main";

export default function Home() {
  return (
    <main>
      {/* <Link href="/podex">A</Link> */}
      <div className="max-w-[500px] mx-auto ">
        <Main />
      </div>
    </main>
  );
}
