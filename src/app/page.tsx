'use client';

import React, { useState, useEffect } from 'react';

export default function Home() {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  
  const fullText = 'Preston Horne';
  const typingDuration = 4000; 
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
    <div className="max-w-4xl mx-auto">
      <section className="text-center space-y-32 py-30">
            <div className="flex justify-center">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-mono bg-black text-green-300 p-4 sm:p-6 md:p-8 rounded-lg min-h-[3rem] sm:min-h-[4rem] md:min-h-[5rem] lg:min-h-[6rem] flex items-center whitespace-nowrap overflow-x-auto">
                <span className="text-green-300 flex-shrink-0"></span>
                <span className="flex-shrink-0 ml-2">{displayText}</span>
                <span className={`inline-block w-1 sm:w-2 md:w-2 h-10 md:h-13 lg:h-16 xl:h-18 bg-green-400 ml-1 flex-shrink-0 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}/>
              </div>
        </div>
      </section>
    </div>
  );
}