#!/bin/evv node
import inquirer from 'inquirer';
console.log("WEllcome to Sobia Furqan's currency converter");

const exchangeRates: { [key: string]: number } = {
    'USD': 1,
    'EUR': 0.85,
    'GBP': 0.75,
    'JPY': 110,
    'INR': 73.5,
    'pkr':280
};

async function currencyConverter() {
    const { fromCurrency, toCurrency, amount } = await inquirer.prompt([
        {
            name: 'fromCurrency',
            type: 'list',
            message: 'Wellcome to SOBIA FURQAN currency converter please Choose the currency you want to convert from:',
            choices: Object.keys(exchangeRates)
        },
        {
            name: 'toCurrency',
            type: 'list',
            message: 'Choose the currency you want to convert to:',
            choices: Object.keys(exchangeRates)
        },
        {
            name: 'amount',
            type: 'number',
            message: 'Enter the amount you want to convert:',
            validate: (value: number) => value > 0 ? true : 'Amount must be a positive number'
        }
    ]);

    const convertedAmount = (amount / exchangeRates[fromCurrency]) * exchangeRates[toCurrency];

    console.log(`\n${amount} ${fromCurrency} is equal to ${convertedAmount.toFixed(2)} ${toCurrency}\n`);
    console.log(`Thanks for using "SOBIA FURQAN's" currency converter`)
}

currencyConverter();