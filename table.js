const getExchangeRateBid = async (base_currency, output_currency) => {
    const response = await axios.get(`https://exchange-rates-reuters.herokuapp.com/pairs?from=${base_currency}&to=${output_currency}`);
    const data = response.data
    const bid = response.data.currencypairs[0].bid


    return bid;
}

const getExchangeRateAsk = async (base_currency, output_currency) => {
    const response = await axios.get(`https://exchange-rates-reuters.herokuapp.com/pairs?from=${base_currency}&to=${output_currency}`);
    const data = response.data
    const ask = response.data.currencypairs[0].ask


    return ask;
}
const pricePrinter = async (id, price, from, to) => {
    if (price === 'bid') {
        document.getElementById(`${id}-bid`).innerHTML = await getExchangeRateBid(from, to)
    }

    else if (price === 'ask') {
        document.getElementById(`${id}-ask`).innerHTML = await getExchangeRateAsk(from, to)
    }

}

pricePrinter('EURUSD', 'bid', 'EUR', 'USD');
pricePrinter('EURUSD', 'ask', 'EUR', 'USD');
pricePrinter('GBPUSD', 'bid', 'GBP', 'USD');
pricePrinter('GBPUSD', 'ask', 'GBP', 'USD');
pricePrinter('EURCHF', 'bid', 'EUR', 'CHF');
pricePrinter('EURCHF', 'ask', 'EUR', 'CHF');
pricePrinter('USDJPY', 'bid', 'USD', 'JPY');
pricePrinter('USDJPY', 'ask', 'USD', 'JPY');
