import { model } from "@/ai/providers";
import { weatherTool } from "@/ai/tools";
import { streamText } from "ai";

export async function POST(request: Request) {
  const { messages, selectedModel } = await request.json();

  const result = streamText({
    model: model.languageModel(selectedModel),
    messages,
    tools: {
      weather: weatherTool,
    },
    maxSteps: 5,
  });

  return result.toDataStreamResponse();
} 