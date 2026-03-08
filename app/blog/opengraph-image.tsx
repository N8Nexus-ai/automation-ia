import { ImageResponse } from 'next/og'

export const alt = 'Blog Nexus.ai sobre automacao com n8n, IA e AWS'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'
export const dynamic = 'force-static'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '56px',
          background:
            'linear-gradient(135deg, rgb(10, 15, 30) 0%, rgb(19, 70, 150) 52%, rgb(52, 211, 153) 100%)',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '18px',
            fontSize: 34,
            fontWeight: 700,
            letterSpacing: '-0.02em',
          }}
        >
          <div
            style={{
              width: 22,
              height: 22,
              borderRadius: 999,
              background: 'rgb(52, 211, 153)',
            }}
          />
          Nexus.ai
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '18px',
            maxWidth: '86%',
          }}
        >
          <div
            style={{
              fontSize: 76,
              lineHeight: 1.02,
              fontWeight: 800,
              letterSpacing: '-0.05em',
            }}
          >
            Blog de Automacao com n8n, IA e AWS
          </div>
          <div
            style={{
              fontSize: 30,
              lineHeight: 1.3,
              color: 'rgba(255, 255, 255, 0.82)',
            }}
          >
            Guias praticos para integrar sistemas, reduzir trabalho manual e operar com mais controle.
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            gap: '14px',
            fontSize: 26,
            color: 'rgba(255, 255, 255, 0.88)',
          }}
        >
          <div>#automacao</div>
          <div>#n8n</div>
          <div>#ia</div>
          <div>#aws</div>
        </div>
      </div>
    ),
    size
  )
}
