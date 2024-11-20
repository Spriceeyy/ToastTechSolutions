document.addEventListener('DOMContentLoaded', () => {
    const postsContainer = document.getElementById('blog-posts');

    // Example blog posts
    const posts = [
        {
            title: "Latest Project: AI Integration",
            content: "We're excited to announce our latest AI integration project...",
            date: "November 2024"
        },
        {
            title: "Web Development Best Practices",
            content: "Exploring modern web development approaches and technologies...",
            date: "November 2024"
        }
    ];

    function renderPosts() {
        postsContainer.innerHTML = posts.map(post => `
            <article class="bg-gray-100 p-6 rounded-lg shadow-lg">
                <h3 class="text-xl font-bold mb-2">${post.title}</h3>
                <p class="text-gray-600 mb-2">${post.date}</p>
                <p class="text-gray-700">${post.content}</p>
            </article>
        `).join('');
    }

    renderPosts();
});