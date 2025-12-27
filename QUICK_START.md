# 🚀 Quick Start Guide

## Run the Project in 5 Minutes

### Prerequisites
- Node.js installed (v14 or higher)
- Two terminal windows

---

## Step 1: Start Backend (Terminal 1)

```bash
cd backend
npm install
npm start
```

✅ **You should see:**
```
🚀 Server is running on port 3001
📊 API Base URL: http://localhost:3001
📝 Student Report: http://localhost:3001/api/student/report
💚 Health Check: http://localhost:3001/api/health
```

---

## Step 2: Start Frontend (Terminal 2)

```bash
cd frontend
npm install
npm run dev
```

✅ **You should see:**
```
VITE v7.3.0  ready in 324 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

---

## Step 3: Open Browser

Navigate to: **http://localhost:5173**

✅ **You should see:**
- Student Assessment Report page
- Overall score: 7.5/9
- 4 skill cards with progress bars
- Radar chart
- Detailed feedback sections

---

## Test the API

Open in browser: **http://localhost:3001/api/student/report**

✅ **You should see JSON data:**
```json
{
  "success": true,
  "data": {
    "student": {
      "name": "John Smith",
      ...
    }
  }
}
```

---

## Modify Student Scores

1. Open: `backend/data/studentData.json`
2. Change any score (0-9 range)
3. Save file
4. Refresh browser

✅ **Scores and feedback will update automatically!**

---

## Troubleshooting

### Port Already in Use?
**Backend:** Edit `backend/server.js` - Change `3001` to another port  
**Frontend:** Vite will auto-assign another port

### Cannot Connect to Backend?
1. Ensure backend is running (Terminal 1)
2. Check: http://localhost:3001/api/health
3. Verify URL in `frontend/src/App.jsx` matches backend port

### Module Not Found?
```bash
# In frontend or backend directory
rm -rf node_modules
npm install
```

---

## 🎯 That's It!

Your full stack application is now running!

**Frontend:** http://localhost:5173  
**Backend:** http://localhost:3001

---

## Next Steps

- ✅ Test different score values
- ✅ Check responsiveness (resize browser)
- ✅ Read the full README.md
- ✅ Review the code
- ✅ Push to GitHub
- ✅ Submit assignment

---

**Need Help?** Check the main README.md for detailed documentation.
