// pages/api/secure-submit.js
import { validateCsrfToken } from '@/lib/csrf';

export default async function handler(req, res) {
  const token = req.headers['x-csrf-token'];
  const secret = process.env.SECRET_KEY;

  if (!validateCsrfToken(secret, token)) {
    return res.status(403).json({ message: 'Invalid CSRF Token' });
  }

  // Lanjutkan logika jika token valid
  res.status(200).json({ message: 'CSRF Passed' });
}
