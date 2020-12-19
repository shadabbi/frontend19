import axios from 'axios';

export default axios.create({
    baseURL : 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID iA76fYKZpFCBN-Bh-8geB45nO5wn8Q68Y14c57bYe6Y'
      }
})

