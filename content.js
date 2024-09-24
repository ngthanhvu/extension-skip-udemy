let scrubButton;

// Hàm để tạo nút Tua và thêm vào trang
function createScrubButton() {
    if (!scrubButton) {
        scrubButton = document.createElement('button');
        scrubButton.textContent = 'Tua Video';
        scrubButton.style.position = 'absolute';
        scrubButton.style.zIndex = '9999';
        scrubButton.style.bottom = '10px';
        scrubButton.style.right = '10px';
        scrubButton.style.padding = '10px 20px';
        scrubButton.style.fontSize = '16px';
        scrubButton.style.backgroundColor = '#007BFF';
        scrubButton.style.color = '#fff';
        scrubButton.style.border = 'none';
        scrubButton.style.borderRadius = '5px';
        scrubButton.style.cursor = 'pointer';

        // Thêm sự kiện click cho nút
        scrubButton.addEventListener('click', () => {
            scrubVideo(); // Gọi hàm tua video
        });

        // Thêm nút vào class .carousel-module--scroll-port--ViaiR
        const targetContainer = document.querySelector('.carousel-module--scroll-port--ViaiR');
        if (targetContainer) {
            targetContainer.appendChild(scrubButton);
        }
    }
}

// Hàm để tua video
function scrubVideo() {
    const video = document.querySelector('video');
    if (video) {
        video.currentTime = Math.max(0, video.duration - 5); // Tua video 5 giây trước khi kết thúc
    }
}

// Nghe thông điệp từ popup.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "showScrubButton") {
        createScrubButton(); // Tạo nút nếu chưa có
        if (scrubButton) {
            scrubButton.style.display = 'block'; // Hiện nút
        }
    }
    if (request.action === "hideScrubButton") {
        if (scrubButton) {
            scrubButton.style.display = 'none'; // Ẩn nút
        }
    }
});
