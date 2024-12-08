'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Volume2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

const conversationData = {
  daily: [
    { text: "What did you do this weekend?", pronunciation: "왓 디드 유 두 디스 위켄드?" },
    { text: "I love this weather today!", pronunciation: "아이 러브 디스 웨더 투데이!" },
    { text: "Have you had lunch yet?", pronunciation: "해브 유 해드 런치 옛?" },
    { text: "What time do you usually wake up?", pronunciation: "왓 타임 두 유 유주얼리 웨이크 업?" },
    { text: "This coffee tastes amazing!", pronunciation: "디스 커피 테이스츠 어메이징!" },
    { text: "Where do you live?", pronunciation: "웨어 두 유 리브?" },
    { text: "How was your day?", pronunciation: "하우 워즈 유어 데이?" },
    { text: "What's your favorite food?", pronunciation: "왓츠 유어 페이보릿 푸드?" },
  ],
  travel: [
    { text: "Where is the nearest subway station?", pronunciation: "웨어 이즈 더 니어리스트 섭웨이 스테이션?" },
    { text: "How much is this?", pronunciation: "하우 머치 이즈 디스?" },
    { text: "Can you recommend a good restaurant?", pronunciation: "캔 유 레커멘드 어 굿 레스토랑?" },
    { text: "What time is check-out?", pronunciation: "왓 타임 이즈 체크아웃?" },
    { text: "I'd like to book a room.", pronunciation: "아이드 라이크 투 북 어 룸." },
    { text: "How do I get to the airport?", pronunciation: "하우 두 아이 겟 투 디 에어포트?" },
    { text: "Is this the right bus?", pronunciation: "이즈 디스 더 라잇 버스?" },
    { text: "Can you take a photo for me?", pronunciation: "캔 유 테이크 어 포토 포 미?" },
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
        돌아가기
      </Button>
      
      <h1 className="text-2xl font-bold mb-8">영어 회화 연습</h1>
      
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
            일상 회화
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
            여행 회화
          </label>
        </div>

        <Button onClick={generateRandomSentences}>
          문장 생성하기
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