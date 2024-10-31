import React from 'react';
import { BarChart as RechartsBar, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface BarChartProps {
  data: Array<{ name: string; value: number; details?: string }>;
  title: string;
  color?: string;
}

export const BarChart: React.FC<BarChartProps> = ({ 
  data, 
  title,
  color = '#4F46E5'
}) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-lg font-semibold mb-4">{title}</h3>
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsBar data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip
            content={({ payload }) => {
              if (!payload?.length) return null;
              const { name, value, details } = payload[0].payload;
              return (
                <div className="bg-white p-3 shadow-lg border rounded-lg">
                  <p className="font-semibold">{name}</p>
                  <p>{value}%</p>
                  {details && <p className="text-sm text-gray-600 mt-1">{details}</p>}
                </div>
              );
            }}
          />
          <Bar dataKey="value" fill={color} />
        </RechartsBar>
      </ResponsiveContainer>
    </div>
  </div>
);