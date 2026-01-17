export interface AnalysisResult {
  ats_score: number;
  skill_match_percentage: number;
  matched_skills: string[];
  missing_skills: string[];
  resume_strengths: string[];
  improvement_suggestions: string[];
  summary: string;
}
