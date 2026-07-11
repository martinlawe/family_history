// Attach click events to every image in the gallery
document.querySelectorAll(".gallery img").forEach((img) => {
  img.addEventListener("click", () => {
    console.log("FULL PATH:", img.dataset.full);

    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    lightboxImg.src = img.dataset.full;
    lightboxImg.alt = img.alt;
    lightbox.style.display = "flex";

    // Disable background scrolling ONLY while lightbox is open
    document.body.style.overflow = "hidden";
  });
});

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");

  lightbox.style.display = "none";

  // Re-enable scrolling
  document.body.style.overflow = "auto";
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
