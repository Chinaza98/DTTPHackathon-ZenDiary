const url = 'https://login-signup.p.rapidapi.com/public/v1/login.php';
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		Origin: 'http://127.0.0.1',
		'X-RapidAPI-Key': 'fb0aceb82cmsh5948f58a7d40392p146744jsn3f567261df82',
		'X-RapidAPI-Host': 'login-signup.p.rapidapi.com'
	},
	body: new URLSearchParams({
		api_key: '394e9338b73a9f061b1968ceaa050a',
		email: 'test@email.com',
		password: 'Qwerty_12345'
	})
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}