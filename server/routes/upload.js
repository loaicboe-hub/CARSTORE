import { Router } from 'express';
import crypto from 'crypto';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { requireAuth } from '../utils/auth.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const UPLOADS_DIR = path.join(__dirname, '../../public/uploads');

const router = Router();

// Ensure upload directory exists
try {
  if (!fs.existsSync(UPLOADS_DIR)) {
    fs.mkdirSync(UPLOADS_DIR, { recursive: true });
  }
} catch (e) {
  console.warn('[Uploads] Could not create uploads dir:', e.message);
}

const ALLOWED_MIME_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
const MAX_SIZE_BYTES = 5 * 1024 * 1024; // 5 MB

/**
 * POST /api/upload
 * Securely upload a vehicle photo (base64 data URL payload)
 */
router.post('/', requireAuth, (req, res) => {
  try {
    const { imageBase64, fileName = 'car_photo.jpg' } = req.body;

    if (!imageBase64 || typeof imageBase64 !== 'string') {
      return res.status(400).json({ success: false, error: 'No image data provided.' });
    }

    // Match data:[<mediatype>];base64,<data>
    const matches = imageBase64.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
    if (!matches || matches.length !== 3) {
      return res.status(400).json({
        success: false,
        error: 'Invalid image format. Expected Base64 data URL (e.g. data:image/jpeg;base64,...).',
      });
    }

    const mimeType = matches[1].toLowerCase();
    const base64Data = matches[2];
    const buffer = Buffer.from(base64Data, 'base64');

    // Validate mime type
    if (!ALLOWED_MIME_TYPES.includes(mimeType)) {
      return res.status(400).json({
        success: false,
        error: `Unsupported image format (${mimeType}). Allowed formats: JPEG, PNG, WEBP.`,
      });
    }

    // Validate size limit (5MB)
    if (buffer.length > MAX_SIZE_BYTES) {
      return res.status(400).json({
        success: false,
        error: `Image size exceeds the 5MB maximum limit (Current size: ${(buffer.length / (1024 * 1024)).toFixed(2)} MB).`,
      });
    }

    // Determine extension
    const ext = mimeType === 'image/png' ? '.png' : mimeType === 'image/webp' ? '.webp' : '.jpg';
    const safeName = `cust_img_${Date.now()}_${crypto.randomBytes(4).toString('hex')}${ext}`;
    const filePath = path.join(UPLOADS_DIR, safeName);

    fs.writeFileSync(filePath, buffer);

    const publicUrl = `/uploads/${safeName}`;

    res.status(201).json({
      success: true,
      url: publicUrl,
      sizeBytes: buffer.length,
      mimeType,
      message: 'Photo uploaded and verified successfully.',
    });
  } catch (err) {
    console.error('[Upload] Error saving image:', err);
    res.status(500).json({ success: false, error: 'Failed to process and store vehicle image.' });
  }
});

export default router;
