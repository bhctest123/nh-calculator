import React, { useState } from 'react';
import { Info } from 'lucide-react';

interface CustomTooltipProps {
  content: string;
  children: React.ReactNode;
}

export const CustomTooltip: React.FC<CustomTooltipProps> = ({ content, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <div 
        className="flex items-center gap-1 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {children}
        <Info className="w-4 h-4 text-gray-400" />
      </div>
      
      {isOpen && (
        <>
          <div 
            className="fixed inset-0" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute z-50 w-64 p-2 mt-2 text-sm text-gray-600 bg-white rounded-md shadow-lg border border-gray-200">
            {content}
          </div>
        </>
      )}
    </div>
  );
};