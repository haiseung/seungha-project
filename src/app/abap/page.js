'use client';
import AbapTools from '@/components/AbapTools';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function AbapPage() {
  const router = useRouter();

  return (
    <main className="container mx-auto p-4">
      <Button 
        variant="ghost" 
        className="mb-4"
        onClick={() => router.push('/')}
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        돌아가기
      </Button>
      <h1 className="text-2xl font-bold mb-8">ABAP Table Generator</h1>
      <AbapTools />
    </main>
  );
}