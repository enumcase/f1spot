import { ImageResponse } from 'next/og';

// Route segment config
export const size = {
  width: 16,
  height: 16,
};
export const contentType = 'image/x-icon';

// Image generation
export default function FaviconIco() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 12,
          background: 'linear-gradient(135deg, #FF1E00 0%, #DC143C 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          fontFamily: 'system-ui',
        }}
      >
        F1
      </div>
    ),
    {
      ...size,
    }
  );
} 