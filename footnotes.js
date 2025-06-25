console.log("Footnotes JS loaded");
document.addEventListener("DOMContentLoaded", function () {
  const refs = document.querySelectorAll(".footnote-ref");

  refs.forEach(ref => {
    ref.addEventListener("click", function (e) {
      e.preventDefault();

      // Remove any existing inline footnotes
      const existing = document.querySelector(".inline-footnote");
      if (existing) {
        // If the same ref is clicked again, toggle (remove and exit)
        if (existing.previousSibling === ref) {
          existing.remove();
          return;
        }
        existing.remove();
      }

      // Get the footnote ID (e.g., "fn1")
      const id = this.getAttribute("href").substring(1);
      const footnote = document.getElementById(id);
      if (!footnote) return;

      // Clone the footnote content
      const footnoteContent = footnote.innerHTML;

      // Create inline footnote element
      const inline = document.createElement("span");
      inline.className = "inline-footnote";
      inline.innerHTML = footnoteContent;

      // Insert after the reference
      this.parentNode.insertBefore(inline, this.nextSibling);
    });
  });
});
