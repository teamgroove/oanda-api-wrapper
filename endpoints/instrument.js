const axios = require('axios');

const CONFIG = require('../config');

const BASE_URL = 'https://api-fxpractice.oanda.com/v3/instruments';
const HEADER = {
  headers: { // axios requires that the last argument is an object containing 'headers'
    'Content-Type': 'application/json',
    Authorization: CONFIG.authorization,
  },
};

function convertObjectToQuery(object) {
  const keys = Object.keys(object);
  const values = Object.values(object);
  const { length } = keys;

  if (object != null) {
    let query = '?';
    for (let i = 0; i < length - 1; i += 1) {
      query += `${keys[i]}=${values[i]}&`;
    }
    query += `${keys[length - 1]}=${values[length - 1]}`;
    return query;
  }
  return '';
}

async function getCandlestickData(instrument, parameters = null) {
  const URL = `${BASE_URL}/${instrument}/candles${convertObjectToQuery(parameters)}`;
  try {
    const response = await axios.get(URL, HEADER);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
  return null;
}

async function getOrderBook(instrument, time = null) {
  let url = `${BASE_URL}/${instrument}/orderBook`;
  if (time != null) {
    url += `?time=${time}`;
  }
  try {
    const response = await axios.get(url, HEADER);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
  return null;
}

async function getPositionBook(instrument, time = null) {
  let url = `${BASE_URL}/${instrument}/positionBook`;
  if (time != null) {
    url += `?time=${time}`;
  }
  try {
    const response = await axios.get(url, HEADER);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
  return null;
}

module.exports = {
  getCandlestickData,
  getOrderBook,
  getPositionBook,
};
