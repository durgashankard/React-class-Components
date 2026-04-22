import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import { DemoClass } from './Class Components/classComponent-Demo.jsx';
import { EventBind } from './Class Components/EventBinding-Classcomponent.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DemoClass />
    <EventBind />
  </StrictMode>,
)
