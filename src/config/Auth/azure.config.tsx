import { PublicClientApplication } from '@azure/msal-browser';
 
const config : any = {  
  auth: {
    clientId: 'fcf9621e-84a0-46e1-a350-309f686bf012',
    // redirectUri: 'https://delightful-sky-0a0da3f00-preview.eastasia.4.azurestaticapps.net/',
    redirectUri: ' http://localhost:5173/',
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: true
  }
};

export const authConfig = new PublicClientApplication(config)!;