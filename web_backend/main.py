from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from typing import List, Dict, Any
import json
import os
from fastapi import status
from fastapi.responses import JSONResponse
from threading import Lock

app = FastAPI()
json_file_path = "data.json"
file_lock = Lock()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"], 
    allow_headers=["*"]
)

def read_json():
    with file_lock:
        if os.path.exists(json_file_path):
            with open(json_file_path, 'r') as file:
                try:
                    return json.load(file)
                except json.JSONDecodeError:
                    return {}
        else:
            return {}

def write_json(data):
    with file_lock:
        with open(json_file_path, 'w') as file:
            json.dump(data, file, indent=4)

@app.get("/items", response_model=List[Dict[str, Any]])
def get_items() -> List[Dict[str, Any]]:
    data = list(read_json().values())
    
    return data

@app.post("/items", response_model=Dict, status_code=status.HTTP_201_CREATED)
def add_item(comment: Dict) -> Dict:
    data = read_json()
    data[comment['timestamp']] = comment
    write_json(data)
    
    return comment

@app.delete("/items/{item_id}", response_model=bool)
def delete_item(item_id: int) -> bool:
    data = read_json()
    
    if str(item_id) not in data.keys():
        raise HTTPException(status_code=404, detail="Item not found")
    
    del data[str(item_id)]
    write_json(data)
    
    return True