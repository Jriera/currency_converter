const getExchangeRateLast = async (base_currency, output_currency) => {
    const response = await axios.get(`https://exchange-rates-reuters.herokuapp.com/pairs?from=${base_currency}&to=${output_currency}`);
    const data = response.data
    const last = response.data.currencypairs[0].last

    console.log(data);
    return last;
}