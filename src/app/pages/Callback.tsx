import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router';
import { Loader2 } from 'lucide-react';

export function Callback() {
  const { isAuthenticated, isLoading, error } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading) {
      if (isAuthenticated) {
        // Redirect to home page after successful login
        navigate('/');
      } else if (error) {
        console.error('Authentication error:', error);
        navigate('/');
      }
    }
  }, [isAuthenticated, isLoading, error, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <Loader2 className="w-12 h-12 text-blue-600 animate-spin mx-auto mb-4" />
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          {error ? 'Authentication Error' : 'Completing login...'}
        </h2>
        <p className="text-gray-600">
          {error ? 'Please try again' : 'Please wait while we log you in'}
        </p>
      </div>
    </div>
  );
}
