from fastapi import APIRouter

from app.schemas.validation import (
    ValidationRequest,
    ValidationResponse,
)
from app.services.validation_service import ValidationService

router = APIRouter(
    prefix="/validate",
    tags=["Validation"],
)


@router.post(
    "/",
    response_model=ValidationResponse,
)
def validate(request: ValidationRequest):

    result = ValidationService.validate_idea(
        request.idea
    )

    return result