import React from 'react';
import { SystemsTable } from './components/SystemsTable';
import { StatsCard } from './components/StatsCard';
import { mockSystemsData } from './data/mockData';
import { DashboardStats } from './types';
import { Activity, AlertTriangle, CheckCircle, Settings, Wrench, Send, MessageCircle } from 'lucide-react';

// Q&A Section included - force redeploy
function App() {
  const [question, setQuestion] = React.useState('');
  const [answer, setAnswer] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  // Calculate dashboard statistics
  const stats: DashboardStats = React.useMemo(() => {
    const totalSystems = mockSystemsData.length;
    const onlineSystems = mockSystemsData.filter(system => system.ffsStatus === 'Fit for Service').length;
    const totalAnomalies = mockSystemsData.reduce((sum, system) => sum + system.numberOfAnomalies, 0);
    const totalLOPCs = mockSystemsData.reduce((sum, system) => sum + system.numberOfLOPCs, 0);
    const totalFabricMaintenance = mockSystemsData.reduce((sum, system) => sum + system.numberOfFabricMaintenance, 0);
    const totalRepairOrders = mockSystemsData.reduce((sum, system) => sum + system.numberOfRepairOrders, 0);
    const totalTemporaryRepairs = mockSystemsData.reduce((sum, system) => sum + system.numberOfTemporaryRepairs, 0);

    return {
      totalSystems,
      onlineSystems,
      totalAnomalies,
      totalLOPCs,
      totalFabricMaintenance,
      totalRepairOrders,
      totalTemporaryRepairs
    };
  }, []);

  const handleQuestionSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    setIsLoading(true);
    
    // Simulate API call - replace with actual AI/knowledge base integration
    setTimeout(() => {
      // Mock responses based on question content
      let mockAnswer = '';
      const lowerQuestion = question.toLowerCase();
      
      if (lowerQuestion.includes('anomal')) {
        mockAnswer = `Based on current data, there are ${stats.totalAnomalies} anomalies across all systems. The Gas Compression & Treatment system shows the highest number with 3 anomalies requiring pressure monitoring.`;
      } else if (lowerQuestion.includes('lopc')) {
        mockAnswer = `Currently there are ${stats.totalLOPCs} LOPC (Loss of Primary Containment) events recorded. The Gas Compression & Treatment and Export Header systems each have 1 LOPC event.`;
      } else if (lowerQuestion.includes('fabric maintenance') || lowerQuestion.includes('fmo')) {
        mockAnswer = `There are ${stats.totalFabricMaintenance} fabric maintenance operations in progress. These are primarily on the Gas Compression & Treatment and Crude Header systems.`;
      } else if (lowerQuestion.includes('repair order') || lowerQuestion.includes('ro')) {
        mockAnswer = `Currently ${stats.totalRepairOrders} repair orders are active across the facility. Water Injection/SCSSV has the most with 2 repair orders due to scheduled maintenance.`;
      } else if (lowerQuestion.includes('temporary repair') || lowerQuestion.includes('wrap')) {
        mockAnswer = `There are ${stats.totalTemporaryRepairs} temporary repairs in place. Sea Water Lift & Distribution has the most with 4 temporary repairs, while several systems have protective wrapping installed.`;
      } else if (lowerQuestion.includes('fit for service') || lowerQuestion.includes('status')) {
        mockAnswer = `${stats.onlineSystems} out of ${stats.totalSystems} systems are currently fit for service. Systems with partial or non-fit status require attention, particularly Cargo Tank Cleaning (COW) which is not fit for service.`;
      } else if (lowerQuestion.includes('system') && lowerQuestion.includes('critical')) {
        mockAnswer = `Gas Compression & Treatment and Cargo Tank Cleaning (COW) systems require immediate attention. The Gas Compression system has multiple issues including 3 anomalies and compromised corrosion barriers.`;
      } else {
        mockAnswer = `Thank you for your question about "${question}". For specific technical inquiries, please consult the system documentation or contact the operations team. The dashboard shows real-time status of all ${stats.totalSystems} plant systems.`;
      }
      
      setAnswer(mockAnswer);
      setIsLoading(false);
    }, 1500);
  };

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
            title="Fabric Maintenance"
            value={stats.totalFabricMaintenance}
            icon={<Wrench />}
            color="blue"
          />
          <StatsCard
            title="Repair Orders"
            value={stats.totalRepairOrders}
            icon={<Settings />}
            color="gray"
          />
          <StatsCard
            title="Temporary Repairs"
            value={stats.totalTemporaryRepairs}
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

        {/* Q&A Section */}
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center mb-4">
              <MessageCircle className="w-6 h-6 text-primary-600 mr-2" />
              <h2 className="text-2xl font-bold text-gray-900">Ask a Question</h2>
            </div>
            <p className="text-gray-600 mb-6">Get insights about plant systems, anomalies, maintenance status, and operational data.</p>
            
            <form onSubmit={handleQuestionSubmit} className="mb-6">
              <div className="flex gap-4">
                <input
                  type="text"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="Ask about system status, anomalies, maintenance, or any operational question..."
                  className="flex-1 border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading || !question.trim()}
                  className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center"
                >
                  {isLoading ? (
                    <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2" />
                  ) : (
                    <Send className="w-4 h-4 mr-2" />
                  )}
                  {isLoading ? 'Processing...' : 'Ask'}
                </button>
              </div>
            </form>

            {/* Answer Display */}
            {answer && (
              <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-primary-500">
                <h3 className="font-semibold text-gray-900 mb-2">Answer:</h3>
                <p className="text-gray-700 leading-relaxed">{answer}</p>
              </div>
            )}

            {/* Example Questions */}
            {!answer && (
              <div className="bg-blue-50 rounded-lg p-4">
                <h3 className="font-semibold text-blue-900 mb-2">Example Questions:</h3>
                <ul className="text-blue-800 text-sm space-y-1">
                  <li>• "How many anomalies are currently detected?"</li>
                  <li>• "Which systems have LOPC events?"</li>
                  <li>• "What is the status of fabric maintenance operations?"</li>
                  <li>• "Which systems are not fit for service?"</li>
                  <li>• "How many temporary repairs are in place?"</li>
                </ul>
              </div>
            )}
          </div>
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