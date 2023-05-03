import pymongo
from pymongo import MongoClient
import json
import requests
import time
import gc
import sys

# Get DB User & Password
USER = sys.argv[1]
PASS = sys.argv[2]

# Initialize Atlas Cluster
cluster = pymongo.MongoClient(f"mongodb+srv://{USER}:{PASS}@cluster0.hucupar.mongodb.net/?retryWrites=true&w=majority")
db = cluster.DBSample
collection = db.StocksSample

# API Functionality
top5 = ["AAPL", "MSFT", "AMZN", "NVDA", "GOOGL"] 
next5 = ["TSLA", "UNH", "META", "XOM", "JNJ"]
third5 = ["JPM", "V", "PG", "HD", "MA"]
last5 = ["CVX", "AVGO", "PEP", "KO", "PFE"]

for s in last5:
    url = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol='+s+'&outputsize=full&apikey=SUI9NZ4RDSXQKIQY'
    r = requests.get(url)
    data = r.json()
    doc = {}
    doc["_id"] = s
    doc["trade_series"] = data["Time Series (Daily)"]
    collection.insert_one(doc)

#collection.delete_many({})