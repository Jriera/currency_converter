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
const swapper = document.getElementById('swapper');

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

swapper.addEventListener('click', async () => {
    const inputAmount = input.value;
    const outputAmount = output.value;
    const from_currency = from.value;
    const to_currency = to.value;


    const holder = from_currency;
    const holder2 = to_currency;

    to.value = holder;
    from.value = holder2;
    const rate = await getExchangeRateLast(holder2, holder);
    output.value = inputAmount * rate;
})