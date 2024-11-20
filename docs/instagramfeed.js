class InstagramFeed {
    constructor() {
        this.feedContainer = document.getElementById('instagram-feed');
        this.loadFeed();
    }

    async loadFeed() {
        const instagramUrl = 'https://www.instagram.com/toasttechsolutions/';
        const placeholder = `
            <div class="text-center">
                <h3 class="text-xl font-bold mb-4">Follow Us on Instagram</h3>
                <a href="${instagramUrl}" target="_blank" class="inline-block">
                    <i class="fab fa-instagram fa-3x mb-4"></i>
                    <p>@toasttechsolutions</p>
                </a>
            </div>
        `;
        this.feedContainer.innerHTML = placeholder;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new InstagramFeed();
});