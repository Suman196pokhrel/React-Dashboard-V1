import react from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import { ContextProvider } from './contexts/ContextProvider';


import App from './App';

const root = ReactDOM.createRoot(document.getElementById("root"))


root.render(
     <ContextProvider>
          <App />
     </ContextProvider>
)