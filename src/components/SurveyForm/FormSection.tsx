import React from 'react';

interface FormSectionProps {
  title: string;
  children: React.ReactNode;
}

export const FormSection: React.FC<FormSectionProps> = ({ title, children }) => (
  <div className="mb-8">
    <h3 className="text-lg font-semibold mb-4 text-gray-900">{title}</h3>
    <div className="space-y-4">
      {children}
    </div>
  </div>
);