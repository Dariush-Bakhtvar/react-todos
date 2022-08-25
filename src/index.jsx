import { createRoot } from "react-dom/client";
import App from "./App";
import './asset/Sass/index.scss';
const container = document.querySelector('.container');
const root = createRoot(container);
root.render(<App />);
