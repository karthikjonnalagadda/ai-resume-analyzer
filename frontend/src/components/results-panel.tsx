import { TrendingUp, Target, AlertCircle, Lightbulb } from 'lucide-react';
import { AnalysisResults } from './analysis-page';

interface ResultsPanelProps {
  results: AnalysisResults;
}

export function ResultsPanel({ results }: ResultsPanelProps) {
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBgColor = (score: number) => {
    if (score >= 80) return 'bg-green-600';
    if (score >= 60) return 'bg-yellow-600';
    return 'bg-red-600';
  };

  return (
    <div className="space-y-6">
      {/* ATS Score Card */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              <h3 className="font-semibold text-slate-900">ATS Score</h3>
            </div>
            <p className="text-sm text-slate-600">
              Simulated ATS compatibility score (0-100)
            </p>
            <p className="text-xs text-slate-500 mt-1">
              This is a simulated ATS score for academic purposes.
            </p>
          </div>
          <div className={`text-4xl font-bold ${getScoreColor(results.atsScore)}`}>
            {results.atsScore}
          </div>
        </div>
        <div className="relative h-3 bg-slate-100 rounded-full overflow-hidden">
          <div
            className={`absolute top-0 left-0 h-full ${getScoreBgColor(results.atsScore)} transition-all duration-500`}
            style={{ width: `${results.atsScore}%` }}
          />
        </div>
      </div>

      {/* Skill Match Card */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Target className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-slate-900">Skill Match</h3>
            </div>
            <p className="text-sm text-slate-600">
              Approximate skill match percentage
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Skill match is estimated based on keyword and context overlap.
            </p>
          </div>
          <div className={`text-4xl font-bold ${getScoreColor(results.skillMatch)}`}>
            {results.skillMatch}%
          </div>
        </div>
        <div className="relative h-3 bg-slate-100 rounded-full overflow-hidden">
          <div
            className={`absolute top-0 left-0 h-full ${getScoreBgColor(results.skillMatch)} transition-all duration-500`}
            style={{ width: `${results.skillMatch}%` }}
          />
        </div>
      </div>

      {/* Missing Skills Card */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
        <div className="flex items-center gap-2 mb-4">
          <AlertCircle className="w-5 h-5 text-orange-600" />
          <h3 className="font-semibold text-slate-900">Skills Not Explicitly Demonstrated</h3>
        </div>
        {results.missingSkills.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {results.missingSkills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1.5 bg-orange-50 text-orange-700 rounded-lg text-sm font-medium border border-orange-200"
              >
                {skill}
              </span>
            ))}
          </div>
        ) : (
          <p className="text-slate-600 text-sm">
            Great! You have all the required skills.
          </p>
        )}
      </div>

      {/* Improvement Suggestions Card */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
        <div className="flex items-center gap-2 mb-4">
          <Lightbulb className="w-5 h-5 text-purple-600" />
          <h3 className="font-semibold text-slate-900">Improvement Suggestions</h3>
        </div>
        <ul className="space-y-3">
          {results.suggestions.slice(0, 6).map((suggestion, index) => (
            <li key={index} className="flex gap-3 text-slate-700">
              <span className="text-purple-600 font-bold mt-0.5">•</span>
              <span className="text-sm">{suggestion}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
