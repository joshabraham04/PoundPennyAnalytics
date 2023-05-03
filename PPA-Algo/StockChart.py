import pymongo
from pymongo import MongoClient
from datetime import date
import plotly.graph_objects as go
import pandas as pd
from pandas import DataFrame
import json
import sys

#Retrieve DB User/Pass & Stock Ticker
USER = sys.argv[1]
PASS = sys.argv[2]
TICKER = sys.argv[3]

# Initialize Atlas Cluster Access
cluster = pymongo.MongoClient(f"mongodb+srv://{USER}:{PASS}@cluster0.hucupar.mongodb.net/?retryWrites=true&w=majority")
try:
    cluster.admin.command('ping')
    print("Pinged deployment. Successfully connected to MongoDB")
except Exception as e:
    print(e)
db = cluster.DBSample
stocks = db.StocksSample

# Find stock trade info
q = stocks.find_one({"_id":TICKER})["trade_series"]

# Create dataframe
row_list = []
for date in q:
    row = [date]
    for values in q[date]:
        row.append(q[date][values])
    row_list.append(row)
df = pd.DataFrame(row_list, columns=['date','open','high','low','close','adj_close','vol','div_amount','split_coef'])

print(df)

# Create Charts
figCandleStick = go.Figure(data=go.Candlestick(x=df['date'],
                             open=df['open'],
                             high=df['high'],
                             low=df['low'],
                             close=df['adj_close']))

figOHLC = go.Figure(data=go.Ohlc(x=df['date'],
                             open=df['open'],
                             high=df['high'],
                             low=df['low'],
                             close=df['adj_close']))

figCandleStick.show()
figOHLC.show()