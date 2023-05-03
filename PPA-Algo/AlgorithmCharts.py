import pymongo
from pymongo import MongoClient
from datetime import datetime, date, timedelta
from dateutil.relativedelta import relativedelta
import requests
import pandas as pd
import plotly.express as px
import itertools
import sys

today = str(date.today())

# Retrieve argument parameters
DB_USER = sys.argv[1]
DB_PASS = sys.argv[2]
TOKEN = sys.argv[3]

# HELPER FUNCTIONS

# increment date by corresponding frequency and return datetime object
def date_increment(init_date, freq):
    if freq == "daily":
        return init_date + relativedelta(days=+1)
    elif freq == "weekly":
        return init_date + relativedelta(weeks=+1)
    elif freq == "monthly":
        return init_date + relativedelta(months=+1)
    elif freq == "yearly":
        return init_date + relativedelta(years=+1)
    else:
        raise ValueError('Not acceptable time frequency')
    
# look for last weekday if not a trading day
def prev_available_date(init_date, trade_rows):
    if init_date in trade_rows:
        return init_date
    else:
        init_date_obj = datetime.strptime(init_date, "%Y-%m-%d")
        init_date_obj -= timedelta(days=1)
        while init_date_obj.weekday() > 4:
            init_date_obj -= timedelta(days=1)
        return init_date_obj.strftime("%Y-%m-%d")



# Initialize Atlas Cluster Access
cluster = pymongo.MongoClient("mongodb+srv://joshabraham04:5397303j@cluster0.hucupar.mongodb.net/?retryWrites=true&w=majority")
try:
    cluster.admin.command('ping')
    print("Pinged deployment. Successfully connected to MongoDB")
except Exception as e:
    print(e)
db = cluster.DBSample
stocks = db.StocksSample

# !! Stock Prices are calculated using close !!

# Buy and Hold
def BNH(ticker, initial, start, end=today):
    trade_rows = stocks.find_one({"_id" : ticker})["trade_series"]

    start = prev_available_date(start, trade_rows)
    end = prev_available_date(end, trade_rows)

    start_val = float(trade_rows[start]["4. close"])    
    stop_val = float(trade_rows[end]["4. close"])
    initial = float(initial)

    # Construct dataframe
    chart_rows = []

    for date in trade_rows:
        row = [date]
        val = float(trade_rows[date]["4. close"])
        ret = (initial / start_val) * val
        row.append(ret)
        chart_rows.append(row)

    chart_df = pd.DataFrame(chart_rows, columns=['date', 'return'])
    
    # Calculate returns
    end_ret = (initial / start_val) * stop_val
    overall = ((end_ret - initial) / initial) * 100

    # Create Chart
    ta = "Start Date: " + start; print(ta)
    tb = "End Date: " + end; print(tb)
    t1 = "Original Investment: %.2f" % initial; print(t1)
    t2 = "Current Value: %.2f" % end_ret; print(t2)
    t3 = "Overall Returns: %.2f" % overall+"%"; print(t3)

    fig = px.line(chart_df, x='date', y='return', title='Buy & Hold Investment Return')
    fig.update_layout(autotypenumbers='convert types')

    fig.add_annotation(text=ta, xref="paper", yref="paper", x=0.05, y=.99, showarrow=False)
    fig.add_annotation(text=tb, xref="paper", yref="paper", x=0.05, y=.96, showarrow=False)
    fig.add_annotation(text=t1, xref="paper", yref="paper", x=0.05, y=.93, showarrow=False)
    fig.add_annotation(text=t2, xref="paper", yref="paper", x=0.05, y=.88, showarrow=False)
    fig.add_annotation(text=t3, xref="paper", yref="paper", x=0.05, y=.85, showarrow=False)

    fig.show()

# Dollar Cost Average
# Create Graphs
def DCA(ticker, start, end=today, initial=0, freq="monthly", count = 0, contrib=0):
    trade_rows = stocks.find_one({"_id" : ticker})["trade_series"]

    chart_rows = []
    
    start = prev_available_date(start, trade_rows)
    start_val = float(trade_rows[start]["4. close"])
    end_val = 0.0
    shares = initial / start_val
    initial_tot = initial

    start_date = datetime.strptime(start, "%Y-%m-%d")
    end_date = datetime.strptime(end, "%Y-%m-%d")

    init_row = [start_date]
    init_row.append(initial)
    init_row.append(initial_tot)

    chart_rows.append(init_row)

    date_itr = date_increment(start_date, freq)
    count_itr = 0

    # If there is no fixed contribution count for the time period
    if count == 0:
        while date_itr < end_date:
            date_str = date_itr.strftime("%Y-%m-%d")
            date_str = prev_available_date(date_str, trade_rows)
            row = [date_str]
            end_val = float(trade_rows[date_str]["4. close"])
            shares = shares + (contrib / end_val)
            initial_tot = initial_tot + contrib
            date_itr = date_increment(date_itr, freq)
            row.append(initial_tot)
            row.append(shares*end_val)
            chart_rows.append(row)
   
    # If there is a fixed contribution count for the time period
    else:
        while count_itr < count:
            date_str = date_itr.strftime("%Y-%m-%d")
            date_str = prev_available_date(date_str, trade_rows)
            end_val = float(trade_rows[date_str]["4. close"])
            shares = shares + (contrib / end_val)
            initial_tot = initial_tot + contrib
            count_itr = count_itr + 1

    # Calculate returns
    end_ret = shares * end_val
    overall = (end_ret - initial_tot) / initial_tot * 100

    # Create chart
    chart_df = pd.DataFrame(chart_rows, columns=['date', 'investment', 'return'])

    ta = "Start Date: " + start; print(ta)
    tb = "End Date: " + end; print(tb)
    tc = "Freqency: " + freq; print(tc)
    t0 = "Initial Investment: %.2f" % initial; print(t0)
    t1 = "Contribution Amount: " + str(contrib); print(t1)
    t2 = "Total Investment: %.2f" % initial_tot; print(t2)
    t3 = "Current Value: %.2f" % end_ret; print(t2)
    t4 = "Overall Returns: %.2f" % overall+"%"; print(t3)

    fig = px.line(chart_df, x='date', y=['investment','return'], title='Dollar Cost Averaging')
    fig.update_layout(autotypenumbers='convert types')

    #fig.add_scatter(x=chart_df['date'], y=chart_df['investment'], mode='lines')
    fig.add_annotation(text=ta, xref="paper", yref="paper", x=0.05, y=.99, showarrow=False)
    fig.add_annotation(text=tb, xref="paper", yref="paper", x=0.05, y=.96, showarrow=False)
    
    fig.add_annotation(text=tc, xref="paper", yref="paper", x=0.05, y=.91, showarrow=False)
    fig.add_annotation(text=t0, xref="paper", yref="paper", x=0.05, y=.88, showarrow=False)
    fig.add_annotation(text=t1, xref="paper", yref="paper", x=0.05, y=.85, showarrow=False)
    
    fig.add_annotation(text=t2, xref="paper", yref="paper", x=0.05, y=.80, showarrow=False)
    fig.add_annotation(text=t3, xref="paper", yref="paper", x=0.05, y=.77, showarrow=False)
    fig.add_annotation(text=t4, xref="paper", yref="paper", x=0.05, y=.74, showarrow=False)

    fig.show()


# Simple Moving Average (Uses close)
def SMA(ticker, start, short_period, long_period, initial, interval="weekly", end=today):
    short_period = str(short_period)
    long_period = str(long_period)
    
    # Get Short Period SMA
    url = f"https://www.alphavantage.co/query?function=SMA&symbol={ticker}&interval={interval}&time_period={short_period}&series_type=close&apikey={TOKEN}"
    r = requests.get(url)
    short_data = r.json()['Technical Analysis: SMA']

    # Get Long Period SMA
    url = f"https://www.alphavantage.co/query?function=SMA&symbol={ticker}&interval={interval}&time_period={long_period}&series_type=close&apikey={TOKEN}"
    r = requests.get(url)
    long_data = r.json()['Technical Analysis: SMA']

    # Get stock trading info
    trade_rows = stocks.find_one({"_id" : ticker})["trade_series"]
    sma_list  = []

    # Get SMA info
    for s, l in itertools.zip_longest(short_data, long_data):
        row = []
        row.append(s)
        row.append(trade_rows[s]["4. close"])
        row.append(short_data[s]["SMA"])
        if l is not None:
            row.append(long_data[l]['SMA'])
        else:
            row.append(None)

        sma_list.append(row)

    # Get Position & Signal

    # Create Chart
    df = pd.DataFrame(sma_list, columns=['date','price','short', 'long'])
    print(df)
    fig = px.line(df, x='date', y=['price', 'short', 'long'],
                  title=ticker+" Simple Moving Average")
    fig.update_layout(autotypenumbers='convert types')
    fig.show()
    

def main():
    # Console Menu
    print("Input Option Number to Caculate a Stock Using the Following Algorithms:")
    print("1. Buy and Hold Investing")
    print("2. Dollar Cost Averaging")
    print("3. Simple Moving Average")
    option = input("Enter your option: ")
    print()

    # Algorithm & Parameter Selection
    match option:
        case "1":
            ticker = input("Enter stock ticker: ")
            initial = input("Enter initial investment amount: ")
            start = input("Enter initial start date (YYYY-MM-DD): ")
            BNH(ticker, int(initial), start)
        case "2":
            ticker = input("Enter stock ticker: ")
            initial = input("Enter initial investment amount: ")
            start = input("Enter initial start date (YYYY-MM-DD): ")
            end = input("Enter calculation end date (YYYY-MM-DD): ")
            freq = input("Enter averaging frequency period: ")
            contrib = input("Enter frequency contribution amount: ")
            count = input ("Enter fixed contribution count (Default 0): ")
            DCA(ticker, start, end, int(initial), freq, int(count), int(contrib))
        case "3":
            ticker = input("Enter stock ticker: ")
            initial = input("Enter initial investment amount: ")
            start = input("Enter initial start date (YYYY-MM-DD): ")
            short_period = input("Enter short period length: ")
            long_period = input("Enter long period length: ")
            SMA(ticker, start, int(short_period), int(long_period), int(initial))
        case _:
            print("Not an available option")

    #BNH(ticker="AAPL", initial=15500, start="2000-03-21")
    #DCA(ticker="AAPL", start="2018-05-01", end="2023-03-24", initial=1000, freq="monthly", contrib=250)
    #SMA(ticker="AAPL", start="2000-05-01", short_period=20, long_period=50, initial=10000)

if __name__ == "__main__":
    main()

