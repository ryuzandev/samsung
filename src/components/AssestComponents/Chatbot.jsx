import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { BsChatDotsFill } from "react-icons/bs";
import axios from "axios";
import "../../componentsCss/Chatbot.css";

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate();

  const handleToggle = () => setOpen(!open);

  const fetchAnswerFromGoogle = async (query) => {
    try {
      const response = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://serpapi.com/search.json`,
        {
          params: {
            q: query,
            api_key:
              "c5f7a6d6111687e786a2ebb7fe9d239fb42efe9592598117898685fb022ef189", // Your API key
          },
        }
      );

      const data = response.data;
      const answer =
        data?.answer_box?.answer ||
        data?.answer_box?.snippet ||
        data?.answer_box?.definition ||
        data?.organic_results?.[0]?.snippet;
      console.log(data);

      return (
        answer ||
        "I couldn't find a direct answer, but you can view the full results on Google."
      );
    } catch (error) {
      console.error("SerpAPI fetch error:", error.message);
      return "Here is your detailed explanation about issue.Try the below link !!😁👌";
    }
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = input.trim();
    const lowerInput = userMsg.toLowerCase();

    setMessages((prev) => [...prev, { from: "user", text: userMsg }]);
    setInput("");

    // Direct keyword routing
    if (lowerInput.includes("tv") || lowerInput.includes("television")) {
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: "Please visit the Television page.",
          route: "/tv",
        },
      ]);
      return;
    }

    if (lowerInput.includes("ac") || lowerInput.includes("air conditioner")) {
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: "Please visit the Air Conditioner page.",
          route: "/aircondition",
        },
      ]);
      return;
    }

    if (lowerInput.includes("microwave")) {
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: "Please visit the Microwave page.",
          route: "/microwave",
        },
      ]);
      return;
    }

    if (lowerInput.includes("washing")) {
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: "Please visit the Washing Machine page.",
          route: "/washing",
        },
      ]);
      return;
    }

    if (lowerInput.includes("refrigerator")) {
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: "Please visit the Refrigerator page.",
          route: "/Refrigerator",
        },
      ]);
      return;
    }

    if (lowerInput.includes("dish washer")) {
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: "Please visit the Dish Washer page.",
          route: "/DishWasher",
        },
      ]);
      return;
    }

    // "Yes" response handler
    if (lowerInput === "yes") {
      const lastBotMsg = messages
        .slice()
        .reverse()
        .find((msg) => msg.from === "bot" && msg.route);
      if (lastBotMsg?.route) {
        navigate(lastBotMsg.route);
        return;
      }
    }

    // Fallback: Google Search
    setMessages((prev) => [
      ...prev,
      { from: "bot", text: "Let me search that for you..." },
    ]);

    const answer = await fetchAnswerFromGoogle(userMsg);

    setMessages((prev) => [
      ...prev.slice(0, -1), // remove temporary "Let me search..." message
      { from: "bot", text: answer },
      {
        from: "bot",
        text: "View more on Google",
        route: `https://www.google.com/search?q=${encodeURIComponent(userMsg)}`,
      },
    ]);
  };

  const handleLinkClick = (route) => {
    if (route.startsWith("http")) {
      window.open(route, "_blank");
    } else {
      navigate(route);
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-icon" onClick={handleToggle}>
        <span>
          <b>AI BOT</b>
        </span>
        <BsChatDotsFill size={35} />
      </div>

      {open && (
        <div className="chatbot-window">
          <div className="chatbot-header">Ask me anything!</div>
          <div className="chatbot-body">
            {messages.map((msg, i) => (
              <div key={i} className={`chatbot-message ${msg.from}`}>
                {msg.route ? (
                  <span
                    className="chatbot-link"
                    onClick={() => handleLinkClick(msg.route)}
                  >
                    {msg.text}
                  </span>
                ) : (
                  msg.text
                )}
              </div>
            ))}
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type here..."
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
