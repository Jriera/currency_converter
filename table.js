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
        document.getElementById(`${id}-bid`).innerHTML = await getExchangeRateBid(from, to);

        const valuer = async () => {
            const value = document.getElementById(`${id}-bid`).innerHTML;
            console.log(value)
            return value
        }
        const realvalue = await valuer()
        return realvalue;

    }

    else if (price === 'ask') {
        document.getElementById(`${id}-ask`).innerHTML = await getExchangeRateAsk(from, to)
        const valuer = async () => {
            const value = document.getElementById(`${id}-bid`).innerHTML;
            console.log(value)
            return value
        }
        const realvalue = await valuer()
        return realvalue;

    }

}
const printer = async () => {
    await pricePrinter('EURUSD', 'bid', 'EUR', 'USD');
    await pricePrinter('EURUSD', 'ask', 'EUR', 'USD');
    await pricePrinter('GBPUSD', 'bid', 'GBP', 'USD');
    await pricePrinter('GBPUSD', 'ask', 'GBP', 'USD');
    await pricePrinter('EURCHF', 'bid', 'EUR', 'CHF');
    await pricePrinter('EURCHF', 'ask', 'EUR', 'CHF');
    await pricePrinter('USDJPY', 'bid', 'USD', 'JPY');
    await pricePrinter('USDJPY', 'ask', 'USD', 'JPY');

    spreader('EURUSD');
    spreader('GBPUSD');
    spreader('EURCHF');
    spreader('USDJPY');
}


const spreader = async (pair) => {
    const test1 = document.getElementById(`${pair}-ask`).innerHTML
    const test2 = document.getElementById(`${pair}-bid`).innerHTML

    console.log(test1);
    console.log(test2);
    document.getElementById(`${pair}-spread`).innerHTML = (test1 - test2).toFixed(4);
}


printer();