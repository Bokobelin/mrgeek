import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <div className="flex flex-col gap-4 items-center">
          <h1 className="text-5xl font-bold">MrGeek</h1>
          <p className="text-2xl">Le site web officiel de MrGeek</p>
          <Link href="https://www.youtube.com/@MrGeek915" className="text-2xl underline">YouTube</Link>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}
