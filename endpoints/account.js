const axios = require('axios');

const CONFIG = require('../config');

const BASE_URL = `https://api-fxpractice.oanda.com/v3/accounts/${CONFIG.accountID}`;
const HEADER = {
  headers: { // axios requires that the last argument is an object containing 'headers'
    'Content-Type': 'application/json',
    Authorization: CONFIG.authorization,
  },
};

async function getAccountDetails() {
  try {
    const response = await axios.get(BASE_URL, HEADER);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
  return null;
}

async function getAccountSummary() {
  const URL = `${BASE_URL}/summary`;
  try {
    const response = await axios.get(URL, HEADER);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
  return null;
}

async function getAllInstrumentDetails() {
  const URL = `${BASE_URL}/instruments`;
  try {
    const response = await axios.get(URL, HEADER);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
  return null;
}

async function getSpecificInstrumentDetails(instrument) {
  const URL = `${BASE_URL}/instruments?instruments=${instrument}`;
  try {
    const response = await axios.get(URL, HEADER);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
  return null;
}

async function setMarginRate(rate) { // rate must be a string
  const URL = `${BASE_URL}/configuration`;
  try {
    const response = await axios.patch(
      URL,
      {
        marginRate: rate,
      },
      HEADER,
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
  return null;
}

async function changeAccountAlias(alias) {
  const URL = `${BASE_URL}/configuration`;
  try {
    const response = await axios.patch(
      URL,
      {
        alias,
      },
      HEADER,
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
  return null;
}

async function getAccountChanges(transactionID) {
  const URL = `${BASE_URL}/changes?sinceTransactionID=${transactionID}`;
  try {
    const response = await axios.get(URL, HEADER);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
  return null;
}

module.exports = {
  getAccountDetails,
  getAccountSummary,
  getAllInstrumentDetails,
  getSpecificInstrumentDetails,
  setMarginRate,
  changeAccountAlias,
  getAccountChanges,
};
