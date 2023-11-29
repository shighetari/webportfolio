// src/components/BackgroundMusic.tsx
import React, { useState, useEffect } from 'react';
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import '../assets/scss/_backgroundMusic.scss';

const BackgroundMusic = () => {
  const [audio] = useState(new Audio('src/assets/audio/ReflectedLight.mp3'));
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.75); // Default volume level

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing, audio]);

  useEffect(() => {
    audio.loop = true;
    audio.volume = volume;
  }, [audio, volume]);

  const handleVolumeChange = (event: { target: { value: string; }; }) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
    audio.volume = newVolume;
  };

  return (
    <div>
      <button onClick={toggle} className="play-pause-btn">
        {playing ? <FaPause /> : <FaPlay />}
      </button>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleVolumeChange}
        className="volume-slider"
      />
      <div className="volume-icon">
        {volume > 0 ? <FaVolumeUp /> : <FaVolumeMute />}
      </div>
    </div>
  );
};

export default BackgroundMusic;
