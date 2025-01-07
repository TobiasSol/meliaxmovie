import { verify } from 'jsonwebtoken';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
      return res.status(401).json({ message: 'Kein Token vorhanden' });
    }

    // Verifiziere den Token
    try {
      const decoded = verify(token, process.env.JWT_SECRET);
      return res.status(200).json({ 
        valid: true, 
        user: { 
          username: decoded.username 
        } 
      });
    } catch (error) {
      console.error('Token verification failed:', error);
      return res.status(401).json({ message: 'Ungültiger Token' });
    }
  } catch (error) {
    console.error('Auth error:', error);
    return res.status(500).json({ 
      message: 'Interner Server Fehler',
      error: error.message 
    });
  }
}