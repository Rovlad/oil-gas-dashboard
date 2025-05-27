import React from 'react';
import { SystemsTable } from './components/SystemsTable';
import { StatsCard } from './components/StatsCard';
import { mockSystemsData } from './data/mockData';
import { DashboardStats } from './types';
import { Activity, AlertTriangle, CheckCircle, Settings, Wrench } from 'lucide-react';

function App() {
  // Calculate dashboard statistics
  const stats: DashboardStats = React.useMemo(() => {
    const totalSystems = mockSystemsData.length;
    const onlineSystems = mockSystemsData.filter(system => system.ffsStatus === 'Fit for Service').length;
    const totalAnomalies = mockSystemsData.reduce((sum, system) => sum + system.numberOfAnomalies, 0);
    const totalLOPCs = mockSystemsData.reduce((sum, system) => sum + system.numberOfLOPCs, 0);
    const totalFMOs = mockSystemsData.reduce((sum, system) => sum + system.numberOfFMOs, 0);
    const totalROs = mockSystemsData.reduce((sum, system) => sum + system.numberOfROs, 0);
    const totalWraps = mockSystemsData.reduce((sum, system) => sum + system.numberOfWraps, 0);

    return {
      totalSystems,
      onlineSystems,
      totalAnomalies,
      totalLOPCs,
      totalFMOs,
      totalROs,
      totalWraps
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Oil & Gas Plant Dashboard</h1>
              <p className="text-gray-600 mt-1">Real-time monitoring of plant systems and operations</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-500">
                Last updated: {new Date().toLocaleTimeString()}
              </div>
              <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
                Refresh Data
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-6 mb-8">
          <StatsCard
            title="Total Systems"
            value={stats.totalSystems}
            icon={<Settings />}
            color="blue"
          />
          <StatsCard
            title="Fit for Service"
            value={stats.onlineSystems}
            icon={<CheckCircle />}
            color="green"
          />
          <StatsCard
            title="Anomalies"
            value={stats.totalAnomalies}
            icon={<AlertTriangle />}
            color="red"
          />
          <StatsCard
            title="LOPCs"
            value={stats.totalLOPCs}
            icon={<Activity />}
            color="yellow"
          />
          <StatsCard
            title="FMOs"
            value={stats.totalFMOs}
            icon={<Wrench />}
            color="blue"
          />
          <StatsCard
            title="ROs"
            value={stats.totalROs}
            icon={<Settings />}
            color="gray"
          />
          <StatsCard
            title="Wraps"
            value={stats.totalWraps}
            icon={<CheckCircle />}
            color="green"
          />
        </div>

        {/* Systems Table */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">System Status Overview</h2>
            <div className="flex space-x-4">
              <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                <option>All Systems</option>
                <option>Online Only</option>
                <option>Issues Only</option>
              </select>
              <button className="border border-gray-300 rounded-lg px-3 py-2 text-sm hover:bg-gray-50">
                Export Data
              </button>
            </div>
          </div>
          <SystemsTable systems={mockSystemsData} />
        </div>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm py-8">
          <p>© 2024 Oil & Gas Plant Dashboard. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}

export default App; 