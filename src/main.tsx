import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { MsalProvider } from '@azure/msal-react'
import { authConfig } from './config/azure.config.tsx'
import UserProvider from './context/UserContext.tsx'
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleClientId } from './config/google.config.tsx'

createRoot(document.getElementById('root')!).render(
  <MsalProvider instance={authConfig} >
    <GoogleOAuthProvider clientId={GoogleClientId}>
      <UserProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UserProvider>
    </GoogleOAuthProvider>
  </MsalProvider>
);