'use client';

import React, { useState, useEffect } from 'react';

export default function Home() {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  
  const fullText = 'Preston Horne';
  const typingDuration = 10000; // 10 seconds to type
  const pauseDuration = 10000; // 10 seconds pause before repeating
  
  useEffect(() => {
    let typingInterval: NodeJS.Timeout;
    let resetTimeout: NodeJS.Timeout;
    
    const startTyping = () => {
      setIsTyping(true);
      setDisplayText('');
      
      const charDelay = typingDuration / fullText.length;
      let charIndex = 0;
      
      typingInterval = setInterval(() => {
        if (charIndex < fullText.length) {
          setDisplayText(fullText.slice(0, charIndex + 1));
          charIndex++;
        } else {
          clearInterval(typingInterval);
          setIsTyping(false);
          
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
    <div className="max-w-4xl mx-auto">
      {/* Hero Section */}
      <section className="text-center space-y-32 py-16">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Welcome!
          </h1>
          <div className="space-y-24 pt-24">
            <div className="text-2xl md:text-4xl lg:text-5xl font-mono bg-black text-green-400 p-6 md:p-8 rounded-lg inline-block min-h-[4rem] md:min-h-[6rem] flex items-center">
              <span className="mr-3 text-green-300">$</span>
              <span className="mr-2">echo "</span>
              <span>{displayText}</span>
              <span className="mr-2">"</span>
              <span 
                className={`inline-block w-3 md:w-4 h-8 md:h-12 lg:h-16 bg-green-400 ml-2 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}