import React from 'react';
import { ResponsiveSankey } from '@nivo/sankey';

const sankeyData = {
  nodes: [
    // Revenue Sources
    { id: 'resident_fees', label: 'Resident Fees (69%)' },
    { id: 'housing_assistance', label: 'Housing Assistance (16%)' },
    { id: 'grants', label: 'Grants (6%)' },
    { id: 'donations', label: 'Donations (3%)' },
    { id: 'other_revenue', label: 'Other Revenue (6%)' },
    
    // Expenditures
    { id: 'mortgage_rent', label: 'Mortgage/Rent (44%)' },
    { id: 'utilities', label: 'Utilities (16%)' },
    { id: 'resident_supplies', label: 'Resident Supplies (9%)' },
    { id: 'staff_costs', label: 'Staff Costs (3%)' },
    { id: 'other_services', label: 'Other Services (28%)' }
  ],
  links: [
    // Mapping revenue sources to expenditures based on proportional distribution
    { source: 'resident_fees', target: 'mortgage_rent', value: 30.36 },
    { source: 'resident_fees', target: 'utilities', value: 11.04 },
    { source: 'resident_fees', target: 'resident_supplies', value: 6.21 },
    { source: 'resident_fees', target: 'staff_costs', value: 2.07 },
    { source: 'resident_fees', target: 'other_services', value: 19.32 },
    
    { source: 'housing_assistance', target: 'mortgage_rent', value: 7.04 },
    { source: 'housing_assistance', target: 'utilities', value: 2.56 },
    { source: 'housing_assistance', target: 'resident_supplies', value: 1.44 },
    { source: 'housing_assistance', target: 'staff_costs', value: 0.48 },
    { source: 'housing_assistance', target: 'other_services', value: 4.48 },
    
    { source: 'grants', target: 'mortgage_rent', value: 2.64 },
    { source: 'grants', target: 'utilities', value: 0.96 },
    { source: 'grants', target: 'resident_supplies', value: 0.54 },
    { source: 'grants', target: 'staff_costs', value: 0.18 },
    { source: 'grants', target: 'other_services', value: 1.68 },
    
    { source: 'donations', target: 'mortgage_rent', value: 1.32 },
    { source: 'donations', target: 'utilities', value: 0.48 },
    { source: 'donations', target: 'resident_supplies', value: 0.27 },
    { source: 'donations', target: 'staff_costs', value: 0.09 },
    { source: 'donations', target: 'other_services', value: 0.84 },
    
    { source: 'other_revenue', target: 'mortgage_rent', value: 2.64 },
    { source: 'other_revenue', target: 'utilities', value: 0.96 },
    { source: 'other_revenue', target: 'resident_supplies', value: 0.54 },
    { source: 'other_revenue', target: 'staff_costs', value: 0.18 },
    { source: 'other_revenue', target: 'other_services', value: 1.68 }
  ]
};

interface SankeyChartProps {
  title: string;
}

export const SankeyChart: React.FC<SankeyChartProps> = ({ title }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-lg font-semibold mb-4">{title}</h3>
    <div className="h-[500px]">
      <ResponsiveSankey
        data={sankeyData}
        margin={{ top: 40, right: 160, bottom: 40, left: 180 }}
        align="justify"
        colors={{ scheme: 'category10' }}
        nodeOpacity={1}
        nodeHoverOthersOpacity={0.35}
        nodeThickness={18}
        nodeSpacing={24}
        nodeBorderWidth={0}
        nodeBorderColor={{
          from: 'color',
          modifiers: [['darker', 0.8]]
        }}
        linkOpacity={0.5}
        linkHoverOthersOpacity={0.1}
        linkContract={3}
        enableLinkGradient={true}
        labelPosition="outside"
        labelOrientation="horizontal"
        labelPadding={16}
        labelTextColor={{
          from: 'color',
          modifiers: [['darker', 1]]
        }}
        tooltipFormat={value => `${value.toFixed(1)}%`}
      />
    </div>
  </div>
);