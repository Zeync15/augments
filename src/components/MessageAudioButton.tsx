"use client";
import { useRef } from "react";
import { PiPlayLight} from "react-icons/pi";

const MessageAudioButton: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const playAudio = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play(); // Play if paused
      } else {
        audioRef.current.pause(); // Pause if playing
      }
    }
  };

  return (
    <div>
      <button onClick={playAudio}><PiPlayLight size={30} /></button>
      <audio ref={audioRef} src="/cringe.m4a" preload="auto">
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default MessageAudioButton;
