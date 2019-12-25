const CONFIG = require('./config');

const axios = require('axios');

const BASE_URL = 'https://api-fxpractice.oanda.com';
const HEADER = {
    headers: { // this is done because axios requires that the last argument be an object containing 'headers'
        'Content-Type': 'application/json',
        'Authorization': CONFIG.authorization
    }
};

async function getAccountSummary() {
    const URL = `${BASE_URL}/v3/accounts/${CONFIG.accountID}/summary`;
    try {
        const response = await axios.get(URL, HEADER);
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
}

async function getAllInstrumentDetails() {
    const URL = `${BASE_URL}/v3/accounts/${CONFIG.accountID}/instruments`;
    try {
        const response = await axios.get(URL, HEADER);
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
}

async function getInstrumentDetails(instrument) {
    const URL = `${BASE_URL}/v3/accounts/${CONFIG.accountID}/instruments?instruments=${instrument}`;
    try {
        const response = await axios.get(URL, HEADER);
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
}

getInstrumentDetails('USD_CAD');