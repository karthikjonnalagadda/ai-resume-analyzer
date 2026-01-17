import { callLLM } from "../config/llm.js";

export async function analyzeWithAI(prompt) {
  const aiText = await callLLM(prompt);
  console.log("LLM response received, length:", aiText.length);

  try {
    const result = JSON.parse(aiText);
    console.log("LLM response parsed successfully as JSON");
    return result;
  } catch (error) {
    console.error("AI returned non-JSON:", aiText.substring(0, 200) + "...");

    // Fallback safe response instead of 500
    return {
      ats_score: 0,
      skill_match_percentage: 0,
      matched_skills: [],
      missing_skills: [],
      resume_strengths: [],
      improvement_suggestions: [
        "AI returned an unexpected format. Please try again."
      ],
      summary: "Temporary AI formatting issue."
    };
  }
}
