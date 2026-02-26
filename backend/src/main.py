"""Основной модуль"""
import asyncio, logging, sys, traceback
from contextlib import asynccontextmanager
from pathlib import Path

from fastapi import status, Request, Response, HTTPException, FastAPI
from fastapi.staticfiles import StaticFiles
from sqlmodel import Session

from src.routers import router


logger = logging.Logger(__name__)

@asynccontextmanager
async def lifespan(_):
    """Жизненный цикл сервиса"""
    logger.info("[+] Starting application...")
    yield  # Обработка запросов
    logger.info("[+] Application shutdown")


app = FastAPI()

# Подключение маршрутов
app.include_router(router)
# app.mount(
#     "/static",
#     StaticFiles(directory=Path(__file__).parent / "static"),
#     name="static",
# )


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(
        "src.main:app",
        host="0.0.0.0", port=8000,
        forwarded_allow_ips="*",
        proxy_headers=True,
    )
