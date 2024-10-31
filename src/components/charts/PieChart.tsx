import React from 'react';
import { PieChart as RechartsChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

interface PieChartProps {
  data: Array<{ name: string; value: number; details?: string }>;
  title: string;
  colors?: string[];
}

export const PieChart: React.FC<PieChartProps> = ({ 
  data, 
  title,
  colors = ['#4F46E5', '#818CF8', '#A5B4FC', '#C7D2FE', '#E0E7FF']
}) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-lg font-semibold mb-4">{title}</h3>
    <div className="h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={true}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
            label={({ name, value }) => `${name} (${value}%)`}
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
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
          <Legend verticalAlign="bottom" height={36} />
        </RechartsChart>
      </ResponsiveContainer>
    </div>
  </div>
);