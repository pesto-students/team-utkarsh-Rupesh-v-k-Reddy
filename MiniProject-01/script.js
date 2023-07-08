const env = {
	APIKEY: 'Insert API KEY here',
};
let loading = document.getElementById('loadingWheel');
let quotegen = document.getElementById('quoteGen');

async function getvalues(quote) {
	quotegen.innerHTML = '';
	if (quote == null || quote == '') {
		alert('please enter a value');
		return;
	} else {
		try {
			loading.style.display = 'block';
			let quotes = await openAiCall(quote);
			const quoteList = quotes.split(/\d+\.\s/);
			console.log(quoteList);
			loading.style.display = 'none';
			quoteList.forEach((quote) => {
				const paragraph = document.createElement('p');
				paragraph.textContent = quote.trim();
				quotegen.appendChild(paragraph);
			});
		} catch (error) {
			console.error(error);
		}
	}
}

async function openAiCall(prompt) {
	const url = 'https://api.openai.com/v1/engines/text-davinci-003/completions';
	const options = {
		prompt: `generate 5 quotes on ${prompt}`,
		max_tokens: 200,
		temperature: 1,
	};
	try {
		const apicall = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${env.APIKEY}`,
			},
			body: JSON.stringify(options),
		});
		const result = await apicall.json();
		const data = result.choices[0].text;
		return data;
	} catch (error) {
		console.log(`Error inside  API Call : ${error}`);
	}
}
