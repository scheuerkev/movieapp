import * as axios from 'axios';

const apiMovie = axios.create({
    baseURL: 'https://api.themoviedb.org/4',
})

apiMovie.interceptors.request.use((req)=>{
    req.headers['Authorization'] = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OTA1ZWZiNjBkNzNiNWQyZTYwNWQ5YzEwMjcxOGNjMyIsInN1YiI6IjYxZTAxZjlmY2IzMDg0MDA0MjllZTVkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pqfyOQ7K7oXgF8hHUPKkzWMtpUDgtaT2YSrHAHVjXBA`;
    return req;
})

export default apiMovie;


