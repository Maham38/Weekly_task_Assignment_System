from fastapi import FastAPI
from routes import hr_dashboard
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# CORS CONFIGURATION
app.add_middleware(

    CORSMiddleware,

    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173"
    ],

    allow_credentials=True,

    allow_methods=["*"],

    allow_headers=["*"],

)


app.include_router(
    hr_dashboard.router
)



@app.get("/")
def home():

    return {
        "message":"HR Dashboard API Running"
    }