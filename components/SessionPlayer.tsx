"use client";

import { useEffect, useRef, useState } from "react";

export default function SessionPlayer() {
  const video = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (started) video.current?.focus();
  }, [started]);

  function playSession() {
    setStarted(true);
    void video.current?.play().catch(() => {
      // Native controls remain available if the browser blocks playback.
    });
  }

  return <div className={`session-player${started ? " is-playing" : ""}`}>
    <video ref={video} controls={started} tabIndex={started ? 0 : -1} playsInline preload="none" aria-label="Marcelo's acoustic guitar session">
      <source src="/media/guitar-session.mp4" type="video/mp4" />
      Your browser cannot play this video. <a href="/media/guitar-session.mp4">Open the guitar session</a>.
    </video>
    {!started && <button type="button" className="session-cover" onClick={playSession} aria-label="Play acoustic guitar session with sound">
      <span className="session-kicker">FROM MY CAMERA ROLL</span>
      <span className="session-cover-title">a guitar.<br /><em>a voice.</em></span>
      <span className="string-lines" aria-hidden="true">{Array.from({ length: 6 }, (_, i) => <i key={i} />)}</span>
      <span className="session-play"><span className="round-play" aria-hidden="true">▶</span><span>Play the session<small>Acoustic / with sound</small></span><span className="session-duration">00:57</span></span>
    </button>}
  </div>;
}
