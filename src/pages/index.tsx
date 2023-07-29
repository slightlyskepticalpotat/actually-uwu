import LandingPage from "./LandingPage";
import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import dotenv from "dotenv";

export default function Home() {
  const auth0Domain = process.env.DOMAIN ?? "";
  const auth0ClientId = process.env.CLIENT_ID ?? "";
  const auth0RedirectUri = process.env.REDIRECT_URL ?? "";
  return (
    <>
      <Auth0Provider
        domain={auth0Domain}
        clientId={auth0ClientId}
        authorizationParams={{
          redirect_uri: auth0RedirectUri,
        }}
      >
        <LandingPage />
      </Auth0Provider>
    </>
  );
}