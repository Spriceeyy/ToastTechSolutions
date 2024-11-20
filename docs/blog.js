document.addEventListener('DOMContentLoaded', () => {
    const blogForm = document.getElementById('new-post-form');
    const postsContainer = document.getElementById('blog-posts');

    async function loadPosts() {
        try {
            const response = await fetch('http://localhost:8000/posts/');
            const posts = await response.json();
            renderPosts(posts);
        } catch (error) {
            console.error('Error loading posts:', error);
        }
    }

    function renderPosts(posts) {
        postsContainer.innerHTML = posts.map(post => `
            <article class="bg-white rounded-lg shadow-lg p-6">
                <h3 class="text-xl font-bold mb-4">${post.title}</h3>
                <p class="text-gray-700 mb-4">${post.content}</p>
                ${post.image_url ? `<img src="${post.image_url}" alt="${post.title}" class="w-full rounded-lg">` : ''}
            </article>
        `).join('');
    }

    loadPosts();
});