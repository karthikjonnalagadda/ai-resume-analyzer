export function buildATSPrompt(resumeText, jobDescription) {
  return `
You are an AI Resume Analyzer.

Compare the RESUME and JOB DESCRIPTION below.

RESUME:
${resumeText}

JOB DESCRIPTION:
${jobDescription}

TASKS:
1. Extract skills from both resume and job description
2. Identify matched and missing skills with these rules:
   // Skill normalization: lowercase, trim, remove punctuation for consistent matching
   // Hard rules: Skills in resume "Skills" section always matched
   // Missing skills: strict subset of JD skills not in resume
   - Skills explicitly listed in the resume's "Skills" section are ALWAYS considered present
   - Matched skills: skills that appear in both resume and job description
   - Missing skills: ONLY skills from job description that do NOT appear anywhere in the resume text
   - Skill comparison must be case-insensitive
   - Normalize common variations (e.g., "Node.js" = "NodeJS", "CI/CD" = "CI CD", "React.js" = "React")
3. Simulate ATS scoring with detailed criteria:
   // ATS Score calculation: weighted factors for realistic simulation
   // - Keyword/Skill Match: 40% (matched skills / total JD skills) - core relevance
   // - Experience Relevance: 25% (job titles, years experience) - background fit
   // - Education Match: 15% (degrees/certifications) - qualification alignment
   // - Resume Structure: 10% (formatting, sections) - readability bonus
   // - Contact & Personal Info: 10% (completeness) - professionalism
   // Total score increases with better matches, decreases with gaps
   - Keyword/Skill Match: 40% (matched skills / total JD skills)
   - Experience Relevance: 25% (years of experience, job titles matching JD)
   - Education Match: 15% (relevant degrees/certifications)
   - Resume Structure: 10% (clear sections, formatting, length)
   - Contact & Personal Info: 10% (completeness of contact details)
   - Total ATS Score: weighted sum of above factors (0-100)
4. Generate improvement suggestions with these strict rules:
   // Suggestions must directly address JD gaps, be actionable, and professional
   // Only suggest missing JD requirements, never accuse of having skills they listed
   // Phrase as concrete improvements: "Add experience with X", "Include Y certification"
   // Avoid generic advice; focus on traceable JD-resume differences
   - Focus ONLY on requirements from the job description that are missing or weak in the resume
   - Make each suggestion actionable and specific (e.g., "Add experience with AWS Lambda functions")
   - Do NOT suggest skills or experiences already present in the resume
   - If a skill exists but lacks depth, suggest "highlight more experience with X" rather than "add X"
   - Use neutral, professional language without judgment
   - Keep suggestions realistic for resume optimization in an ATS context

IMPORTANT RULES:
- This is a simulated ATS for academic use
- Output MUST be valid JSON ONLY
- Do NOT add explanations or markdown
- No text outside the JSON object
- Output ONLY the JSON object, nothing else

JSON FORMAT (STRICT):
{
  "ats_score": number,
  "skill_match_percentage": number,
  "matched_skills": [string],
  "missing_skills": [string],
  "resume_strengths": [string],
  "improvement_suggestions": [string],
  "summary": string
}
`;
}
