const allFamilies = {
  archer_ie: {
    name: "Archer Family",
    file: "archer_family_history_ie.html",
    category: "ie",
    family_group: "O'Keeffe",
    groupOrder: "4",
    sortOrder: "1",
  },
  brocas: {
    name: "Brocas Family",
    file: "brocas_family_history.html",
    category: "uk",
    family_group: "Vickers",
    groupOrder: "1",
    sortOrder: "1",
  },
  brown: {
    name: "Brown Family",
    file: "brown_family_history.html",
    category: "uk",
    family_group: "Vickers",
    groupOrder: "2",
    sortOrder: "1",
  },
  dobson: {
    name: "Dobson Family",
    file: "dobson_family_history.html",
    category: "uk",
    family_group: "Vickers",
    groupOrder: "2",
    sortOrder: "2",
  },
  doyly: {
    name: "Doyly Family",
    file: "doyly_family_history.html",
    category: "uk",
    family_group: "Vickers",
    groupOrder: "1",
    sortOrder: "2",
  },
  fowler: {
    name: "Fowler Family",
    file: "fowler_family_history.html",
    category: "uk",
    family_group: "Lawrence",
    groupOrder: "3",
    sortOrder: "1",
  },
  kennedy: {
    name: "Kennedy Family",
    file: "kennedy_family_history.html",
    category: "ie",
    family_group: "O'Keeffe",
    groupOrder: "4",
    sortOrder: "2",
  },
  lawless: {
    name: "Lawless Family",
    file: "lawless_family_history.html",
    category: "ie",
    family_group: "O'Keeffe",
    groupOrder: "4",
    sortOrder: "3",
  },
  lawrence: {
    name: "Lawrence Family",
    file: "lawrence_family_history.html",
    category: "uk",
    family_group: "Lawrence",
    groupOrder: "3",
    sortOrder: "4",
  },
  okeefe: {
    name: "O'Keeffe Family",
    file: "o'Keeffe_family_history.html",
    category: "ie",
    family_group: "O'Keeffe",
    groupOrder: "4",
    sortOrder: "4",
  },
  puttenham: {
    name: "Puttenham Family",
    file: "puttenham_family_history.html",
    category: "uk",
    family_group: "Vickers",
    groupOrder: "1",
    sortOrder: "4",
  },
  vickers: {
    name: "Vickers Family",
    file: "vickers_family_history.html",
    category: "uk",
    family_group: "Vickers",
    groupOrder: "1",
    sortOrder: "4",
  },
  archer_uk: {
    name: "Archer Family",
    file: "archer_family_history_uk.html",
    category: "uk",
    family_group: "Lawrence",
    groupOrder: "3",
    sortOrder: "2",
  },
};
function renderFamilyButtons(elementId) {
  const html = Object.values(allFamilies)
    .map(
      (p) => `
        <a class="family-button ${p.category}-button"
           href="pages/overviews/${p.file}">
           ${p.name}

        </a>
      `,
    )
    .join("");

  document.getElementById(elementId).innerHTML = html;
}
function renderFamilyGroup(elementId) {
  // STEP 1
  // Get all family data as an array

  const families = Object.values(allFamilies);

  // STEP 2
  // Sort families by groupOrder, then sortOrder

  families.sort((a, b) => {
    if (a.groupOrder !== b.groupOrder) {
      return a.groupOrder - b.groupOrder;
    }

    return a.sortOrder - b.sortOrder;
  });

  // STEP 3
  // Generate HTML text
  // Note - category controls the button colour

  const html = families
    .map(
      (p) => `
        <a class="family-button ${p.category}-button"
           href="pages/overviews/${p.file}">
           ${p.name}
        </a>
      `,
    )
    .join("");

  // STEP 4
  // Render HTML into the page

  document.getElementById(elementId).innerHTML = html;
}

function renderGroupedFamilies() {
  // STEP 1
  // Convert object into array

  const sortedFamilies = Object.values(allFamilies);

  // STEP 2
  // Sort by groupOrder, then sortOrder

  sortedFamilies.sort((a, b) => {
    if (a.groupOrder !== b.groupOrder) {
      return a.groupOrder - b.groupOrder;
    }

    return a.sortOrder - b.sortOrder;
  });

  // STEP 3
  // Create grouped structure

  const grouped = {};

  sortedFamilies.forEach((f) => {
    if (!grouped[f.family_group]) {
      grouped[f.family_group] = [];
    }

    grouped[f.family_group].push(f);
  });

  // STEP 4
  // Build HTML

  let html = "";

  for (const category in grouped) {
    html += `
      <div class="family-group">

        <h3>${category}</h3>

        <div class="family-subgrid">

${grouped[category]
  .map(
    (p) => `
      <a class="family-button ${p.category}-button"
         href="pages/overviews/${p.file}">
        ${p.name}
      </a>
    `,
  )
  .join("")}

        </div>

      </div>
    `;
  }

  // STEP 5
  // Render into HTML page

  document.getElementById("familyGrid").innerHTML = html;
}
