'use client';

import React, { useState, useEffect } from 'react';

export default function Home() {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  const fullText = 'Preston Horne';
  const typingDuration = 10000; // 10 seconds to type
  const pauseDuration = 10000; // 10 seconds pause before repeating
  
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
          
          // Wait 10 seconds before restarting
          resetTimeout = setTimeout(() => {
            startTyping();
          }, pauseDuration);
        }
      }, charDelay);
    };
    
    // Start the first animation
    startTyping();
    
    return () => {
      clearInterval(typingInterval);
      clearTimeout(resetTimeout);
    };
  }, []);
  
  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    
    return () => clearInterval(cursorInterval);
  }, []);
  
  return (
    <div className="max-w-4xl mx-auto h-full flex flex-col justify-center">
      {/* Hero Section with equal spacing */}
      <section className="text-center flex flex-col justify-center space-y-24 md:space-y-32 py-8">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Welcome!
          </h1>
        </div>
        
        <div className="flex justify-center">
          <div className="text-2xl md:text-4xl lg:text-5xl font-mono bg-black text-green-400 p-6 md:p-8 rounded-lg inline-block min-h-[4rem] md:min-h-[6rem] flex items-center">
            <span className="mr-3 text-green-300">$</span>
            <span className="mr-2">echo &quot;</span>
            <span>{displayText}</span>
            <span className="mr-2">&quot;</span>
            <span 
              className={`inline-block w-3 md:w-4 h-8 md:h-12 lg:h-16 bg-green-400 ml-2 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}
            />
          </div>
        </div>
        
        {/* Spacer div to balance the layout */}
        <div></div>
      </section>
    </div>
  );
}