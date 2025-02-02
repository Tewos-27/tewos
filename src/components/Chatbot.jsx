import { useState } from "react";
import axios from "axios";

const Chatbot = () => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = { sender: "user", text: message };
    setChat((prevChat) => [...prevChat, userMessage]);
    setMessage("");

    try {
      const apiKey = "AIzaSyAy52kEPtJjLrHqEDoZfpQ4uAkkUCb0Vi8"; // Replace with your API key
      const systemMessage = "You are a chatbot representing Tewodros. Tewodros is a full-stack developer who specializes in ReactJS, NodeJS, and Flutter. He builds fully responsive websites and web apps. He also has experience in graphic design for social media ads, posters, and brand identity. Answer questions as if you are Tewodros's assistant.";

      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`,
        {
          contents: [
            { parts: [{ text: systemMessage }] }, // Context for chatbot
            { parts: [{ text: message }] } // User's question
          ],
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      const botResponse = response.data.candidates[0].content.parts[0].text;
      setChat((prevChat) => [...prevChat, { sender: "bot", text: botResponse }]);
    } catch (error) {
      console.error("Error:", error);
      setChat((prevChat) => [...prevChat, { sender: "bot", text: "Sorry, an error occurred!" }]);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 p-4 bg-white shadow-lg rounded-lg w-80">
      <div className="h-60 overflow-y-auto p-2 border">
        {chat.map((msg, i) => (
          <p key={i} className={`p-2 ${msg.sender === "user" ? "text-right" : "text-left"}`}>
            <strong>{msg.sender}:</strong> {msg.text}
          </p>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ask me about Tewodros..."
        className="w-full p-2 border rounded"
      />
      <button onClick={sendMessage} className="w-full mt-2 bg-blue-500 text-white p-2 rounded">
        Send
      </button>
    </div>
  );
};

export default Chatbot;
