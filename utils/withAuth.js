import { verify } from 'jsonwebtoken';

export function withAuth(handler) {
  return async (req, res) => {
    try {
      // Check for authorization header
      const token = req.headers.authorization?.split(' ')[1];
      
      if (!token) {
        return res.status(401).json({ message: 'Nicht autorisiert - Token fehlt' });
      }

      if (!process.env.JWT_SECRET) {
        console.error('JWT_SECRET is not set in environment variables');
        return res.status(500).json({ message: 'Server Konfigurationsfehler' });
      }

      try {
        // Verify the JWT token
        const decoded = verify(token, process.env.JWT_SECRET);
        req.user = decoded;
      } catch (jwtError) {
        console.error('JWT verification failed:', jwtError);
        return res.status(401).json({ message: 'Ungültiger Token' });
      }
      
      // If token is valid, proceed with the original request handler
      return handler(req, res);
    } catch (error) {
      console.error('Auth middleware error:', error);
      return res.status(500).json({ 
        message: 'Interner Server Fehler in der Auth Middleware',
        error: error.message 
      });
    }
  };
}