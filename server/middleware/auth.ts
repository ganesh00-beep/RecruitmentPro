import { Request, Response, NextFunction } from 'express';
import 'express-session';

// Define custom interface to extend Express Session type
declare module 'express-session' {
  interface SessionData {
    userId?: number;
    username?: string;
    isAuthenticated?: boolean;
  }
}

// Extend Express Request type to include session
declare global {
  namespace Express {
    interface Request {
      session: {
        userId?: number;
        username?: string;
        isAuthenticated?: boolean;
        [key: string]: any;
      };
    }
  }
}

// Authentication middleware
export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  if (req.session && req.session.isAuthenticated) {
    return next();
  }
  
  return res.status(401).json({ 
    message: 'Authentication required',
    success: false
  });
};

// Current user middleware
export const currentUser = (req: Request, res: Response, next: NextFunction) => {
  if (req.session && req.session.userId) {
    res.locals.currentUser = {
      id: req.session.userId,
      username: req.session.username
    };
  } else {
    res.locals.currentUser = null;
  }
  
  next();
};