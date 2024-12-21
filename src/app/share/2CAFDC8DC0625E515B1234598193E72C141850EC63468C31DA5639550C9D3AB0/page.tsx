import Card from '@/components/ui/card';

export default function VideoPage() {
    const code = `&lt;link rel="stylesheet" href="https://cdn.plyr.io/3.7.2/plyr.css"/&gt;
&lt;script src="https://cdn.plyr.io/3.7.2/plyr.polyfilled.js"&gt;&lt;/script&gt;`;

    return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-black text-gray-100">
        <main className="flex flex-col gap-8 row-start-2 items-center">
          <div className="flex flex-col gap-4 items-center">
            <h1 className="text-5xl font-bold">Code pour la vidéo</h1>
            {/* Pass the code as a string to Card */}
            <Card title="index.html" text={code} />
          </div>
        </main>
      </div>
    );
}
