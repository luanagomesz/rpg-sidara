import { useRef, useState } from 'react'

export function AudioPlayer({ src, title, note }) {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  const toggle = () => {
    const audio = audioRef.current
    if (playing) {
      audio.pause()
    } else {
      audio.play()
    }
    setPlaying(!playing)
  }

  const onTimeUpdate = () => {
    const audio = audioRef.current
    setCurrentTime(audio.currentTime)
    setProgress((audio.currentTime / audio.duration) * 100 || 0)
  }

  const onLoadedMetadata = () => setDuration(audioRef.current.duration)

  const onEnded = () => {
    const audio = audioRef.current
    audio.currentTime = 0
    audio.play()
  }

  const seek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const ratio = (e.clientX - rect.left) / rect.width
    const audio = audioRef.current
    audio.currentTime = ratio * audio.duration
  }

  const fmt = (s) => {
    const m = Math.floor(s / 60)
    const sec = Math.floor(s % 60).toString().padStart(2, '0')
    return `${m}:${sec}`
  }

  return (
    <div className="audio-block">
      <div className="audio-player">
        <audio
          ref={audioRef}
          src={src}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onTimeUpdate={onTimeUpdate}
          onLoadedMetadata={onLoadedMetadata}
          onEnded={onEnded}
        />
        <button className="audio-play" onClick={toggle} aria-label={playing ? 'Pausar' : 'Tocar'}>
          {playing ? (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
              <rect x="2" y="1" width="4" height="12" rx="1" />
              <rect x="8" y="1" width="4" height="12" rx="1" />
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
              <path d="M3 1.5l9 5.5-9 5.5V1.5z" />
            </svg>
          )}
        </button>
        <div className="audio-info">
          <span className="audio-title">{title}</span>
          <div className="audio-track" onClick={seek}>
            <div className="audio-track-fill" style={{ width: `${progress}%` }} />
          </div>
          <div className="audio-times">
            <span>{fmt(currentTime)}</span>
            <span>{duration ? fmt(duration) : '--:--'}</span>
          </div>
        </div>
      </div>
      {note && <div className="audio-note">{note}</div>}
    </div>
  )
}
