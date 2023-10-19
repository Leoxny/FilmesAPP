import { baseURL } from "../config/config";
import axios from "axios";

axios.defaults.baseURL = baseURL

const getHeaders = async () => {
    try {

        const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZTQ4ZTNlOTMxZDAwOWE3NTM2MTI0NGM2MGMxOTIwMSIsInN1YiI6IjY0ZmUyMmZhZmE0MDQ2MDEzOWQ2ZmM1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ENQZhEZV399BBavwqTmX6Q2uRV0Jxt_dX4SdL0MUjMY"

        if (token) {
            const options = {
                headers: {
                    accept: "application/json",
                    Authorization: 'Bearer ' + token
                }
            }

            return options;

        } else {
            return {};
        }

    } catch (error) {
        console.log('ERRO HEADERS=>', error);
        return {};
    }
}

const getMoviePopular = async () => {
    try {

        const options = await getHeaders();

        return await axios.get(`/movie/popular`, options)
            .then(response => {
                return response;
            })
            .catch(error => {
                if (error.response != undefined) {
                    return error.response.data;
                } else {
                    return error.message;
                }
            });

    } catch (error) {
        console.log('ERR_getMoviePopular=>', error);
        return null;
    }
}

export const ApiMovie = {
    getMoviePopular
}