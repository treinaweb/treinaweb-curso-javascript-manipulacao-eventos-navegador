const thumbnails = document.querySelectorAll(".thumbnail");
const modal = document.querySelector("#modal");
const imageModal = document.querySelector("#modal-image");


function openModal(event) {
    imageModal.src = event.target.src;
    imageModal.alt = event.target.alt;
    modal.style.display = 'flex';
}

function closeModal(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}


thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", openModal);
});


modal.addEventListener("click", closeModal);