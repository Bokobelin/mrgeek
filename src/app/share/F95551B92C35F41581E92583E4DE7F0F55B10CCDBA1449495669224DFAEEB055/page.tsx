import Card from '@/components/ui/card';

export default function VideoPage() {
    const code1 = `int entier;`;
    const code2 = `float reel;`;
    const code3 = `string chaine_de_caracteres;`;
    const code4 = `bool booleen;`;

    return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-black text-gray-100">
        <main className="flex flex-col gap-8 row-start-2 items-center">
          <div className="flex flex-col gap-4 items-center">
            <h1 className="text-5xl font-bold">Code pour la vidéo</h1>
            <Card title="C#" text={code1} />
            <Card title="C#" text={code2} />
            <Card title="C#" text={code3} />
            <Card title="C#" text={code4} />
          </div>
        </main>
      </div>
    );
}
