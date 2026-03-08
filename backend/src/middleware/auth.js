import { auth } from 'express-oauth2-jwt-bearer';

// Auth0 JWT verification middleware
export const checkJwt = auth({
  audience: process.env.AUTH0_AUDIENCE,
  issuerBaseURL: `https://${process.env.AUTH0_DOMAIN}/`,
  tokenSigningAlg: 'RS256'
});

// Optional authentication - doesn't fail if no token
export const optionalAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return next();
  }
  
  return checkJwt(req, res, next);
};

// Check if user has admin role
export const requireAdmin = (req, res, next) => {
  const permissions = req.auth?.permissions || [];
  
  if (!permissions.includes('admin:access')) {
    return res.status(403).json({
      success: false,
      message: 'Admin access required'
    });
  }
  
  next();
};
