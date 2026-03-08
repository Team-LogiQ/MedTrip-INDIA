import { Auth0Provider as Auth0ProviderSDK } from '@auth0/auth0-react';
import { ReactNode } from 'react';

interface Auth0ProviderProps {
  children: ReactNode;
}

export function Auth0Provider({ children }: Auth0ProviderProps) {
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const audience = import.meta.env.VITE_AUTH0_AUDIENCE;
  const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL || window.location.origin;

  if (!domain || !clientId) {
    console.error('Auth0 configuration is missing');
    return <>{children}</>;
  }

  return (
    <Auth0ProviderSDK
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
        audience: audience,
        scope: 'openid profile email',
      }}
      cacheLocation="localstorage"
    >
      {children}
    </Auth0ProviderSDK>
  );
}
