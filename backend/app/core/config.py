from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    """
    Application configuration.

    Values are automatically loaded from the .env file.
    """

    # -----------------------------
    # Application Settings
    # -----------------------------
    app_name: str = "ResearchCopilot API"
    app_version: str = "1.0.0"
    debug: bool = True

    host: str = "127.0.0.1"
    port: int = 8000

    # -----------------------------
    # Database
    # -----------------------------
    database_url: str = ""

    # -----------------------------
    # AI
    # -----------------------------
    gemini_api_key: str = ""

    # -----------------------------
    # GitHub
    # -----------------------------
    github_token: str = ""

    # Tell Pydantic where to load environment variables from
    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        case_sensitive=False,
    )


# Singleton settings object
settings = Settings()