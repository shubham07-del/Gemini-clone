import { GoogleGenAI } from '@google/genai';
import fs from 'fs';

async function run() {
  // API key is read from .env — never hardcode keys here!
  const ai = new GoogleGenAI({ apiKey: process.env.VITE_GEMINI_API_KEY });
  try {
    const list = await ai.models.list();
    for await (const model of list) {
        console.log(model.name);
    }
  } catch (e) {
    console.error(e);
  }
}
run();
