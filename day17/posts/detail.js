// detail.js
const apiUrl = "https://jsonplaceholder.typicode.com";

async function displayPostDetail() {
    const postDetail = document.getElementById("post-detail");
    
    try {
        // 1. URL 파라미터에서 postId 추출
        const urlParams = new URLSearchParams(window.location.search);
        const postId = urlParams.get("postId");
        if (!postId) throw new Error("No post ID provided");

        const cacheKey = `post_${postId}`;
        const cachedItem = localStorage.getItem(cacheKey);
        const now = new Date().getTime();
        const FIVE_MINUTES = 5 * 60 * 1000;

        let postData = null;

        // 2. 캐시 확인 로직 (도전 과제)
        if (cachedItem) {
            const parsedCache = JSON.parse(cachedItem);
            // 5분 이내인지 확인
            if (now - parsedCache.timestamp < FIVE_MINUTES) {
                postData = parsedCache.data;
                console.log("Post loaded from localStorage");
            }
        }

        // 3. 캐시가 없거나 만료된 경우 fetch
        if (!postData) {
            const response = await fetch(`${apiUrl}/posts/${postId}`);
            if (!response.ok) throw new Error("Failed to fetch post details");
            
            postData = await response.json();

            // 데이터와 타임스탬프를 함께 저장
            const cacheData = {
                data: postData,
                timestamp: now
            };
            localStorage.setItem(cacheKey, JSON.stringify(cacheData));
            console.log("Post fetched from API");
        }

        // 4. 화면 렌더링
        renderPost(postData);

    } catch (error) {
        console.error(`Error: [${error.message}]`);
        postDetail.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
    }
}

function renderPost(post) {
    const postDetail = document.getElementById("post-detail");
    postDetail.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
    `;
}

// 실행
displayPostDetail();