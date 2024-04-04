import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';

export const useFetch = ({apiPath, queryTerm=""}) => {

    const [data, setData] = useState([]);
    const auth = 'Bearer '+import.meta.env.VITE_API_READ_ACCESS_TOKEN;
    const apiKey = import.meta.env.VITE_API_KEY;
    const baseUrl = import.meta.env.VITE_BASE_MOVIE_URL;
    const url = `${baseUrl}/${apiPath}?api_key=${apiKey}&query=${queryTerm}`

      useEffect(() => {
        const fetchMovies = async () => {
    
          try {
            const response = await axios.get(url, {
              headers: {
                  'Authorization': auth
              }
          });
          
          setData(response.data.results);
          } catch (error) {
            console.log(error);
          }      
        }
        fetchMovies();
      },[url])

      return { data }
}
