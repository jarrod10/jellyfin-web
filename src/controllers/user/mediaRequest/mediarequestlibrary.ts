import axios, { AxiosResponse, AxiosRequestConfig, RawAxiosRequestHeaders } from 'axios';

const BASEURL = 'http://139.168.160.38:5055';

const client = axios.create();

// async function getCurrentAuth() {
//     const requestUrl: string = buildUrl(BASEURL, '/login');
//     const config: AxiosRequestConfig = {
//         method: 'GET',
//         headers: {
//             'Accept': 'application/json'
//         } as RawAxiosRequestHeaders
//     };
//     try {
//         const response: AxiosResponse = await client.get(requestUrl, config);
//         return response.data;
//     } catch (err) {
//         console.log(err);
//     }
// }

async function getNewAuth() {
    const requestUrl: string = buildUrl(BASEURL, '/api/v1/auth/jellyfin');
    const config: AxiosRequestConfig = {
        method: 'POST',
        headers: {
            'Accept': 'application/json'
        } as RawAxiosRequestHeaders,
        data: {
            username: 'Jarrod',
            password: 'Jacinta123'
        }
    };
    try {
        const response: AxiosResponse = await client.get(requestUrl, config);
        return response.data;
    } catch (err) {
        console.log(err);
    }
}

// function showMediaRequestLibrary(page: string) {
//     return page;
//     // const mediaRequestLibrary = new MediaRequestLibrary();
//     // document.getElementById('main').innerHTML = mediaRequestLibrary.getMediaRequestHTML();
// }

function buildUrl(base: string, query: string) {
    return base + query;
}

export default async function () { //view: string) {
    // if not already auth'd to Jellyseerr
    await getNewAuth();
    // if (!getCurrentAuth()) {
    // }

    // getCurrentAuth();
    // await showMediaRequestLibrary(view);
}
