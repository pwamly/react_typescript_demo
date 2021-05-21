import React from "react";
import "./App.css";
import { Home } from "./components/home";

const result = {
  email: "pwamly@gmail.com",
  name: "baraka",
  phone: "+255673089337",
};

function App() {
  return <Home data={[result]} />;
}

export default App;
