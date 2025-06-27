````markdown
# 🏥 Patient Tracker

A simple Patient Tracker web application built using **FastAPI** for the backend and **React (Vite)** for the frontend.  
You can add patients with name, age, and condition, and view them in a list.

---

## 🛠️ Backend Setup (FastAPI)

### ✅ Prerequisites

- Python 3.10+
- `pip` or `pipenv`
- (Optional but recommended) Virtual environment

### 🔧 Steps

```bash
# Navigate to backend
cd backend

# Create a virtual environment (optional)
python -m venv venv

# Activate it
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install fastapi uvicorn

# (Optional) Save to requirements.txt
pip freeze > requirements.txt

# Run the FastAPI backend
uvicorn main:app --reload
````

> The backend will run at: **[http://127.0.0.1:8000](http://127.0.0.1:8000)**

---

## 💻 Frontend Setup (React + Vite)

### ✅ Prerequisites

* Node.js (v16 or above)
* npm or yarn

### ⚙️ Steps

```bash
# Navigate to frontend
cd frontend

# Install dependencies
npm install

# Run the frontend
npm run dev
```

> The frontend will run at: **[http://localhost:5173](http://localhost:5173)**
> 🔁 Make sure the backend is running before testing the site!

---

## 🌍 Deployment

### 🚀 Backend (Render)

1. Push the `backend` folder to a GitHub repository.
2. Go to [Render](https://render.com) → Create a new **Web Service**.
3. Set the following:

   * **Build Command**:

     ```
     pip install -r requirements.txt
     ```
   * **Start Command**:

     ```
     uvicorn main:app --host 0.0.0.0 --port 10000
     ```
   * Environment: **Python 3**
4. Copy the deployed URL (e.g., `https://patient-tracker-backend.onrender.com`)

---

### 🚀 Frontend (Vercel)

1. Push the `frontend` folder to a GitHub repository.

2. Go to [Vercel](https://vercel.com) → Import the project.

3. In **Project Settings → Environment Variables**, add:

   ```
   VITE_API_URL = https://patient-tracker-backend.onrender.com
   ```

4. Set the framework preset to: **React**

5. Click **Deploy**

---

## 🔄 Environment Variables

In `frontend/.env` or in the Vercel environment settings:

```env
VITE_API_URL=https://your-backend-url
```

And in `frontend/src/api.js`:

```js
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export default api;
```

---

## 🧩 Tech Stack

* **Backend**: FastAPI (Python)
* **Frontend**: React (Vite)
* **HTTP Client**: Axios
* **Deployment**: Render (Backend), Vercel (Frontend)

---






