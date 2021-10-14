/* var axios = require('axios') */

const getExchangeRateLast = async (base_currency, output_currency) => {
    const response = await axios.get(`https://exchange-rates-reuters.herokuapp.com/pairs?from=${base_currency}&to=${output_currency}`);
    const data = response.data
    const last = response.data.currencypairs[0].last

    console.log(data);
    return last;
}

const input = document.getElementById('input-amount');
const output = document.getElementById('output-amount');
const from = document.getElementById('from');
const to = document.getElementById('to');

from.addEventListener('change', async () => {
    const inputAmount = input.value;
    const outputAmount = output.value;
    const from_currency = from.value;
    const to_currency = to.value;

    const rate = await getExchangeRateLast(from_currency, to_currency);
    output.value = inputAmount * rate;
    console.log(output.value);


})

to.addEventListener('change', async () => {
    const inputAmount = input.value;
    const outputAmount = output.value;
    const from_currency = from.value;
    const to_currency = to.value;

    const rate = await getExchangeRateLast(from_currency, to_currency);
    output.value = inputAmount * rate;
    console.log(output.value);
})

input.addEventListener('focusout', async () => {
    const inputAmount = input.value;
    const outputAmount = output.value;
    const from_currency = from.value;
    const to_currency = to.value;

    const rate = await getExchangeRateLast(from_currency, to_currency);
    output.value = inputAmount * rate;
    console.log(output.value);
})

