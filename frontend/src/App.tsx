import { useState } from 'react';
import { LandingPage } from './components/landing-page';
import { AnalysisPage } from './components/analysis-page';

export default function App() {
  const [showAnalysis, setShowAnalysis] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {!showAnalysis ? (
        <LandingPage onGetStarted={() => setShowAnalysis(true)} />
      ) : (
        <AnalysisPage onBack={() => setShowAnalysis(false)} />
      )}
    </div>
  );
}
