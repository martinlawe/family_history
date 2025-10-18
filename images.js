// Attach click events to every image in the gallery
document.querySelectorAll(".gallery img").forEach((img) => {
  img.addEventListener("click", () => {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    lightboxImg.src = img.dataset.full;
    lightbox.style.display = "flex";
    document.body.style.overflow = "hidden"; // ✅ disable background scroll
  });
});

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  lightbox.style.display = "none";
  document.body.style.overflow = ""; // ✅ re-enable background scroll
}

const lightboxImg = document.getElementById("lightbox-img");

lightboxImg.addEventListener("click", () => {
  if (lightboxImg.style.transform === "scale(2)") {
    lightboxImg.style.transform = "scale(1)";
    lightboxImg.style.cursor = "zoom-in";
  } else {
    lightboxImg.style.transform = "scale(2)";
    lightboxImg.style.cursor = "zoom-out";
  }
});
