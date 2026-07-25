from app.repositories.project_repository import ProjectRepository


class ProjectService:

    @staticmethod
    def create_project(db, data):

        return ProjectRepository.create(db, data)

    @staticmethod
    def get_projects(db):

        return ProjectRepository.get_all(db)

    @staticmethod
    def get_project(db, project_id):

        return ProjectRepository.get_by_id(db, project_id)