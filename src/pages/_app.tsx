import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0/client';

const MyApp: AppType = ({ Component, pageProps }) => {
  
  return (<UserProvider>
            <Component {...pageProps} />
          </UserProvider>);
  
};

export default api.withTRPC(MyApp);


