import axios from 'axios';

async function exchangerates(currencycode) {
	const options = {
		method: 'GET',
		url: 'https://api.exchangerate.host/latest',
	};
	if (currencycode) {
		try {
			const response = await axios.request(options);
			if (!response.data.success) {
				throw new Error(`Unable to Fetch Currency Exchange Rates`);
			}
			let rates = response.data.rates;
			currencycode = currencycode.toUpperCase();

			if (currencycode in rates) {
				console.log(rates[currencycode]);
			} else {
				console.log('Enter Valid Currency or The currency is Not supported');
			}
		} catch (e) {
			console.log(`Error :${e}`);
		}
	} else {
		console.log('Please enter valid Currency');
		console.log("EX: 'USD','AUD'");
	}
}

exchangerates('USD'); //1.094588
exchangerates('XYZ'); //'Enter Valid Currency or The currency is Not supported'
exchangerates(''); //'Please enter valid Currency'
//"EX: 'USD','AUD'"
