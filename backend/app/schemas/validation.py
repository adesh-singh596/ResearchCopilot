from pydantic import BaseModel, Field


class ValidationRequest(BaseModel):
    """
    Incoming request from the frontend.
    """

    idea: str = Field(
        ...,
        min_length=10,
        max_length=5000,
        description="Research idea submitted by the user."
    )


class ValidationResponse(BaseModel):
    """
    Response returned to the frontend.
    """

    score: int
    verdict: str
    summary: str
    strengths: list[str]
    weaknesses: list[str]
    recommendations: list[str]