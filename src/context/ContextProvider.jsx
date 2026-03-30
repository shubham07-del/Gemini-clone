import React, { createContext, useEffect, useState } from "react";
import runChat from "../config/Gemini";

export const ContextData = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(false);

  
  const [prevPrompt, setPrevPrompt] = useState(() => {
    const saved = localStorage.getItem("recentChats");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("recentChats", JSON.stringify(prevPrompt));
  }, [prevPrompt]);
  const [resultData, setResultData] = useState("");

  const delayPara = (index, nextWord) => {
    setTimeout(() => {
      setResultData((prev) => prev + nextWord);
    }, 75 * index);
  };



  

  const newChat = ()=>{
    setLoading(false)
    setShowResults(false)
  }

  const onSent = async (prompt) => {
    setResultData("");
    setRecentPrompt("");
    setLoading(true);
    setShowResults(true);
    let response;
    try {
      if (prompt !== undefined) {
        response = await runChat(prompt);
        setRecentPrompt(prompt);
      } else {
        setPrevPrompt((prev) => [...prev, input]);
        setRecentPrompt(input);
        response = await runChat(input);
      }
    } catch (err) {
      console.error("onSent error:", err);
      response = "Something went wrong. Please try again.";
    }

    // Guard: if API returned nothing, show a safe message
    if (!response || typeof response !== "string") {
      response = "Something went wrong. Please check your API key and try again.";
    }

    let responseArray = response.split("**");
    let newResponse = "";

    for (let i = 0; i < responseArray.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        newResponse += responseArray[i];
      } else {
        newResponse += "<b>" + responseArray[i] + "</b>";
      }
    }

    let newRespnse2 = newResponse.split("*").join("</br>");

    let newResponseArray = newRespnse2.split(" ");

    for (let i = 0; i < newResponseArray.length; i++) {
      const nextWord = newResponseArray[i];
      delayPara(i, nextWord + " ");
    }
    setLoading(false);
    setInput("");

    console.log(response);
  };

  // useEffect(() => {
  //     onSent("what is react")
  // }, [])

  const contextValue = {
    prevPrompt,
    setPrevPrompt,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResults,
    loading,
    resultData,
    input,
    setInput,
    newChat
  };
  return (
    <ContextData.Provider value={contextValue}>
      {props.children}
    </ContextData.Provider>
  );
};

export default ContextProvider;
