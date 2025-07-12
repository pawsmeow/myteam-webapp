import { createElement } from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom/client";

const App = () => createElement('h1', {
  style: { textAlign: 'center', marginTop: '40px', color: '#4F46E5' }
}, 'Hello from MyTeam MLBB!');

createRoot(document.getElementById('root')).render(createElement(App));
