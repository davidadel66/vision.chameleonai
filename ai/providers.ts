import { groq } from "@ai-sdk/groq";
import {
  customProvider,
} from "ai";

const languageModels = {
  "llama-3.1-8b-instant": groq(
    "llama-3.1-8b-instant"
  ),
  "meta-llama/llama-4-scout-17b-16e-instruct": groq(
    "meta-llama/llama-4-scout-17b-16e-instruct"
  ),
};

export const model = customProvider({
  languageModels,
});

export type modelID = keyof typeof languageModels;
export const MODELS = Object.keys(languageModels);
export const defaultModel: modelID =
  "meta-llama/llama-4-scout-17b-16e-instruct";


