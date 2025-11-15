import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'  // <- 自定义样式关键：import 全局 css
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
