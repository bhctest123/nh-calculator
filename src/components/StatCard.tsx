import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  tooltip: string;
  subtitle?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon: Icon,
  tooltip,
  subtitle
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 relative group">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="mt-2 text-3xl font-semibold text-gray-900">{value}</p>
          {subtitle && (
            <p className="mt-1 text-sm text-gray-500">{subtitle}</p>
          )}
        </div>
        <div className="p-2 bg-indigo-50 rounded-lg">
          <Icon className="h-6 w-6 text-indigo-600" />
        </div>
      </div>
      <div className="invisible group-hover:visible absolute z-10 w-64 p-2 mt-2 text-sm text-gray-500 bg-white border rounded-lg shadow-lg">
        {tooltip}
      </div>
    </div>
  );
};