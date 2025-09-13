'use client';
import React, { useState, useEffect, useCallback } from 'react';

export default function Home() {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [animationComplete, setAnimationComplete] = useState(false);
  const fullText = 'Preston Horne';
  const typingDuration = 2500;

  const startTyping = useCallback(() => {
    setDisplayText('');
    setAnimationComplete(false);
    const charDelay = typingDuration / fullText.length;
    let charIndex = 0;

    const typeNextChar = () => {
      if (charIndex < fullText.length) {
        setDisplayText(fullText.slice(0, charIndex + 1));
        charIndex++;
        setTimeout(typeNextChar, charDelay);
      } else {
        setAnimationComplete(true);
        setTimeout(() => {
          setShowCursor(false);
        }, 2000);
      }
    };

    typeNextChar();
  }, [fullText, typingDuration]);

  useEffect(() => {
    let cursorInterval: NodeJS.Timeout;

    if (!animationComplete) {
      startTyping();
      cursorInterval = setInterval(() => {
        setShowCursor(prev => !prev);
      }, 500);
    }

    return () => {
      clearInterval(cursorInterval);
    };
  }, [animationComplete, startTyping]);

  return (
    <div className="h-96 flex items-center justify-center">
      <div className="text-3xl sm:text-4xl md:text-5xl font-mono bg-black text-green-300 p-6 sm:p-8 md:p-12 lg:p-16 rounded-xl inline-flex items-center justify-center">
        <span className="flex items-center justify-center relative">
          <span className="invisible">{fullText}</span>
          <span className="absolute inset-0 flex items-center justify-start">{displayText}</span>
          <span
            className={`absolute h-12 sm:h-16 md:h-20 lg:h-24 xl:h-28 w-2 sm:w-3 md:w-4 ml-2 transition-opacity duration-100 ${showCursor ? 'bg-green-400 opacity-100' : 'opacity-0'}`}
            style={{left: `${displayText.length}ch`}}
          />
        </span>
      </div>
    </div>
  );
}