import React, { useState } from 'react';
import { KeyMetrics } from './components/KeyMetrics';
import { CollapsibleSection } from './components/CollapsibleSection';
import { Drawer } from './components/Drawer';
import { SurveyForm } from './components/SurveyForm/SurveyForm';
import { PieChart } from './components/charts/PieChart';
import { BarChart } from './components/charts/BarChart';
import { SankeyChart } from './components/charts/SankeyChart';
import { 
  pieData, 
  operatingCostsData, 
  populationData, 
  certificationLevels,
  keyFindings 
} from './data/dashboardData';

function App() {
  const [isSurveyOpen, setIsSurveyOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">
            NH Recovery Housing Dashboard
          </h1>
          <button
            onClick={() => setIsSurveyOpen(true)}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            Take Survey
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <KeyMetrics />

        <div className="space-y-6">
          <CollapsibleSection title="Key Findings" defaultOpen={true}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {keyFindings.map((finding) => (
                <div 
                  key={finding.id}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {finding.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{finding.description}</p>
                  <p className="text-sm text-indigo-600">{finding.impact}</p>
                </div>
              ))}
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Funding Flow Analysis">
            <SankeyChart title="Revenue Sources to Expenditures Flow" />
          </CollapsibleSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <CollapsibleSection title="Revenue Sources">
              <PieChart 
                data={pieData}
                title="Revenue Distribution"
              />
            </CollapsibleSection>

            <CollapsibleSection title="Operating Costs">
              <BarChart 
                data={operatingCostsData}
                title="Cost Breakdown"
              />
            </CollapsibleSection>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <CollapsibleSection title="Population Distribution">
              <PieChart 
                data={populationData}
                title="Resident Demographics"
                colors={['#60A5FA', '#34D399', '#F472B6', '#A78BFA']}
              />
            </CollapsibleSection>

            <CollapsibleSection title="Certification Levels">
              <BarChart 
                data={certificationLevels}
                title="NHCORR Certification Distribution"
                color="#60A5FA"
              />
            </CollapsibleSection>
          </div>
        </div>
      </main>

      <Drawer
        isOpen={isSurveyOpen}
        onClose={() => setIsSurveyOpen(false)}
        title="Recovery Housing Survey"
      >
        <SurveyForm />
      </Drawer>
    </div>
  );
}

export default App;