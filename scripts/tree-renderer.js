function initTree(connections) {
  const wrapper = document.querySelector(".trees-wrapper");
  if (!wrapper) return;

  console.log("initTree called");

  // --- SVG setup ---
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.classList.add("connections");

  Object.assign(svg.style, {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    pointerEvents: "none",
  });

  wrapper.style.position = "relative";
  wrapper.appendChild(svg);

  // ----------------------------
  // Helpers
  // ----------------------------

  function clearSVG() {
    svg.innerHTML = "";
  }

  function getRect(el) {
    return el.getBoundingClientRect();
  }

  function getWrapperRect() {
    return wrapper.getBoundingClientRect();
  }

  // ----------------------------
  // Drawing primitives
  // ----------------------------

  function drawLine(a, b) {
    const ar = getRect(a);
    const br = getRect(b);
    const wr = getWrapperRect();

    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");

    line.setAttribute("x1", ar.right - wr.left);
    line.setAttribute("y1", ar.top + ar.height / 2 - wr.top);
    line.setAttribute("x2", br.left - wr.left);
    line.setAttribute("y2", br.top + br.height / 2 - wr.top);

    line.setAttribute("stroke", "black");
    line.setAttribute("stroke-width", "2");

    svg.appendChild(line);
  }

  function drawDogleg(a, b) {
    const ar = getRect(a);
    const br = getRect(b);
    const wr = getWrapperRect();

    const x1 = ar.left + ar.width / 2 - wr.left;
    const y1 = ar.bottom - wr.top;

    const x2 = br.left + br.width / 2 - wr.left;
    const y2 = br.top - wr.top;

    const midY = (y1 + y2) / 2;

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

    const d = `M ${x1} ${y1} V ${midY} H ${x2} V ${y2}`;

    path.setAttribute("d", d);
    path.setAttribute("stroke", "black");
    path.setAttribute("stroke-width", "2");
    path.setAttribute("fill", "none");

    svg.appendChild(path);
  }

  function drawBridge(a, b) {
    const ar = getRect(a);
    const br = getRect(b);
    const wr = getWrapperRect();

    const x1 = ar.right - wr.left;
    const y1 = ar.top + ar.height / 2 - wr.top;

    const x2 = br.left - wr.left;
    const y2 = br.top + br.height / 2 - wr.top;

    const gapCenter = x1 + (x2 - x1) * 0.25;

    const fromTree = a.closest(".trees-container")?.id;
    const toTree = b.closest(".trees-container")?.id;

    let laneOffset = -70;

    if (fromTree === "tree1" && toTree === "tree2") {
      laneOffset = +30;
    }

    if (fromTree === "tree2" && toTree === "tree3") {
      laneOffset = 0;
    }

    const laneX = gapCenter + laneOffset;

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

    const d = `
    M ${x1} ${y1}
    H ${laneX}
    V ${y2}
    H ${x2}
  `;

    path.setAttribute("d", d.trim());
    path.setAttribute("stroke", "black");
    path.setAttribute("stroke-width", "2");
    path.setAttribute("fill", "none");

    svg.appendChild(path);
  }

  // ----------------------------
  // STEP 1: Normalise data
  // ----------------------------

  function normalise(connections) {
    const result = [];

    connections.forEach((c) => {
      const targets = Array.isArray(c.to) ? c.to : [c.to];

      targets.forEach((t) => {
        result.push({
          container: c.container,
          from: c.from,
          to: t,
          type: c.type,
        });
      });
    });

    return result;
  }

  // ----------------------------
  // STEP 2: Resolve DOM
  // ----------------------------

  function resolveConnection(c) {
    const container = c.container
      ? document.getElementById(c.container)
      : document;

    if (!container) return null;

    const fromEl = container.querySelector(`#${c.from}`);
    const toEl = container.querySelector(`#${c.to}`);

    if (!fromEl || !toEl) return null;

    return { fromEl, toEl, type: c.type };
  }

  // ----------------------------
  // STEP 3: Render
  // ----------------------------

  function render() {
    clearSVG();
    console.log("render called");

    const flatConnections = normalise(connections);

    flatConnections.forEach((c) => {
      const resolved = resolveConnection(c);
      if (!resolved) return;

      if (resolved.type === "horizontal") {
        drawLine(resolved.fromEl, resolved.toEl);
      }

      if (resolved.type === "dogleg" || resolved.type === "vertical") {
        drawDogleg(resolved.fromEl, resolved.toEl);
      }
      if (resolved.type === "bridge") {
        drawBridge(resolved.fromEl, resolved.toEl);
      }
    });
  }

  // ----------------------------
  // Lifecycle
  // ----------------------------

  window.addEventListener("load", render);
  window.addEventListener("resize", render);

  render();
}
