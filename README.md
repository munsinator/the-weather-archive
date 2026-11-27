# The Weather Archive

Semester project Serverless Computing (SERVL-S5). Webcams POST images + weather metadata, users browse video and hourly plots per city.

## Structure
- `frontend/` React + Vite + TypeScript
- `docker-compose.yml` local run via nginx
- `docs/` documentation (Arc42 draft later)

## Run locally
```
cd frontend
npm install
npm run dev
```

## Docker
```
docker compose up --build   # http://localhost
```

## Hand-In 1 (Frontend Draft)
Static draft (homepage + city page mockup), hosted on AWS S3. See `docs/hand-in-1-deploy.md`.
