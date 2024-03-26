import Image from "next/image";
import Link from "next/link";
import Main from "./podex/main";

export default function Home({
  searchParams,
}: {
  searchParams: {
    page: string;
  };
}) {
  const page = searchParams.page === undefined ? 1 : Number(searchParams.page);
  console.log(page);
  const per_page = 15;
  const start = (page - 1) * per_page;
  const end = start + per_page;
  return (
    <main>
      {/* <Link href="/podex">A</Link> */}
      <div className="max-w-[500px] mx-auto ">
        <Main start={start} end={per_page} page={page} />
      </div>
    </main>
  );
}
