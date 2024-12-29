import Link from "next/link";

export default function VideoPage() {

    return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-black text-gray-100">
        <main className="flex flex-col gap-8 row-start-2 items-center">
          <div className="flex flex-col gap-4 items-center">
            <h1 className="text-5xl font-bold">Liens pour la vidéo</h1>
                <Link href="https://github.com/Bokobelin/Worldjs">GitHub</Link>
          </div>
        </main>
      </div>
    );
}
