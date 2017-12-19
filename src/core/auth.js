import { createUserManager } from 'redux-oidc';

const userManagerConfig = {
    client_id: 'client.id',
    redirect_uri: `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}/callback`,
    response_type: 'token id_token',
    scope: 'openid profile',
    authority: 'https://auth.server/',
    silent_redirect_uri: `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}/renew.html`,
    automaticSilentRenew: true,
    filterProtocolClaims: true,
    loadUserInfo: true,
};

export const userManager = createUserManager(userManagerConfig);