from sqlalchemy import Column
from sqlalchemy import DateTime
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy.sql import func

from app.core.database import Base


class Project(Base):

    __tablename__ = "projects"

    id = Column(Integer, primary_key=True, index=True)

    title = Column(String(255), nullable=False)

    description = Column(String, nullable=False)

    status = Column(String(50), default="Pending")

    created_at = Column(DateTime(timezone=True),
                        server_default=func.now())