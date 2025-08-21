'use client';
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = 'Preston Horne';
  const typingDuration = 2500;
  const pauseDuration = 10000;

  useEffect(() => {
    let typingInterval: NodeJS.Timeout;
    let resetTimeout: NodeJS.Timeout;

    const startTyping = () => {
      setDisplayText('');
      const charDelay = typingDuration / fullText.length;
      let charIndex = 0;

      typingInterval = setInterval(() => {
        if (charIndex < fullText.length) {
          setDisplayText(fullText.slice(0, charIndex + 1));
          charIndex++;
        } else {
          clearInterval(typingInterval);
          resetTimeout = setTimeout(() => {
            startTyping();
          }, pauseDuration);
        }
      }, charDelay);
    };

    startTyping();

    return () => {
      clearInterval(typingInterval);
      clearTimeout(resetTimeout);
    };
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="h-96 flex items-center justify-center">
      <div className="text-3xl sm:text-4xl md:text-5xl font-mono bg-black text-green-300 p-6 sm:p-8 md:p-12 lg:p-16 rounded-xl inline-flex items-center justify-center">
        <span className="flex items-center">
          {displayText}
          <span className={`inline-block w-2 sm:w-3 md:w-4 h-12 sm:h-16 md:h-20 lg:h-24 xl:h-28 bg-green-400 ml-2 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`} />
        </span>
      </div>
    </div>
  );
}