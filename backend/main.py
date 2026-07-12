from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from scraper.kamernet import kamernet_scrape

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "Backend is working"}

@app.get("/search")
def search(city: str):
    results = kamernet_scrape(city)

    return{
            "results": results,
            "city": city
    }