import React, { useState } from "react";
import Profile from "./Profile/Profile";
import "./App.css";

export default function App() {
  const [state, setState] = useState(false);
  return (
    <div className="App">
      <div className="App-header">
        <button onClick={() => setState(!state)}>Profile</button>
        <h1>{state ? null : <Profile />}</h1>
      </div>
    </div>
  );
}
