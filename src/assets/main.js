const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCX9NJ471o7Wie1DQe94RVIg&part=snippet%2Cid&order=date&maxResults=20'


const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd5e4f7bb1dmshd719d177587c9b9p1c6eedjsn9023ea21f61f',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async() => {
    try {
        const videos = await fetchData(API);
        let view = `
        ${videos.items.map(video => `
 
            <div class="flex"
                >
                <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
            </div>
            <h3 class="text-sm text-gray-700">
                <span aria-hidden="true" class=" inset-0"></span>
                ${video.snippet.title}
            </h3>

            
        `).slice(0,4).join('')}
          
        `;
        content.innerHTML = view;
    } catch {
        console.log(error);
    }
})();