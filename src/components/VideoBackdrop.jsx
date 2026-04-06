import { useState } from 'react';

const FALLBACK_BACKGROUNDS = {
  gold: 'radial-gradient(circle at 20% 20%, rgba(var(--primary-rgb), 0.18), transparent 45%), radial-gradient(circle at 80% 30%, rgba(var(--accent-rgb), 0.12), transparent 40%), linear-gradient(135deg, rgba(var(--color-bg-rgb), 0.9), rgba(var(--color-bg-rgb), 0.7))',
  accent: 'radial-gradient(circle at 25% 25%, rgba(var(--accent-rgb), 0.18), transparent 42%), radial-gradient(circle at 75% 35%, rgba(var(--primary-rgb), 0.14), transparent 38%), linear-gradient(135deg, rgba(var(--color-bg-rgb), 0.92), rgba(var(--color-bg-rgb), 0.72))',
};

export default function VideoBackdrop({
  video,
  overlayOpacity = 0.8,
  fallbackTone = 'gold',
}) {
  const [videoFailed, setVideoFailed] = useState(false);
  const showVideo = Boolean(video) && !videoFailed;

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {showVideo ? (
        <video
          className="w-full h-full object-cover opacity-80 mix-blend-luminosity"
          src={video}
          autoPlay
          loop
          muted
          playsInline
          onError={() => setVideoFailed(true)}
        />
      ) : (
        <div
          className="w-full h-full"
          style={{ background: FALLBACK_BACKGROUNDS[fallbackTone] ?? FALLBACK_BACKGROUNDS.gold }}
        />
      )}

      <div
        className="absolute inset-0"
        style={{ background: `rgba(var(--color-bg-rgb), ${overlayOpacity})` }}
      />
    </div>
  );
}
