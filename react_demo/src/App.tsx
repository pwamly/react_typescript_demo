import React from "react";
import "./App.css";
import { Home } from "./components/home";

function App() {
  return (
    <Home
      data={[
        { email: "pwamly@gmail.com", name: "baraka", phone: "+255673089337" },
      ]}
    />
  );
}

export default App;
