import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Page } from './components'

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Page />
  </StrictMode>,
)
