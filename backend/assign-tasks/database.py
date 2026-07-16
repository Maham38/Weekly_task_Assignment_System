import os
from sqlalchemy import create_engine
from sqlalchemy.orm import DeclarativeBase, sessionmaker
engine = create_engine(os.getenv("DATABASE_URL", "postgresql+psycopg://neondb_owner:npg_G9z0yAghNXbR@ep-noisy-term-at58ctry.c-9.us-east-1.aws.neon.tech/neondb?sslmode=require"), pool_pre_ping=True)
SessionLocal = sessionmaker(bind=engine, autocommit=False, autoflush=False)
class Base(DeclarativeBase): pass
def get_db():
    db = SessionLocal()
    try: yield db
    finally: db.close()
