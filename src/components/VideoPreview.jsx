import { useEffect, useRef, useState } from 'react';

export default function VideoPreview({ src, className = '', poster, eager = false, label }) {
  const videoRef = useRef(null);
  const [visible, setVisible] = useState(eager);

  useEffect(() => {
    const element = videoRef.current;
    if (!element) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting || eager),
      { rootMargin: '180px 0px', threshold: 0.1 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [eager]);

  useEffect(() => {
    const element = videoRef.current;
    if (!element || !visible) return undefined;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced && !eager) return undefined;
    element.play().catch(() => {});
    return undefined;
  }, [visible, eager]);

  const play = () => {
    videoRef.current?.play().catch(() => {});
  };

  const pause = () => {
    if (!videoRef.current) return;
    if (!eager) videoRef.current.pause();
  };

  return (
    <video
      ref={videoRef}
      className={className}
      src={visible ? src : undefined}
      poster={poster}
      muted
      loop
      playsInline
      autoPlay={eager}
      preload={eager ? 'metadata' : 'none'}
      aria-label={label}
      onMouseEnter={play}
      onMouseLeave={pause}
    />
  );
}
