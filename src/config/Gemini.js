import Groq from 'groq-sdk';

// This function will be called by your React components when you click "Send"
const runChat = async (prompt) => {
  try {
    // Initialize inside the function so a missing key doesn't crash the whole app
    const groq = new Groq({
      apiKey: import.meta.env.VITE_GROQ_API_KEY,
      dangerouslyAllowBrowser: true,
    });

    const response = await groq.chat.completions.create({
      model: 'llama-3.3-70b-versatile',
      messages: [
        { role: 'user', content: prompt }
      ],
    });

    return response.choices[0].message.content;

  } catch (error) {
    console.error("Error while calling Groq API:", error);
    return "Sorry, something went wrong! " + error.message;
  }
}

export default runChat;
