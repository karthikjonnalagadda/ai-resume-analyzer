import { useState } from "react";
import { api } from "../services/api";
import { AnalysisResult } from "../types/analysis";
import { ArrowLeft, FileText } from "lucide-react";
import { FileUpload } from "./file-upload";
import { ResultsPanel } from "./results-panel";

interface AnalysisPageProps {
  onBack: () => void;
}

/**
 * UI-friendly result shape used by ResultsPanel
 */
export interface AnalysisResults {
  atsScore: number;
  skillMatch: number;
  missingSkills: string[];
  suggestions: string[];
}

export function AnalysisPage({ onBack }: AnalysisPageProps) {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<AnalysisResults | null>(null);
  const [error, setError] = useState("");

  /**
   * REAL backend call (no mock data)
   */
  const handleAnalyze = async () => {
    setError("");

    if (!resumeFile) {
      setError("Please upload your resume");
      return;
    }

    if (!jobDescription.trim()) {
      setError("Please enter a job description");
      return;
    }

    setIsAnalyzing(true);

    try {
      const formData = new FormData();
      formData.append("resume", resumeFile);
      formData.append("jobDescription", jobDescription);

      const response = await api.post<AnalysisResult>(
        "/analyze",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      /**
       * Map backend response → UI format
       */
      const mappedResults: AnalysisResults = {
        atsScore: response.data.ats_score,
        skillMatch: response.data.skill_match_percentage,
        missingSkills: response.data.missing_skills,
        suggestions: response.data.improvement_suggestions,
      };

      setResults(mappedResults);
    } catch (err) {
      console.error(err);
      setError("AI analysis temporarily unavailable. Please try again in a moment.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="hidden sm:inline">Back</span>
            </button>
            <div className="flex items-center gap-2">
              <FileText className="w-8 h-8 text-blue-600" />
              <h1 className="text-2xl font-semibold text-slate-900">
                AI Resume Analyzer
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Panel */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-slate-900 mb-6">
                Upload & Analyze
              </h2>

              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Resume Upload
                </label>
                <FileUpload
                  file={resumeFile}
                  onFileChange={setResumeFile}
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Job Description
                </label>
                <textarea
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  placeholder="Paste the job description here..."
                  rows={12}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </div>

              {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                  {error}
                </div>
              )}

              <button
                onClick={handleAnalyze}
                disabled={isAnalyzing}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-6 py-4 rounded-lg font-medium"
              >
                {isAnalyzing ? "Analyzing..." : "Analyze Resume"}
              </button>
            </div>

            {/* Right Panel */}
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 mb-6">
                Analysis Results
              </h2>

              {results ? (
                <ResultsPanel results={results} />
              ) : (
                <div className="bg-white rounded-xl p-12 shadow-sm border text-center">
                  <FileText className="w-8 h-8 text-slate-400 mx-auto mb-4" />
                  <p className="text-slate-500">
                    Upload your resume and job description to see results.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
