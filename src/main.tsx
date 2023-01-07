import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter } from "react-router-dom"
import "font-awesome/css/font-awesome.css";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
