import { extractTextFromPDF } from "../services/pdf.service.js";
import { analyzeWithAI } from "../services/ai.service.js";
import { buildATSPrompt } from "../utils/atsPrompt.js";

export async function analyzeResume(req, res) {
  try {
    const { jobDescription } = req.body;

    if (!req.file || !jobDescription) {
      return res.status(400).json({
        error: "Resume PDF and job description are required"
      });
    }

    const resumeText = await extractTextFromPDF(req.file.buffer);
    console.log("Resume text extracted successfully, length:", resumeText.length);

    const prompt = buildATSPrompt(resumeText, jobDescription);
    console.log("Prompt built for LLM analysis");

    const analysisResult = await analyzeWithAI(prompt);
    console.log("AI analysis completed, result keys:", Object.keys(analysisResult));

    res.json(analysisResult);
  } catch (error) {
    console.error("Analysis Error:", error.message);

    res.status(200).json({
      ats_score: 0,
      skill_match_percentage: 0,
      matched_skills: [],
      missing_skills: [],
      resume_strengths: [],
      improvement_suggestions: [
        "AI returned an unexpected format. Please try again."
      ],
      summary: "Temporary AI formatting issue."
    });
  }
}
