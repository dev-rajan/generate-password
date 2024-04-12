import { useState } from "react";

import { copyToClipboard } from "./utils/copyToClipBoard";

import "./App.css";
import { generatePassword } from "./utils/generatePassword";

function App() {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleGeneratePassword = () => {
    setPassword(generatePassword());
  };

  return (
    <>
      <h1
      className="password"
        onClick={() => {
          copyToClipboard(password, setMessage);
        }}
      >
        {password}
      </h1>

      {message && <p>{message}</p>}

      <div className="card">
        <button onClick={handleGeneratePassword}>Generate</button>
        <p>Click the button above to generate a strong password.</p>
      </div>
    </>
  );
}

export default App;
