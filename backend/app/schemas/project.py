from datetime import datetime

from pydantic import BaseModel


class ProjectCreate(BaseModel):

    title: str

    description: str


class ProjectResponse(ProjectCreate):

    id: int

    status: str

    created_at: datetime

    class Config:
        from_attributes = True