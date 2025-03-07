import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { MsalProvider } from '@azure/msal-react'
import { authConfig } from './config/azure.config.tsx'
import UserProvider from './context/UserContext.tsx'

createRoot(document.getElementById('root')!).render(
  <MsalProvider instance={authConfig} >
    <UserProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserProvider>
  </MsalProvider>
)
