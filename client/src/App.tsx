import React, { useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import SurveyList from './components/SurveyList';
import Navigation from './components/Navigation';

function App() {
  const [currentView, setCurrentView] = useState<'dashboard' | 'surveys'>('dashboard');

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation currentView={currentView} onViewChange={setCurrentView} />
      
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {currentView === 'dashboard' && <Dashboard />}
          {currentView === 'surveys' && <SurveyList />}
        </div>
      </main>
    </div>
  );
}

export default App;
