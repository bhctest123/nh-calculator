import React from 'react';

interface Column {
  key: string;
  header: string;
}

interface DataTableProps {
  columns: Column[];
  data: Record<string, any>[];
}

export const DataTable: React.FC<DataTableProps> = ({ columns, data }) => (
  <div className="overflow-x-auto">
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          {columns.map((column) => (
            <th
              key={column.key}
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {data.map((row, i) => (
          <tr key={i}>
            {columns.map((column) => (
              <td key={column.key} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {row[column.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);