'use client';
import { useRouter } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Code, MessageCircle } from 'lucide-react';

export default function Home() {
  const router = useRouter();

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-8 text-center">개발 도구</h1>
      <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
        <Card 
          className="cursor-pointer hover:bg-gray-50 transition-colors"
          onClick={() => router.push('/abap')}
        >
          <CardContent className="flex flex-col items-center p-6">
            <Code className="w-12 h-12 mb-4" />
            <h2 className="text-xl font-semibold">ABAP 도구</h2>
          </CardContent>
        </Card>

        <Card 
          className="cursor-pointer hover:bg-gray-50 transition-colors"
          onClick={() => router.push('/english')}
        >
          <CardContent className="flex flex-col items-center p-6">
            <MessageCircle className="w-12 h-12 mb-4" />
            <h2 className="text-xl font-semibold">영어 회화</h2>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}