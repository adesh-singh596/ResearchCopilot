import json

from app.services.ai.gemini_client import gemini_client


class ValidationService:

    @staticmethod
    def validate_idea(idea: str):

        prompt = f"""
You are an expert research mentor.

Analyse the following project idea.

Return ONLY valid JSON.

JSON format:

{{
    "score": 0-100,
    "verdict": "",
    "summary": "",
    "strengths": [],
    "weaknesses": [],
    "recommendations": []
}}

Idea:

{idea}
"""

        response = gemini_client.generate(prompt)

        # Remove markdown fences if Gemini adds them
        cleaned = response.replace("```json", "").replace("```", "").strip()

        return json.loads(cleaned)