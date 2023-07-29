import LandingPage from "./LandingPage";
import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';

export default function Home() {
  return (
    <>
      <Auth0Provider
         domain="dev-z470o12bjq8b68ip.us.auth0.com"
         clientId="bl5dRsNTPOvE9GCb8mI0mFtNMYb6kSRq"
         authorizationParams={{
           redirect_uri: "http://localhost:3001/SurveyPage"
         }}
      >
          <LandingPage/>
        </Auth0Provider>
      </>
  );
}
