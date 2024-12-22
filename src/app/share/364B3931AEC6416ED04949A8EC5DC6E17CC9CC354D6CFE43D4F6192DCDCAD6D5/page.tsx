import Card from '@/components/ui/card';

export default function VideoPage() {
    const code1 = `class Program
{
    int compteur = 0;
    static void IncrementCompteur(int compteur)
    {
        compteur += 1;
    }

    public static void Main()
    {
        IncrementCompteur(compteur);
    }
}`;

    const code2 = `class Program
{
    int compteur = 0;
    static void IncrementCompteur(ref int compteur)
    {
        compteur += 1;
    }

    public static void Main()
    {
        IncrementCompteur(ref compteur);
    }
}`;

    return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-black text-gray-100">
        <main className="flex flex-col gap-8 row-start-2 items-center">
          <div className="flex flex-col gap-4 items-center">
            <h1 className="text-5xl font-bold">Code pour la vidéo</h1>
            <h3 className='text-2xl font-bold'>Mauvais code</h3>
            <Card title="C#" text={code1} />
            <h3 className='text-2xl font-bold'>Bon code</h3>
            <Card title="C#" text={code2} />
          </div>
        </main>
      </div>
    );
}
