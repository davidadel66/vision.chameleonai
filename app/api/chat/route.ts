import { model } from '@/ai/providers';
import { weatherTool, stockDataTool } from '@/ai/tools';
import { streamText } from 'ai';

export async function POST(request: Request) {
  // Debug logging - we'll remove this after
  // console.log('API Key present:', !!process.env.GROQ_API_KEY);
  // console.log('API Key length:', process.env.GROQ_API_KEY?.length || 0);

  const { messages, selectedModel } = await request.json();

  const result = streamText({
    model: model.languageModel(selectedModel),
    messages,
    tools: {
      weather: weatherTool,
      stockData: stockDataTool,
    },
    maxSteps: 5,
  });

  return result.toDataStreamResponse();
}
