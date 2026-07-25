from app.services.ai.gemini_client import gemini_client

response = gemini_client.generate(
    "Say hello in one sentence."
)

print(response)