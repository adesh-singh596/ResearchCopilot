from fastapi import APIRouter
from fastapi import Depends

from sqlalchemy.orm import Session

from app.core.database import get_db
from app.schemas.project import ProjectCreate
from app.services.project_service import ProjectService

router = APIRouter(
    prefix="/projects",
    tags=["Projects"]
)


@router.get("/")
def get_projects(db: Session = Depends(get_db)):

    return ProjectService.get_projects(db)


@router.post("/")
def create_project(
    project: ProjectCreate,
    db: Session = Depends(get_db)
):

    return ProjectService.create_project(db, project)