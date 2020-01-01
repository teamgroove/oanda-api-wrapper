const CONFIG = require('./config');

const axios = require('axios');

const BASE_URL = `https://api-fxpractice.oanda.com/v3/accounts/${CONFIG.accountID}`;
const HEADER = {
    headers: { // this is done because axios requires that the last argument be an object containing 'headers'
        'Content-Type': 'application/json',
        'Authorization': CONFIG.authorization
    }
};

async function getAccountDetails() {
    try {
        const response = await axios.get(BASE_URL, HEADER);
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
}

async function getAccountSummary() {
    const URL = `${BASE_URL}/summary`;
    try {
        const response = await axios.get(URL, HEADER);
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
}

async function getAllInstrumentDetails() {
    const URL = `${BASE_URL}/instruments`;
    try {
        const response = await axios.get(URL, HEADER);
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
}

async function getInstrumentDetails(instrument) {
    const URL = `${BASE_URL}/instruments?instruments=${instrument}`;
    try {
        const response = await axios.get(URL, HEADER);
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
}

getAccountDetails();