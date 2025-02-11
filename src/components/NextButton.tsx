"use client";
import { useRef } from "react";
import { FaRedo } from "react-icons/fa";

const NextButton = () => {
  // Create a reference to the audio element
  const audioRef = useRef<HTMLAudioElement>(null);

  // Function to play the sound
  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div>
      <div
        className="border-2 border-black px-5 py-2 rounded cursor-pointer"
        onClick={playSound}
      >
        <FaRedo size={20} />
      </div>

      {/* Audio element */}
      <audio ref={audioRef} src="/mouse-click.mp3" preload="auto" />
    </div>
  );
};

export default NextButton;
