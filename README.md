# 🎓 Student Speaking Assessment Report

A modern, responsive web application for displaying student speaking assessment results with interactive visualizations and dynamic feedback.

## 📸 Screenshots

![Assessment Report](./screenshots/demo.png)

## ✨ Features

- **📊 Overall Score Display** - Prominent circular score badge showing total performance
- **📈 Skill-wise Assessment** - Detailed breakdown of 4 key speaking skills:
  - Pronunciation
  - Fluency
  - Vocabulary
  - Grammar
- **📉 Visual Representations** - Multiple visualization options:
  - CSS-animated progress bars
  - Interactive Radar chart using Chart.js
- **💬 Dynamic Feedback System** - Automatic feedback generation based on score ranges
- **🎨 Modern UI/UX** - Clean, professional design with maroon/burgundy theme
- **📱 Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- **✨ Smooth Animations** - Elegant entrance animations and transitions
- **⚡ Fast Performance** - Built with Vite for lightning-fast development and builds

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern UI library
- **Vite** - Next-generation frontend tooling
- **Chart.js** - Beautiful, responsive charts
- **React-ChartJS-2** - React wrapper for Chart.js
- **CSS3** - Custom styling with animations

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Fast, minimal web framework
- **CORS** - Enable cross-origin requests

### Data
- **JSON** - Simple data storage (easily replaceable with database)

## 📁 Project Structure

```
Ass-1/
├── frontend/                     # React frontend application
│   ├── src/
│   │   ├── components/           # React components
│   │   │   ├── Header.jsx        # Student info and report header
│   │   │   ├── OverallScore.jsx  # Overall score display with badge
│   │   │   ├── ScoreBadge.jsx    # Score level indicator
│   │   │   ├── SkillsChart.jsx   # Radar chart visualization
│   │   │   ├── SkillsSection.jsx # Skill cards grid
│   │   │   ├── ProgressBar.jsx   # Animated progress bars
│   │   │   └── FeedbackSection.jsx # Detailed feedback display
│   │   ├── utils/
│   │   │   └── feedbackLogic.js  # Feedback generation logic
│   │   ├── App.jsx               # Main application component
│   │   ├── App.css               # Application styles
│   │   ├── index.css             # Global styles and theme
│   │   └── main.jsx              # Application entry point
│   ├── public/                   # Static assets
│   ├── index.html                # HTML template
│   ├── package.json              # Frontend dependencies
│   └── vite.config.js            # Vite configuration
├── backend/                      # Node.js + Express backend
│   ├── data/
│   │   └── studentData.json      # Student assessment data
│   ├── server.js                 # Express server and API routes
│   ├── package.json              # Backend dependencies
│   └── README.md                 # Backend documentation
└── README.md                     # This file
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   giSetup Backend**
   ```bash
   cd backend
   npm install
   ```

3. **Setup Frontend**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Start Backend Server**
   ```bash
   # In backend directory
   npm start
   ```
   Backend will run on: `http://localhost:3001`

5. **Start Frontend Development Server**
   ```bash
   # In frontend directory (in a new terminal)
   npm run dev
   ```
   Frontend will run on: `http://localhost:5173`

**Frontend:**
```bash
cd frontend
npm run build
```

The production-ready files will be in the `dist/` folder.

**Backend:**
```bash
cd backend
npm start
```

Backend runs as-is in production (can be deployed to services like Heroku, Railway, Render)
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

Assessment data is stored in the **backend** as a JSON file:

**Location:** `backend/data/studentData.json`

```json
{
  "student": {
    "name": "John Smith",
    "testDate": "2025-12-20",
    "testType": "Speaking Assessment"
  },
  "scores": {
    "overall": 7.5,
    "pronunciation": 8.5,
    "fluency": 7,
    "vocabulary": 7.5,
    "grammar": 7
  }
}
```

### Architecture

```
Frontend (React)  →  API Request  →  Backend (Express)  →  JSON Data
     ↓                                       ↓
 Display Data  ←  JSON Response  ←  Fetch & Return
```

### Changing Student Data

**Option 1: Update JSON file (Current)**
1. Open `backend/data/studentData.json`
2. Edit the values (scores should be between 0-9)
3. Save the file
4. Refresh the frontend to see changes

**Option 2: API Endpoint (Future Enhancement)**
Add POST endpoint to update scores:
```javascript
app.post('/api/student/report', (req, res) => {
  // Update logic here
}uture Enhancement

The JSON data source can easily be replaced with a backend API by modifying the `useEffect` hook in `App.jsx`:

```javascript
useEffect(() => {
  // Replace this with API call
  fetch('/api/student/report')
    .then(res => res.json())
    .then(data => setReportData(data));
}, []);
```

## 🎯 How Feedback Logic Works

The feedback system automatically generates descriptive feedback based on score ranges using conditional logic.

**Location:** `frontend/src/utils/feedbackLogic.js`

### Score Ranges & Feedback

| Score Range | Level | Feedback Type |
|-------------|-------|---------------|
| **8.0 - 9.0** | Excellent | "Excellent performance with strong control..." |
| **6.0 - 7.9** | Good | "Good performance with minor inaccuracies..." |
| **4.0 - 5.9** | Satisfactory | "Satisfactory, but regular practice needed..." |
| **0.0 - 3.9** | Needs Improvement | "Needs significant improvement..." |

### Implementation

```javascript
export const getFeedbackByScore = (score, skillName) => {
  if (score >= 8) {
    return getFeedbackExcellent(skillName);
  } else if (score >= 6) {
    return getFeedbackGood(skillName);
  } else if (score >= 4) {
    return getFeedbackSatisfactory(skillName);
  } else {
    return getFeedbackNeedsImprovement(skillName);
  }
};
```

### Customized Feedback

Each skill (Pronunciation, Fluency, Vocabulary, Grammar) has **specific, tailored feedback** for each score range. The feedback:

- ✅ Automatically updates when scores change
- ✅ Provides specific guidance for each skill
- ✅ Maintains consistency across the application
- ✅ Is easily extensible for new ranges or skills

## 🎨 Design & Styling

### Color Scheme

```css
--primary-maroon: #8B1538;    /* Main brand color */
--primary-dark: #6B0F2A;      /* Darker variant */
--primary-light: #A91D42;     /* Lighter accent */
--white: #FFFFFF;             /* Clean backgrounds */
--light-gray: #F5F5F5;        /* Subtle backgrounds */
--text-dark: #2C2C2C;         /* Primary text */
--text-light: #666666;        /* Secondary text */
```

### Typography

- **Font Family:** Sans-serif system fonts for clean, readable text
- **Responsive Sizing:** Scales appropriately for all devices

### Animations

- Entrance animations for smooth loading experience
- Progress bar fill animations
- Hover effects on skill cards
- Pulsing badge indicator
- Chart animations via Chart.js

## 📱 Responsive Design

The application is fully responsive with breakpoints:

- **Desktop:** > 1024px
- **Tablet:** 768px - 1024px
- **Mobile:** < 768px

## 🧪 Testing

### Manual Testing Checklist

- [x] Overall score displays correctly
- [x] All 4 skill scores visible
- [x] Progress bars animate on load
- [x] Radar chart renders properly
- [x] Feedback changes with different scores
- [x] Responsive on mobile devices
- [x] Responsive on tablet devices
- [x] Smooth animations and transitions
- [x] Loading state displays correctly
API Configuration

To change the backend URL, edit `frontend/src/App.jsx`:

```javascript
const API_BASE_URL = 'http://localhost:3001'; // Change port or domain
```

### Backend Port

To change backend port, edit `backend/server.js` or use environment variable:

```bash
PORT=4000 npm start
```

### 
### Test with Different Scores

Modify `studentData.json` to test various scenarios:

1. **High Performer** (scores 8-9)
2. **Average Performer** (scores 6-7)
3. **Needs Practice** (scores 4-5)
4. **Beginner** (scores 0-3)

## 🔧 Customization

### Changing Colors

Edit CSS variables in `frontend/src/index.css`:

```css
:root {
  --primary-maroon: #YOUR_COLOR;
  /* ... other variables */
}
```

### AdDatabase integration (MongoDB/PostgreSQL)
- [ ] User authentication & authorization
- [ ] Multiple student reports with filtering
- [ ] PDF export functionality
- [ ] Historical score tracking & analytics
- [ ] Comparison with average scores
- [ ] Admin dashboard for managing assessments
- [ ] Real-time updates with WebSockets
- [ ] More chart types and visualizations
- [ ] Dark mode toggle
- [ ] Email notifications
- [ ] Deployment (Frontend: Vercel/Netlify, Backend: Render/Railway)/Doughnut/Line chart in `SkillsChart.jsx`:

```javascript
import { Bar } from 'react-chartjs-2';
// Then replace <Radar /> with <Bar />
```

## 📝 Future Enhancements

- [ ] Backend API with Node.js + Express
- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] Multiple student reports
- [ ] PDF export functionality
- [ ] User authentication
- [ ] Historical score tracking
- [ ] Comparison with average scores
- [ ] More chart types
- [ ] Dark mode toggle
- [ ] Print-friendly version

## 🤝 Contributing

This is an assignment project, but suggestions are welcome!

## 📄 License

This project is created for educational purposes.

## 👤 Author

**Your Name**  
Assignment Submission - Full Stack Development

## 📞 Support

For questions or issues, please reach out via Internshala chat.

---

**Built with ❤️ using React + Vite**
