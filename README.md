# AI Resume Analyzer

A full-stack web application that analyzes resumes against job descriptions using AI-powered Applicant Tracking System (ATS) simulation.

## 🚀 Features

- **PDF Resume Upload**: Parse and extract text from PDF resumes
- **AI-Powered Analysis**: Uses OpenRouter API with GPT-3.5-turbo for intelligent analysis
- **ATS Score Simulation**: Comprehensive scoring based on multiple factors:
  - Keyword/Skill Match (40%)
  - Experience Relevance (25%)
  - Education Match (15%)
  - Resume Structure (10%)
  - Contact Information (10%)
- **Skill Matching**: Identifies matched and missing skills with normalization
- **Improvement Suggestions**: AI-generated recommendations for resume optimization
- **Responsive UI**: Modern React frontend with Tailwind CSS

## 🏗️ Architecture

- **Frontend**: React + TypeScript + Vite + Tailwind CSS
- **Backend**: Node.js + Express + Multer (file upload) + pdf-parse
- **AI Service**: OpenRouter API for LLM-powered analysis
- **Deployment**: Local development setup

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Valid OpenRouter API key

## 🛠️ Installation & Setup

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:

```env
OPENROUTER_API_KEY=your_openrouter_api_key_here
PORT=5000
```

### Frontend Setup

```bash
cd frontend
npm install
```

### Root Setup (Alternative)

From the project root:

```bash
# Install backend dependencies
cd backend && npm install && cd ..

# Install frontend dependencies  
cd frontend && npm install && cd ..
```

## 🚀 Running the Application

### Development Mode

1. **Start Backend** (Terminal 1):
   ```bash
   cd backend
   npm start
   ```
   Backend will run on http://localhost:5000

2. **Start Frontend** (Terminal 2):
   ```bash
   cd frontend
   npm run dev
   ```
   Frontend will run on http://localhost:5173 (default Vite port)

### Production Build

```bash
# Build frontend
cd frontend
npm run build

# Backend is ready to run
cd backend
npm start
```

## 📖 Usage

1. Open the frontend in your browser
2. Upload a PDF resume
3. Paste the job description
4. Click "Analyze Resume"
5. View the ATS score, skill match, and improvement suggestions

## 🔧 API Documentation

### POST /api/analyze

Upload a resume PDF and job description for analysis.

**Request:**
- Content-Type: multipart/form-data
- Body:
  - `resume`: PDF file
  - `jobDescription`: Text string

**Response:**
```json
{
  "ats_score": 85,
  "skill_match_percentage": 75,
  "matched_skills": ["JavaScript", "React", "Node.js"],
  "missing_skills": ["Python", "AWS"],
  "resume_strengths": ["Strong technical skills"],
  "improvement_suggestions": ["Add Python experience"],
  "summary": "Good match with room for improvement"
}
```

## ⚠️ Important Disclaimers

- **This is NOT a real ATS system** - Results are AI-assisted simulations for educational purposes only
- **Not for production use** - Always verify results manually
- **Approximate analysis** - Skill matching and scoring are estimates
- **API dependency** - Requires active OpenRouter API key and internet connection

## 🎯 Project Goals

- Demonstrate full-stack development with AI integration
- Show practical application of LLM APIs
- Provide educational tool for resume optimization
- Maintain simplicity and explainability

## 🛡️ Limitations

- PDF parsing may fail on complex layouts
- AI responses can vary between runs
- Skill detection is not 100% accurate
- No user authentication or data persistence
- Local development only (no cloud deployment)

## 🔮 Future Improvements

- Add support for multiple file formats (DOCX, TXT)
- Implement result caching and history
- Add more detailed scoring breakdowns
- Include resume formatting analysis
- Add export functionality for reports

## 📝 License

This project is for educational purposes. See individual component licenses for details.

## 🤝 Contributing

This is an academic project. For improvements, please fork and submit pull requests.

## 📞 Support

For issues with setup or API keys, check:
- OpenRouter API documentation
- Node.js and npm installation guides
- React/Vite documentation</content>
<parameter name="filePath">c:\Users\karth\ai-resume-analyzer\README.md