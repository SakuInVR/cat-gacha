const btn = document.getElementById('refresh-btn');
const container = document.getElementById('cat-container');

async function fetchCat() {
    // 猫の画像を取得するAPI
    const response = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await response.json();
    
    // 画像を表示
    container.innerHTML = `<img src="${data[0].url}" alt="cat" style="max-width: 100%;">`;
}

btn.addEventListener('click', fetchCat);
fetchCat(); // 初回読み込み時