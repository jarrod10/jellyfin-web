// import axios from 'axios';
// import ServerConnections from 'components/ServerConnections';
import simpleGet from 'simple-get';

const BASEURL = 'http://139.168.160.38:5055';

function getCurrentAuth() {
    const requestUrl: string = buildUrl(BASEURL, '/auth/me');

    const options = {
        url: requestUrl,
        body: ''
    };

    simpleGet.post(options, function (err: any, res: any, data: any) {
        console.log(err + res + data);
    });
    // const client = ServerConnections.getOrCreateApiClient('mediaRequest');
    // await client.get(requestUrl);
    // axios.get(requestUrl)
    //     .then(function (response) {
    //         console.log(response);
    //         // if (response.status === 200) {
    //         // return true;
    //         // } else {
    //         return false;
    //         // }
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //         return false;
    //     })
    //     .finally(function () {
    //         console.log('finally');
    //     });

    return false;
}

// function getNewAuth() {
//     const requestUrl = buildUrl(BASEURL, '/auth/jellyfin');
//     axios.get(requestUrl)
//         .then(function (response) {
//             console.log(response);
//         })
//         .catch(function (error) {
//             console.log(error);
//         })
//         .finally(function () {
//             console.log('finally');
//         });
// }

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
    // if (!getCurrentAuth()) {
    //     getNewAuth();
    // }

    getCurrentAuth();

    // if auth'd, display page, else ??

    showMediaRequestLibrary(view);

    // if (btnDeviceMenu) {
    //     showDeviceMenu(view, btnDeviceMenu, btnDeviceMenu.getAttribute('data-id'));
    // }
    // });
    // view.addEventListener('viewshow', function () {
    //     loadData(this);
    // });

    // view.querySelector('#deviceDeleteAll').addEventListener('click', function() {
    //     deleteAllDevices(view);
    // });
}
