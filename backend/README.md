# AI Resume Analyzer Backend

## Description
Backend service for analyzing resumes against job descriptions using AI (OpenRouter API).

## Features
- PDF resume parsing
- AI-powered resume analysis
- Simulated ATS scoring
- JSON-only API response

## API Endpoint
POST /api/analyze

## Environment Variables
OPENROUTER_API_KEY=your_key
PORT=5000

## Run
npm install
npm start

## Project Limitations
- This is NOT a real ATS system
- Results are AI-assisted simulations for educational purposes
- Skill matching is approximate and may have false positives/negatives
- Depends on external LLM API availability

## Disclaimer
This tool provides simulated ATS analysis using AI. It is not intended for production use or real hiring decisions. Always verify results manually.

## AI-Assisted Decision Making
The system uses LLM to:
- Extract skills from resume and job description
- Calculate simulated ATS score based on predefined criteria
- Generate improvement suggestions
All decisions are rule-based with AI assistance for natural language processing.

## Future Improvements
- Add more detailed scoring criteria
- Improve skill normalization algorithms
- Implement caching for repeated analyses
- Add support for multiple file formats
