'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Volume2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

const conversationData = {
  daily: [
    { text: "What did you do this weekend?", pronunciation: "�� ��� �� �� �� ���˵�?" },
    { text: "I love this weather today!", pronunciation: "���� ���� �� ���� ������!" },
    { text: "Have you had lunch yet?", pronunciation: "�غ� �� �ص� ��ġ ��?" },
    { text: "What time do you usually wake up?", pronunciation: "�� Ÿ�� �� �� ���־� ����ũ ��?" },
    { text: "This coffee tastes amazing!", pronunciation: "�� Ŀ�� ���̽��� �����¡!" },
    { text: "Where do you live?", pronunciation: "���� �� �� ����?" },
    { text: "How was your day?", pronunciation: "�Ͽ� ���� ���� ����?" },
    { text: "What's your favorite food?", pronunciation: "���� ���� ���̺��� Ǫ��?" },
  ],
  travel: [
    { text: "Where is the nearest subway station?", pronunciation: "���� ���� �� �Ͼ��Ʈ ������ �����̼�?" },
    { text: "How much is this?", pronunciation: "�Ͽ� ��ġ ���� ��?" },
    { text: "Can you recommend a good restaurant?", pronunciation: "ĵ �� ��Ŀ��� �� �� �������?" },
    { text: "What time is check-out?", pronunciation: "�� Ÿ�� ���� üũ�ƿ�?" },
    { text: "I'd like to book a room.", pronunciation: "���̵� ����ũ �� �� �� ��." },
    { text: "How do I get to the airport?", pronunciation: "�Ͽ� �� ���� �� �� �� ������Ʈ?" },
    { text: "Is this the right bus?", pronunciation: "���� �� �� ���� ����?" },
    { text: "Can you take a photo for me?", pronunciation: "ĵ �� ����ũ �� ���� �� ��?" },
  ]
};

export default function EnglishPage() {
  const router = useRouter();
  const [category, setCategory] = useState('daily');
  const [sentences, setSentences] = useState([]);

  const generateRandomSentences = () => {
    const currentData = conversationData[category];
    const shuffled = [...currentData].sort(() => 0.5 - Math.random());
    setSentences(shuffled.slice(0, 5));
  };

  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    window.speechSynthesis.speak(utterance);
  };

  return (
    <main className="container mx-auto p-4">
      <Button 
        variant="ghost" 
        className="mb-4"
        onClick={() => router.push('/')}
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        ���ư���
      </Button>
      
      <h1 className="text-2xl font-bold mb-8">���� ȸȭ ����</h1>
      
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="flex gap-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="category"
              value="daily"
              checked={category === 'daily'}
              onChange={(e) => setCategory(e.target.value)}
              className="mr-2"
            />
            �ϻ� ȸȭ
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="category"
              value="travel"
              checked={category === 'travel'}
              onChange={(e) => setCategory(e.target.value)}
              className="mr-2"
            />
            ���� ȸȭ
          </label>
        </div>

        <Button onClick={generateRandomSentences}>
          ���� �����ϱ�
        </Button>

        {sentences.length > 0 && (
          <Card>
            <CardContent className="p-6">
              {sentences.map((sentence, index) => (
                <div key={index} className="mb-6 last:mb-0">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                      <p className="text-lg mb-1">{sentence.text}</p>
                      <p className="text-gray-600">{sentence.pronunciation}</p>
                    </div>
                    <button
                      onClick={() => speak(sentence.text)}
                      className="p-2 hover:bg-gray-100 rounded-full"
                    >
                      <Volume2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        )}
      </div>
    </main>
  );
}