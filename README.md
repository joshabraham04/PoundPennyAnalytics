# Pound For Penny Analytics
### A stocks application that lets users learn and compare common/beginner/introductory trading strategies and assess short-term and long-term performance.

#
## Running the Code
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The repository is split into three folders:

(1) The web applicaition with functional pages and sign-up system `PPA-WebApp`\
(2) The web application with integrated UI/UX design `PPA-UI`\
(3) The database and algorithm scripts for stock charting `PPA-Algo`

To see each code functionality, move to the corresponding folder and run the available scripts:
#
## Running the Web Application
Before getting started, install Node.js and NPM package manager\
[See Here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

To ensure any libraries and packages are installed, run the following command in your terminal at the folder directory:\
 `npm install`

 To run the app in development mode, use the command:\
 `npm start`

 This opens [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
#
## Running the Algorithm Scripts
The following scripts are available for use:

(1) `db_populate.py` - A script that populates the MongoDB with a set of stocks time-series information\
(2) `StockChart.py` - A script that takes in a ticker value and returns the CandleStick and OHLC figure charts\
(3) `AlgorithmCharts.py` - A script that calculates the investment return for a selected trading strategy for a given stock

StockChart and AlgorithmCharts are used to see the stock data. Running the scripts will display a graphical chart in the localhost webbrowser.

For StockChart, run the script with the following command in the directory:\
`python ./StockChart.py {USER} {PASS} {TICKER}`\
where `{USER}` and `{PASS}` is the username and password for the MongoDB database, and `{TICKER}` is the chosen stock ticker symbol

For AlgorithmCharts, run the script with the following command in the directory:\
`python ./AlgorithmCharts.py {USER} {PASS} {TICKER}`\
where `{USER}` and `{PASS}` is the username and password for the MongoDB database, and `{TICKER}` is the chosen stock ticker symbol.

Follow the prompts in the console to calculate the investment return for the chosen trading strategy. 
