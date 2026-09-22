"use client";

import { useEffect, useRef, useState } from "react";

function fmt(seconds: number) {
  if (!Number.isFinite(seconds) || seconds <= 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function TrackPlayer({ src, title, note }: { src: string; title: string; note?: string }) {
  const audio = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const el = audio.current;
    if (!el) return;
    const onTime = () => setCurrent(el.currentTime);
    const onMeta = () => setDuration(el.duration || 0);
    const onEnd = () => setPlaying(false);
    el.addEventListener("timeupdate", onTime);
    el.addEventListener("loadedmetadata", onMeta);
    el.addEventListener("ended", onEnd);
    return () => {
      el.removeEventListener("timeupdate", onTime);
      el.removeEventListener("loadedmetadata", onMeta);
      el.removeEventListener("ended", onEnd);
    };
  }, []);

  async function toggle() {
    const el = audio.current;
    if (!el) return;
    if (playing) {
      el.pause();
      setPlaying(false);
      return;
    }
    try {
      await el.play();
      setPlaying(true);
    } catch {
      setPlaying(false);
    }
  }

  return (
    <div className="listen-player">
      <audio ref={audio} src={src} preload="metadata">
        <a href={src}>{title}</a>
      </audio>
      <div className="listen-player-row">
        <button type="button" className="listen-play" onClick={toggle} aria-label={playing ? `Pause ${title}` : `Play ${title}`}>
          {playing ? "❚❚" : "▶"}
        </button>
        <div>
          <h2>{title}</h2>
          {note ? <p>{note}</p> : null}
        </div>
      </div>
      <div className="listen-meter">
        <input type="range" min={0} max={duration || 1} step={0.1} value={current} aria-label={`${title} playback`} onChange={(event) => {
          const el = audio.current;
          if (!el) return;
          const next = Number(event.target.value);
          el.currentTime = next;
          setCurrent(next);
        }} />
        <span>{fmt(current)} / {fmt(duration)}</span>
      </div>
    </div>
  );
}
