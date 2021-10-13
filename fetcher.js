



const getExchangeRateLast = async (base_currency, output_currency) => {
    const response = await axios.get(`https://exchange-rates-reuters.herokuapp.com/pairs?from=${base_currency}&to=${output_currency}`);
    const data = response.data
    const last = response.data.currencypairs[0].last

    console.log(data);
    return last;
}

const getExchangeRateChange = async (base_currency, output_currency) => {
    const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://exchange-rates-reuters.herokuapp.com/pairs?from=${base_currency}&to=${output_currency}`);
    const data = response.data
    const change = response.data.currencypairs[0].percent_change

    console.log(change);
    console.log(data);
    return change;
}
const changePrinter = async (id, from, to) => {
    const element = document.getElementById(id)
    const pair_change = await getExchangeRateChange(from, to);
    element.innerHTML = `${from}/${to}: ${pair_change}%`
    console.log(pair_change);
}

changePrinter('eur-usd', 'EUR', 'USD');
changePrinter('usd-jpy', 'USD', 'JPY');
changePrinter('gbp-eur', 'GBP', 'EUR');
changePrinter('cad-usd', 'CAD', 'USD');


