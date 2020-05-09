import axios from 'axios';

export default axios.create({
	baseURL: "https://api.unsplash.com",
	headers: {
				Authorization: 
				'Client-ID 6HO-sLDYqa9vUXuWgF8lEmYITXPLNDiCvvB5UjokiwU'
			
		}
});

