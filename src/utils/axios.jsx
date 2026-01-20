import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMWE4MjdhOWQxODU3ODM3ZDI1YjNkYjg3YmY4YzU2NyIsIm5iZiI6MTc2ODg4NzI1NS4yMjQsInN1YiI6IjY5NmYxM2Q3ZGRmYTM5MmVhMGNhZWQwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.auX3tJjP0gyRPAjdEvZFcP3LpYGF_vU-HCj1qJTixTQ'
    }
})

export default instance;