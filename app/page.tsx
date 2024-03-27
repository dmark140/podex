import Image from "next/image";
import Link from "next/link";
import Main from "./podex/main";

export default function Home({
  searchParams,
}: {
  searchParams: {
    page: string;
    per_page: string;
  };
}) {
  const page = searchParams.page === undefined ? 1 : Number(searchParams.page);
  const per_page =
    searchParams.per_page === undefined ? 12 : Number(searchParams.per_page);
  console.log(per_page);
  const start = (page - 1) * per_page;
  const end = start + per_page;
  return (
    <main>
      {/* <Link href="/podex">A</Link> */}
      <div className="max-w-[500px] mx-auto ">
        <Main start={start} end={per_page} page={page} />
        <div className="stats stats-horizontal  shadow w-full">
          <div className="stat w-full">
            <div className="stat-title">Check it on</div>
            <div className="stat-value">
              <a href="https://github.com/dmark140/podex"> GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
