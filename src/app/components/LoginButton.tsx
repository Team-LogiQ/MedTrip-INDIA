import { useAuth0 } from '@auth0/auth0-react';
import { LogIn, LogOut, User } from 'lucide-react';

export function LoginButton() {
  const { loginWithRedirect, logout, isAuthenticated, user, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="px-4 py-2 text-gray-600">
        Loading...
      </div>
    );
  }

  if (isAuthenticated && user) {
    return (
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
            {user.picture ? (
              <img
                src={user.picture}
                alt={user.name}
                className="w-8 h-8 rounded-full"
              />
            ) : (
              <User className="w-4 h-4 text-blue-600" />
            )}
          </div>
          <span className="text-gray-700 text-sm font-medium hidden md:block">
            {user.name}
          </span>
        </div>
        <button
          onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
          style={{ fontSize: '0.9rem', fontWeight: 500 }}
        >
          <LogOut className="w-4 h-4" />
          <span className="hidden md:inline">Logout</span>
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => loginWithRedirect()}
      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-teal-500 text-white hover:opacity-90 transition-all"
      style={{ fontSize: '0.9rem', fontWeight: 600 }}
    >
      <LogIn className="w-4 h-4" />
      Login
    </button>
  );
}
