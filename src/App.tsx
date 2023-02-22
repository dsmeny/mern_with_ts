import { useEffect, useState } from "react";
import { fetcher } from "./util/util";

interface Message {
  message: string;
}

const App = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    fetcher().then((response) => {
      if (!response.message.length) {
        setMessages(response.message);
        return;
      }
      setMessages(() => response.message);
    });
  }, []);

  if (!messages.length) {
    return <div>No messages found</div>;
  }

  return (
    <div>
      <ul>
        {messages.map((msg) => (
          <li>{msg.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
