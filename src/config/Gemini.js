import Groq from 'groq-sdk';

// Initialize Groq with your API key
const groq = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  dangerouslyAllowBrowser: true,
});

// This function will be called by your React components when you click "Send"
const runChat = async (prompt) => {
  try {
    const response = await groq.chat.completions.create({
      model: 'llama-3.3-70b-versatile',
      messages: [
        { role: 'user', content: prompt }
      ],
    });

    // Return the response text
    return response.choices[0].message.content;

  } catch (error) {
    console.error("Error while calling Groq API:", error);
    return "Sorry, something went wrong! " + error.message;
  }
}

export default runChat;
