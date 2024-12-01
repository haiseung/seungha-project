'use client';
import AbapTools from '@/components/AbapTools';
import EnglishTools from '@/components/EnglishTools';

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-8 text-center">ABAP & English Learning Tools</h1>
      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold mb-4">ABAP Table Generator</h2>
          <AbapTools />
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-4">English Conversation Practice</h2>
          <EnglishTools />
        </section>
      </div>
    </main>
  );
}