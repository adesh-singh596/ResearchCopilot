from google import genai

from app.core.config import settings


class GeminiClient:
    """
    Handles all communication with the Gemini API.
    """

    def __init__(self):
        self.client = genai.Client(
            api_key=settings.gemini_api_key
        )

        self.model = "gemini-2.5-flash"

    def generate(self, prompt: str) -> str:
        """
        Send a prompt to Gemini and return the generated text.
        """

        response = self.client.models.generate_content(
            model=self.model,
            contents=prompt,
        )

        return response.text


# Singleton instance
gemini_client = GeminiClient()