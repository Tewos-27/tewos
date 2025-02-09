import { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    // Check if the script is already added
    if (!document.getElementById("chatbase-script")) {
      const script = document.createElement("script");
      script.src = "https://www.chatbase.co/embed.min.js";
      script.id = "chatbase-script"; // Ensure script is not duplicated
      script.async = true;
      script.onload = () => {
        if (!window.chatbase) {
          window.chatbase = (...args) => {
            if (!window.chatbase.q) window.chatbase.q = [];
            window.chatbase.q.push(args);
          };
        }
      };
      document.body.appendChild(script);
    }
  }, []);

  return null; // No visible UI, just injecting the script
};

export default Chatbot;
