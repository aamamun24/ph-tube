const tubeButton = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/videos/categories')
    const data = await response.json()
    const tubes = data.data;

    tubes.forEach(tube => {
        const section = document.getElementById('button-container');
        const div = document.createElement('div');
        console.log(tube);
        div.innerHTML = `
        <button onclick="tubeVideo('${tube.category_id}')" class="bg-[#25252526] py-2 px-5 rounded text-[#252525B2] text-base font-medium">${tube.category}</button>
        `
        section.appendChild(div)
    })
}


const tubeVideo = async (categoryId) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`)
    const data = await response.json()
    const videos = data.data;
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = ''
    videos.forEach(video => {
        const card = document.createElement('div');
        card.innerHTML = `
                <div class="relative">
                    <img src="${video.thumbnail}" alt="">
                    <p class="absolute bottom-3 right-3 px-2 py-1 rounded text-white text-[10px] bg-[#171717]">${video.others.posted_date}s ago</p>
                </div>
                <div class="flex items-start gap-3 mt-5">
                    <img class="w-10 rounded-full" src="${video.authors[0].profile_picture}" alt="">
                    <div>
                        <h2 class="text-base font-bold text-[#171717] leading-6">${video.title}</h2>
                        <div class="flex gap-2 items-center mt-2">
                            <p class="text-sm text[#171717B2] ">${video.authors[0].profile_name}</p>
                            <p>*</p>
                        </div>
                        <p class="text-sm text[#171717B2] mt-2">${video.others.views}</p>
                    </div>
                </div>
        `;
        cardContainer.appendChild(card);
    })

}

tubeButton()