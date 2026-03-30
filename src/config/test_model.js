import { GoogleGenAI } from '@google/genai';
const ai = new GoogleGenAI({ apiKey: 'AIzaSyBdS_jdTRGO2K3EjfpZaQPdNZ9i6BWWjcU' });
async function run() {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: "Hello world!",
    });
    console.log("SUCCESS:", response.text);
  } catch (e) {
    console.error("FAILED:", e.message);
  }
}
run();
