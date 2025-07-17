import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from "react-redux";
import './index.css'
import Game from './Game.jsx'
import { store } from './store.js';

createRoot(document.getElementById('root')).render(
 <>
 <Provider store = {store}> 
 <Game />
 </Provider>
 </>
   
  
)
