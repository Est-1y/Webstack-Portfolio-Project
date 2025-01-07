import axios from 'axios';

// base url
export const baseUrl = 'https://aceyhost.p.rapidapi.com'

export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '4306ebd11dmshd6f7fbd88ab18bep18f5f3jsn64d2ce237638',
            'X-RapidAPI-Host': 'aceyhost.p.rapidapi.com'
          }
    });

    return data;
}