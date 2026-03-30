import { GoogleGenAI } from '@google/genai';
// API key is read from .env — never hardcode keys here!
const ai = new GoogleGenAI({ apiKey: process.env.VITE_GEMINI_API_KEY });
async function run() {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash',
      contents: "Hello world!",
    });
    console.log("SUCCESS:", response.text);
  } catch (e) {
    console.error("FAILED:", e.message);
  }
}
run();
