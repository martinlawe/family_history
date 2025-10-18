// --- Utility: Create SVG Path ---
function makePath(d, colour = "#555555;") {
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", d);
  path.setAttribute("stroke", colour);
  path.setAttribute("stroke-width", "2");
  path.setAttribute("fill", "none");
  return path;
}

// --- Vertical line (top–bottom) ---
function drawVerticalLine(svg, fromEl, toEl, colour) {
  const fromRect = fromEl.getBoundingClientRect();
  const toRect = toEl.getBoundingClientRect();
  const box = svg.parentElement.getBoundingClientRect();

  const x1 = fromRect.left + fromRect.width / 2 - box.left;
  const y1 = fromRect.bottom - box.top;
  const x2 = toRect.left + toRect.width / 2 - box.left;
  const y2 = toRect.top - box.top;

  svg.appendChild(makePath(`M${x1},${y1} L${x2},${y2}`, colour));
}

// --- Horizontal line (side-to-side, same level) ---
function drawHorizontalLine(svg, fromEl, toEl, colour) {
  const fromRect = fromEl.getBoundingClientRect();
  const toRect = toEl.getBoundingClientRect();
  const box = svg.parentElement.getBoundingClientRect();

  const x1 = fromRect.right - box.left; // right edge of parent
  const y1 = fromRect.top + fromRect.height / 2 - box.top;
  const x2 = toRect.left - box.left; // left edge of child
  const y2 = toRect.top + toRect.height / 2 - box.top;

  svg.appendChild(makePath(`M${x1},${y1} L${x2},${y2}`, colour));
}

// --- Downward dogleg (bus connecting multiple children) ---
function drawDownDogleg(svg, fromEl, toEls, colour) {
  const fromRect = fromEl.getBoundingClientRect();
  const box = svg.parentElement.getBoundingClientRect();
  const startX = fromRect.left + fromRect.width / 2 - box.left;
  const startY = fromRect.bottom - box.top;

  const toRects = toEls.map((el) => el.getBoundingClientRect());
  const midY = startY + 10;

  const leftX = toRects[0].left + toRects[0].width / 2 - box.left;
  const rightX =
    toRects[toRects.length - 1].left +
    toRects[toRects.length - 1].width / 2 -
    box.left;

  svg.appendChild(makePath(`M${startX},${startY} L${startX},${midY}`, colour));
  svg.appendChild(makePath(`M${leftX},${midY} L${rightX},${midY}`, colour));

  toEls.forEach((childEl) => {
    const cRect = childEl.getBoundingClientRect();
    const childX = cRect.left + cRect.width / 2 - box.left;
    const childY = cRect.top - box.top;
    svg.appendChild(
      makePath(`M${childX},${midY} L${childX},${childY}`, colour)
    );
  });
}

// --- Side-to-side dogleg (L-shaped connection across columns) ---
function drawSideDogleg(svg, fromEl, toEl, colour) {
  const fromRect = fromEl.getBoundingClientRect();
  const toRect = toEl.getBoundingClientRect();
  const box = svg.parentElement.getBoundingClientRect();

  const startX = fromRect.right - box.left;
  const startY = fromRect.top + fromRect.height / 2 - box.top;
  const endX = toRect.left - box.left;
  const endY = toRect.top + toRect.height / 2 - box.top;

  const offset = 40; // horizontal offset for dogleg
  const pathData = `M${startX},${startY} H${startX + offset} V${endY} H${endX}`;
  svg.appendChild(makePath(pathData, colour));
}

// --- Main connection drawing function ---
function drawAllConnections() {
  // clear SVGs first
  const uniqueContainers = [...new Set(connections.map((c) => c.container))];
  uniqueContainers.forEach((container) => {
    const svg =
      document.getElementById(`lines-${container}`) ||
      document.getElementById("tree-lines");
    if (svg) svg.innerHTML = "";
  });

  // draw all connections
  connections.forEach((c) => {
    const svg =
      document.getElementById(`lines-${c.container}`) ||
      document.getElementById("tree-lines");
    if (!svg) return;

    const fromEl = document.getElementById(c.from);
    if (!fromEl) return;

    const colour = c.colour || "black";

    if (c.type === "vertical") {
      const toEl = document.getElementById(c.to);
      if (toEl) drawVerticalLine(svg, fromEl, toEl, colour);
    } else if (c.type === "horizontal") {
      const toEl = document.getElementById(c.to);
      if (toEl) drawHorizontalLine(svg, fromEl, toEl, colour);
    } else if (c.type === "dogleg") {
      const toEls = (Array.isArray(c.to) ? c.to : [c.to])
        .map((id) => document.getElementById(id))
        .filter(Boolean);

      if (toEls.length > 1) drawDownDogleg(svg, fromEl, toEls, colour);
      else if (toEls.length === 1)
        drawSideDogleg(svg, fromEl, toEls[0], colour);
    }
  });
}

window.addEventListener("load", drawAllConnections);
window.addEventListener("resize", drawAllConnections);
