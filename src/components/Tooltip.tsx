import React, { useState, useRef, useEffect } from 'react';
import { Info } from 'lucide-react';

interface TooltipProps {
  content?: string;
  children: React.ReactNode;
}

export const Tooltip: React.FC<TooltipProps> = ({ content, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target as Node)) {
        setIsVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (!content) return <>{children}</>;

  return (
    <div ref={tooltipRef} className="relative inline-block">
      <div className="flex items-center gap-2">
        {children}
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="p-1 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Show more information"
        >
          <Info className="w-4 h-4 text-indigo-600" />
        </button>
      </div>
      {isVisible && (
        <div className="absolute z-10 w-64 p-3 mt-2 text-sm bg-white text-gray-700 rounded-lg shadow-lg border border-gray-200">
          {content}
          <div className="absolute -top-2 right-4 w-4 h-4 bg-white border-t border-l border-gray-200 transform rotate-45" />
        </div>
      )}
    </div>
  );
};