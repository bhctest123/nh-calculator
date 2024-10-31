import React from 'react';

interface FormFieldProps {
  label: string;
  children: React.ReactNode;
  required?: boolean;
  helper?: string;
}

export const FormField: React.FC<FormFieldProps> = ({ label, children, required, helper }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
    {children}
    {helper && <p className="mt-1 text-sm text-gray-500">{helper}</p>}
  </div>
);