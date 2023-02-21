import { useEffect, useState } from "react";

async function fetcher() {
  const response = await fetch("http://192.168.0.24:3001/api");
  const data = await response.json();
  return data;
}

const App = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetcher().then((response) => setMessage(response.data));
  }, []);
  return <div>{message}</div>;
};

export default App;
