import express, { Request, Response, Router } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { OAuth2Client } from 'google-auth-library';
import jwt from 'jsonwebtoken';

dotenv.config();

const app = express();
const router = Router();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}));

// Google OAuth client
const oauth2Client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET
);

// Interface cho request body
interface GoogleAuthRequest extends Request {
  body: {
    credential: string;
  };
}

// Kiểm tra và xác thực Google token
router.post('/api/auth/google', async (req: GoogleAuthRequest, res: Response) => {
  try {
    const { credential } = req.body;

    // Xác thực token với Google
    const ticket = await oauth2Client.getTokenInfo(credential);

    if (!ticket.email) {
      return res.status(400).json({ message: 'Invalid token' });
    }

    // Tạo JWT token
    const token = jwt.sign(
      {
        email: ticket.email,
        sub: ticket.sub
      },
      process.env.JWT_SECRET || 'your-jwt-secret',
      { expiresIn: '1d' }
    );

    // Trả về thông tin người dùng và token
    res.json({
      token,
      user: {
        email: ticket.email,
        name: ticket.email.split('@')[0],
        picture: null
      }
    });
  } catch (error) {
    console.error('Auth error:', error);
    res.status(500).json({ message: 'Authentication failed' });
  }
});

app.use(router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 