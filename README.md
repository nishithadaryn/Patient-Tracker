---

```markdown
# 🏥 Patient Tracker

A simple Patient Tracker web application built using **FastAPI** for the backend and **React (Vite)** for the frontend. You can add patients with name, age, and condition, and view them in a list.

---

## 📂 Project Structure

```

FastAPIProject/
├── backend/                  # FastAPI backend
│   └── main.py
│   └── requirements.txt
│
├── frontend/                 # React frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── AddPatientForm.jsx
│   │   │   └── Patients.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── api.js
│   ├── index.html
│   └── vite.config.js
│
├── README.md
└── .gitignore

````

---

## 🛠️ Backend Setup (FastAPI)

### Prerequisites
- Python 3.10+
- `pip` or `pipenv`
- (Optional but recommended) Virtual environment

### 🔧 Steps

```bash
# Navigate to backend
cd backend

# Create virtual environment (optional)
python -m venv venv
source venv/bin/activate   # On Windows: venv\Scripts\activate

# Install dependencies
pip install fastapi uvicorn

# Save requirements (optional)
pip freeze > requirements.txt

# Run backend
uvicorn main:app --reload
````

Backend will run on: **[http://127.0.0.1:8000](http://127.0.0.1:8000)**

---

## 💻 Frontend Setup (React + Vite)

### Prerequisites

* Node.js (v16 or above)
* npm or yarn

### ⚙️ Steps

```bash
# Navigate to frontend
cd frontend

# Install dependencies
npm install

# Run frontend
npm run dev
```

Frontend will run on: **[http://localhost:5173](http://localhost:5173)**

> Make sure the backend is running before you test the site

---

## 🌍 Deployment

### Backend (e.g. [Render](https://render.com))

1. Push `backend` to a new GitHub repo.
2. Go to [Render](https://render.com), create a new web service.
3. Set:

   * **Build Command**: `pip install -r requirements.txt`
   * **Start Command**: `uvicorn main:app --host 0.0.0.0 --port 10000`
4. Set environment to `Python 3`
5. Copy the deployment URL (e.g., `https://patient-tracker-backend.onrender.com`)

### Frontend (Vercel)

1. Push `frontend` to a new GitHub repo.
2. Go to [Vercel](https://vercel.com), import project.
3. Add this environment variable:

   ```
   VITE_API_URL = https://patient-tracker-backend.onrender.com
   ```
4. Framework preset: **React**
5. Deploy.

---

## 🔄 Environment Variables

Inside `frontend/.env` (or set in Vercel dashboard):

```
VITE_API_URL=https://your-backend-url
```

In `frontend/api.js`:

```js
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});
```

---




