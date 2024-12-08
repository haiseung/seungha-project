'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Volume2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

const conversationData = {
  daily: [
    { text: "What did you do this weekend?", pronunciation: "¿Ó µðµå À¯ µÎ µð½º À§ÄËµå?" },
    { text: "I love this weather today!", pronunciation: "¾ÆÀÌ ·¯ºê µð½º ¿þ´õ Åõµ¥ÀÌ!" },
    { text: "Have you had lunch yet?", pronunciation: "ÇØºê À¯ ÇØµå ·±Ä¡ ¿¾?" },
    { text: "What time do you usually wake up?", pronunciation: "¿Ó Å¸ÀÓ µÎ À¯ À¯ÁÖ¾ó¸® ¿þÀÌÅ© ¾÷?" },
    { text: "This coffee tastes amazing!", pronunciation: "µð½º Ä¿ÇÇ Å×ÀÌ½ºÃ÷ ¾î¸ÞÀÌÂ¡!" },
    { text: "Where do you live?", pronunciation: "¿þ¾î µÎ À¯ ¸®ºê?" },
    { text: "How was your day?", pronunciation: "ÇÏ¿ì ¿öÁî À¯¾î µ¥ÀÌ?" },
    { text: "What's your favorite food?", pronunciation: "¿ÓÃ÷ À¯¾î ÆäÀÌº¸¸´ Çªµå?" },
  ],
  travel: [
    { text: "Where is the nearest subway station?", pronunciation: "¿þ¾î ÀÌÁî ´õ ´Ï¾î¸®½ºÆ® ¼·¿þÀÌ ½ºÅ×ÀÌ¼Ç?" },
    { text: "How much is this?", pronunciation: "ÇÏ¿ì ¸ÓÄ¡ ÀÌÁî µð½º?" },
    { text: "Can you recommend a good restaurant?", pronunciation: "Äµ À¯ ·¹Ä¿¸àµå ¾î ±Â ·¹½ºÅä¶û?" },
    { text: "What time is check-out?", pronunciation: "¿Ó Å¸ÀÓ ÀÌÁî Ã¼Å©¾Æ¿ô?" },
    { text: "I'd like to book a room.", pronunciation: "¾ÆÀÌµå ¶óÀÌÅ© Åõ ºÏ ¾î ·ë." },
    { text: "How do I get to the airport?", pronunciation: "ÇÏ¿ì µÎ ¾ÆÀÌ °Ù Åõ µð ¿¡¾îÆ÷Æ®?" },
    { text: "Is this the right bus?", pronunciation: "ÀÌÁî µð½º ´õ ¶óÀÕ ¹ö½º?" },
    { text: "Can you take a photo for me?", pronunciation: "Äµ À¯ Å×ÀÌÅ© ¾î Æ÷Åä Æ÷ ¹Ì?" },
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
        µ¹¾Æ°¡±â
      </Button>
      
      <h1 className="text-2xl font-bold mb-8">¿µ¾î È¸È­ ¿¬½À</h1>
      
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
            ÀÏ»ó È¸È­
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
            ¿©Çà È¸È­
          </label>
        </div>

        <Button onClick={generateRandomSentences}>
          ¹®Àå »ý¼ºÇÏ±â
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