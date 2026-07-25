from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers.validation import router as validation_router
from app.core.config import settings


app = FastAPI(
    title=settings.app_name,
    description="AI-powered Research Assistant Backend",
    version=settings.app_version,
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://127.0.0.1:5500",
        "http://localhost:5500",
        "https://researchcopilot7.netlify.app"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# Register Validation Router
app.include_router(validation_router)


@app.get("/")
def root():
    return {
        "message": f"Welcome to {settings.app_name} 🚀"
    }


@app.get("/health")
def health():
    return {
        "status": "healthy",
        "version": settings.app_version,
        "debug": settings.debug
    }