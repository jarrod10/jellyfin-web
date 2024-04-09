import axios, { AxiosResponse, AxiosRequestConfig, RawAxiosRequestHeaders } from 'axios';

const BASEURL = 'http://139.168.160.38:5055';

const client = axios.create({
    baseURL: 'https://api.github.com',
  });

async function getCurrentAuth() {
    const requestUrl: string = buildUrl(BASEURL, '/auth/me');
    const config: AxiosRequestConfig = {
        headers: {
        'Accept': 'application/vnd.github+json',
        } as RawAxiosRequestHeaders,
    };
    try {
        const response: AxiosResponse = await client.get(requestUrl, config);
        return response.data;
    } catch(err) {
        console.log(err);
    }  
}

function showMediaRequestLibrary(page: string) {
    return page;
    // const mediaRequestLibrary = new MediaRequestLibrary();
    // document.getElementById('main').innerHTML = mediaRequestLibrary.getMediaRequestHTML();
}

function buildUrl(base: string, query: string) {
    return base + query;
}

export default function (view: string) {
    // if not already auth'd to Jellyseerr
    if (!getCurrentAuth()) {
        // getNewAuth();
    }

    // getCurrentAuth();
    // showMediaRequestLibrary(view);
}
