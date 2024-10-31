import React from 'react';
import { Building2, Users, Home, DollarSign } from 'lucide-react';
import { CustomTooltip } from './CustomTooltip';

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ElementType;
  tooltip: string;
  subtitle?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon: Icon,
  tooltip,
  subtitle
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="relative">
        <div className="absolute top-0 right-0 flex items-center space-x-2">
          <div className="flex items-center justify-center w-10 h-10 bg-indigo-50 rounded-lg">
            <Icon className="h-5 w-5 text-indigo-600" />
          </div>
          <CustomTooltip content={tooltip}>
            <div className="cursor-pointer">
              <div className="w-4 h-4" />
            </div>
          </CustomTooltip>
        </div>
        <div className="pr-24">
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="mt-2 text-3xl font-semibold text-gray-900">{value}</p>
          {subtitle && (
            <p className="mt-1 text-sm text-gray-500">{subtitle}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export const KeyMetrics: React.FC = () => {
  const metrics = [
    {
      title: 'Organizations',
      value: '22',
      icon: Building2,
      tooltip: 'Total number of recovery housing organizations surveyed',
    },
    {
      title: 'Residences',
      value: '89',
      icon: Home,
      tooltip: 'Total number of recovery residences operated',
    },
    {
      title: 'Residents',
      value: '874',
      icon: Users,
      tooltip: 'Total number of individuals currently in recovery housing',
    },
    {
      title: 'Monthly Fee',
      value: '$882',
      icon: DollarSign,
      tooltip: 'Average monthly resident fee',
      subtitle: 'Average per resident',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {metrics.map((metric) => (
        <StatCard key={metric.title} {...metric} />
      ))}
    </div>
  );
};