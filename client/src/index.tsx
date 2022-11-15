import { createRoot } from "react-dom/client";
import React from "react";

const App = () => {
  const name = "Mary and Jesus";
  return <p>{name}</p>;
};

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<App />);
