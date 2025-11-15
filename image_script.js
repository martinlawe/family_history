// Attach click events to every image in the gallery
document.querySelectorAll(".gallery img").forEach((img) => {
  img.addEventListener("click", () => {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    lightboxImg.src = img.dataset.full;
    lightbox.style.display = "flex";
    lightbox.scrollTop = 0;
    document.body.style.overflow = "hidden"; // disable background scroll
  });
});

// Close lightbox when clicking outside the image
document.getElementById("lightbox").addEventListener("click", (e) => {
  if (e.target.id === "lightbox") {
    e.currentTarget.style.display = "none";
    document.body.style.overflow = "";
  }
});

// Zoom toggle
const lightboxImg = document.getElementById("lightbox-img");
lightboxImg.addEventListener("click", (e) => {
  e.stopPropagation(); // prevent closing the lightbox
  if (lightboxImg.classList.contains("zoomed")) {
    // Zoomed OUT (normal expanded)
    lightboxImg.classList.remove("zoomed");
    lightboxImg.style.maxWidth = "90%";
    lightboxImg.style.width = "auto";
    lightboxImg.style.cursor = "zoom-in";
  } else {
    // Zoomed IN (large view)
    lightboxImg.classList.add("zoomed");
    lightboxImg.style.maxWidth = "250%"; // much larger!
    lightboxImg.style.width = "250%"; // explicitly set width
    lightboxImg.style.cursor = "zoom-out";
  }
});
