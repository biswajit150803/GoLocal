import ReactDOM from 'react-dom/client';
import './index.css';
import SSRProvider from 'react-bootstrap/SSRProvider';
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Kommunicate from "@kommunicate/kommunicate-chatbot-plugin";
const root = ReactDOM.createRoot(document.getElementById('root'));
Kommunicate.init("3c3b03eb9abe7001364aa768037402d8f", {
  automaticChatOpenOnNavigation: true,
  popupWidget: true
});
root.render(
        <BrowserRouter>
        
          <SSRProvider>
              <App />
          </SSRProvider>
          
        </BrowserRouter> 

);