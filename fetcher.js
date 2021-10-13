



const getExchangeRateLast = async (base_currency, output_currency) => {
    const response = await axios.get(`https://exchange-rates-reuters.herokuapp.com/pairs?from=${base_currency}&to=${output_currency}`);
    const data = response.data
    const last = response.data.currencypairs[0].last

    console.log(data);
    return last;
}

const getExchangeRateChange = async (base_currency, output_currency) => {
    const response = await axios.get(`https://reuters-exchange-rates.p.rapidapi.com/pairs?from=${base_currency}&to=${output_currency}`, {
        headers: {
            'x-rapidAPI-key': '7c2325863fmsh926e1d461bb15fep19aaeajsnb37c76192724'
        }
    });
    const data = response.data
    const change = response.data.currencypairs[0].percent_change

    console.log(change);

    return change;
}
const changePrinter = async (id, from, to) => {
    const element = document.getElementById(id)
    const pair_change = await getExchangeRateChange(from, to);
    if (pair_change > 0) {
        element.innerHTML = `<span class="text-warning">${from}/${to}</span>:<span class="ms-2 percent-forma bg-success rounded p-1">${pair_change}%</span> `
    }

    else if (pair_change < 0) {
        element.innerHTML = `<span class="text-warning">${from}/${to}</span>:<span class="ms-2 percent-forma bg-danger rounded p-1">${pair_change}%</span> `
    }

    console.log(pair_change);
}

changePrinter('eur-usd', 'EUR', 'USD');
changePrinter('usd-jpy', 'USD', 'JPY');
changePrinter('gbp-eur', 'GBP', 'EUR');
changePrinter('cad-usd', 'CAD', 'USD');
changePrinter('eur-chf', 'EUR', 'CHF');
changePrinter('aud-usd', 'AUD', 'USD');


