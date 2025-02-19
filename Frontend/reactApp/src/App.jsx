import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");
  const [userInput, setUserInput] = useState("");
  const [serverResponse, setServerResponse] = useState("");

  
  useEffect(() => {
    axios.get("http://localhost:8000/api/get-message")
      .then(response => setMessage(response.data.message))
      .catch(error => console.error("Error fetching message:", error));
  }, []);

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post("http://localhost:8000/api/post-message", { userMessage: userInput });
      setServerResponse(response.data.response);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React Frontend</h1>
      
      {/* Display GET response */}
      <h2>{message}</h2>

      {/* Form to send a POST request */}
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Enter a message" 
          value={userInput} 
          onChange={(e) => setUserInput(e.target.value)} 
        />
        <button type="submit">Send</button>
      </form>

      {/* Display POST response */}
      {serverResponse && <h3>Response: {serverResponse}</h3>}
    </div>
  );
}

export default App;
