// utils/withAuth.js
import { verify } from 'jsonwebtoken';

export function withAuth(handler) {
  return async (req, res) => {
    console.log('Auth middleware checking token');

    try {
      const token = req.headers.authorization?.split(' ')[1];
      
      if (!token) {
        console.log('No token found in request');
        return res.status(401).json({ message: 'Nicht autorisiert - Token fehlt' });
      }

      if (!process.env.JWT_SECRET) {
        console.error('JWT_SECRET is not set in environment variables');
        return res.status(500).json({ message: 'Server Konfigurationsfehler' });
      }

      try {
        const decoded = verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        console.log('Token verified successfully for user:', decoded.username);
      } catch (jwtError) {
        console.error('JWT verification failed:', jwtError);
        return res.status(401).json({ message: 'Ungültiger Token' });
      }
      
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