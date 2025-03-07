import { BrowserCacheLocation, PublicClientApplication } from '@azure/msal-browser';
 
const config : any = {  
  auth: {
    clientId: import.meta.env.VITE_AZURE_CLIENT_ID,
    // redirectUri: 'https://delightful-sky-0a0da3f00-preview.eastasia.4.azurestaticapps.net/',
    redirectUri: 'http://localhost:5173/ ',
  },
  cache: {
    cacheLocation: BrowserCacheLocation.SessionStorage,
    storeAuthStateInCookie: true,
  }
};

export const authConfig = new PublicClientApplication(config)!;