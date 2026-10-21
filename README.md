# Cure AI

Cure AI is a learning project split into two small applications:

- [`frontend/`](./frontend/README.md) — Next.js, React, Tailwind CSS, and Clerk authentication.
- [`backend/`](./backend/README.md) — a separate FastAPI MVP with a health check and Clerk-protected “who am I?” endpoint.

The frontend and backend currently run independently. The frontend does not call the backend yet.

## Start the frontend

In PowerShell, open the frontend folder and follow its setup guide:

```powershell
Set-Location frontend
npm install
```

Set up Clerk keys by following [the frontend README](./frontend/README.md), then run:

```powershell
npm run dev
```

The website will be at <http://localhost:3000>.

## Start the backend

The FastAPI service has its own Python environment and setup steps:

```powershell
Set-Location backend
python -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install -r requirements.txt
Copy-Item .env.example .env
```

Fill in the Clerk settings described in [the backend README](./backend/README.md), then start the API:

```powershell
python -m uvicorn app.main:app --reload
```

The backend will be at <http://localhost:8000>; its interactive API guide is at <http://localhost:8000/docs>.

## Project map

```text
cure-ai/
├── frontend/   Next.js website and its JavaScript dependencies/configuration
└── backend/    FastAPI application, Python dependencies, and API tests
```
