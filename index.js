import React from "react";
import { createRoot } from "react-dom/client";

const root = document.querySelector("#root");
createRoot(root).render(React.createElement('h1', {}, 'Hello World'))