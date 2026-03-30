import { GoogleGenAI } from '@google/genai';

// Initialize the AI with your API key
const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

// This function will be called by your React components when you click "Send"
const runChat = async (prompt) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    
    // Return the response text so we can display it on the screen
    return response.text;
    
  } catch (error) {
    console.error("Error while calling Gemini API:", error);
    return "Sorry, something went wrong!";
  }
}

export default runChat;
