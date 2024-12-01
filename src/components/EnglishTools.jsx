import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, Volume2, Plane, Coffee } from 'lucide-react';

const EnglishTools = () => {
  const [content, setContent] = useState({ type: '', text: '', pronunciation: '' });

  const speak = (text) => {
    if (!text) return;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    window.speechSynthesis.speak(utterance);
  };

  const categories = [
    {
      name: '일상 회화',
      icon: <MessageCircle className="w-8 h-8" />,
      content: {
        type: 'english',
        text: `A: How was your weekend?
B: Great! I went to the movies.
A: What did you watch?
B: The new action movie. It was amazing!`,
        pronunciation: `하우 워즈 유어 위켄드?
그레잇! 아이 웬트 투 더 무비스.
왓 디드 유 왓치?
더 뉴 액션 무비. 잇 워즈 어메이징!`
      }
    },
    {
      name: '여행 영어',
      icon: <Plane className="w-8 h-8" />,
      content: {
        type: 'english',
        text: `A: Excuse me, where's the check-in counter?
B: It's right over there, next to Gate 3.
A: Thank you! What time is boarding?
B: Boarding starts in 30 minutes.`,
        pronunciation: `익스큐즈 미, 웨어즈 더 체크인 카운터?
잇츠 라잇 오버 데어, 넥스트 투 게잇 쓰리.
땡큐! 왓 타임 이즈 보딩?
보딩 스타츠 인 써티 미닛스.`
      }
    },
    {
      name: '카페 영어',
      icon: <Coffee className="w-8 h-8" />,
      content: {
        type: 'english',
        text: `A: Hi, what can I get for you?
B: I'd like an iced americano, please.
A: What size would you like?
B: Medium size, please.`,
        pronunciation: `하이, 왓 캔 아이 겟 포 유?
아이드 라이크 언 아이스드 아메리카노, 플리즈.
왓 사이즈 우드 유 라이크?
미디엄 사이즈, 플리즈.`
      }
    }
  ];

  return (
    <Card className="w-full max-w-2xl">
      <CardContent className="p-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setContent(category.content)}
              className="flex flex-col items-center p-4 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              {category.icon}
              <span className="mt-2 text-sm text-center">{category.name}</span>
            </button>
          ))}
        </div>
        
        {content.text && (
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold">English</h3>
                <button
                  onClick={() => speak(content.text)}
                  className="p-2 hover:bg-gray-200 rounded-full"
                  aria-label="Speak"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>
              <pre className="text-sm whitespace-pre-wrap">{content.text}</pre>
              <h3 className="font-semibold mt-4 mb-2">발음</h3>
              <pre className="text-sm whitespace-pre-wrap">{content.pronunciation}</pre>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default EnglishTools; 
