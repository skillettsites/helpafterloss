import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Help After Loss - Compassionate Bereavement Guidance';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #e0f2fe 0%, #fafaf9 40%, #fffbeb 100%)',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '40px 80px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 80,
              height: 80,
              borderRadius: '50%',
              backgroundColor: '#0369a1',
              marginBottom: 32,
            }}
          >
            <svg
              width="44"
              height="44"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h1
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: '#334155',
              lineHeight: 1.1,
              marginBottom: 20,
            }}
          >
            Help After Loss
          </h1>
          <p
            style={{
              fontSize: 28,
              color: '#64748b',
              lineHeight: 1.4,
              maxWidth: 700,
            }}
          >
            Free guidance for when someone dies in the UK
          </p>
          <div
            style={{
              display: 'flex',
              marginTop: 40,
              gap: 16,
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '10px 20px',
                backgroundColor: '#0369a1',
                color: 'white',
                borderRadius: 12,
                fontSize: 18,
                fontWeight: 600,
              }}
            >
              Personalised checklist
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '10px 20px',
                backgroundColor: 'white',
                color: '#0369a1',
                borderRadius: 12,
                fontSize: 18,
                fontWeight: 600,
                border: '2px solid #e0f2fe',
              }}
            >
              100% free
            </div>
          </div>
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 24,
            fontSize: 16,
            color: '#94a3b8',
          }}
        >
          helpafterloss.co.uk
        </div>
      </div>
    ),
    { ...size }
  );
}
