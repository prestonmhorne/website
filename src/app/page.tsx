'use client';
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [animationComplete, setAnimationComplete] = useState(false);
  const fullText = 'Preston Horne';
  const typingDuration = 2500;

  useEffect(() => {
    let typingInterval: NodeJS.Timeout;
    let cursorTimeout: NodeJS.Timeout;

    const startTyping = () => {
      setDisplayText('');
      setAnimationComplete(false);
      const charDelay = typingDuration / fullText.length;
      let charIndex = 0;

      typingInterval = setInterval(() => {
        if (charIndex < fullText.length) {
          setDisplayText(fullText.slice(0, charIndex + 1));
          charIndex++;
        } else {
          clearInterval(typingInterval);
          setAnimationComplete(true);
          
          // Stop cursor blinking after animation completes
          cursorTimeout = setTimeout(() => {
            setShowCursor(false);
          }, 2000); // Keep cursor for 2 seconds after typing completes
        }
      }, charDelay);
    };

    // Only run animation once when component mounts
    if (!animationComplete) {
      startTyping();
    }

    return () => {
      clearInterval(typingInterval);
      clearTimeout(cursorTimeout);
    };
  }, []); // Empty dependency array ensures this only runs once

  useEffect(() => {
    // Only blink cursor while animation is running
    let cursorInterval: NodeJS.Timeout;
    
    if (!animationComplete) {
      cursorInterval = setInterval(() => {
        setShowCursor(prev => !prev);
      }, 500);
    }

    return () => clearInterval(cursorInterval);
  }, [animationComplete]);

  return (
    <div className="h-96 flex items-center justify-center">
      <div className="text-3xl sm:text-4xl md:text-5xl font-mono bg-black text-green-300 p-6 sm:p-8 md:p-12 lg:p-16 rounded-xl inline-flex items-center justify-center">
        <span className="flex items-center justify-center relative">
          {displayText}
          <span className={`absolute h-12 sm:h-16 md:h-20 lg:h-24 xl:h-28 w-2 sm:w-3 md:w-4 ml-2 transition-opacity duration-100 ${showCursor ? 'bg-green-400 opacity-100' : 'opacity-0'}`} style={{left: '100%'}} />
        </span>
      </div>
    </div>
  );
}