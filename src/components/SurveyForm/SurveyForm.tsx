import React from 'react';

export const SurveyForm: React.FC = () => {
  return (
    <form className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Recovery Housing Organization Survey</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Organization Type</label>
            <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
              <option>For-profit</option>
              <option>Non-profit</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Number of Residences</label>
            <input type="number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Total Residents Served</label>
            <input type="number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Monthly Resident Fee</label>
            <input type="number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Primary Funding Sources</label>
            <div className="mt-2 space-y-2">
              {['Resident Fees', 'Housing Assistance', 'Grants', 'Donations', 'Other'].map((source) => (
                <div key={source} className="flex items-center">
                  <input type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                  <label className="ml-2 text-sm text-gray-700">{source}</label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="pt-5">
        <div className="flex justify-end">
          <button
            type="submit"
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit Survey
          </button>
        </div>
      </div>
    </form>
  );
};