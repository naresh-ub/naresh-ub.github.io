
function openImageModal(imageBasePath) {
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');

// Automatically pick the best image format
modalImg.src = imageBasePath.replace('*', 'png'); // fallback to PNG for preview
modal.style.display = "flex";
}

function closeImageModal() {
document.getElementById('imageModal').style.display = "none";
}
