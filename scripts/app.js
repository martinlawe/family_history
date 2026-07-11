fetch("data/flat_data/family.ged")
  .then((response) => response.text())
  .then((text) => {
    const { people, families } = parseGedcom(text);

    console.log("APP LOADED ✔");
    console.log("RAW GEDCOM LOADED ✔");

    console.log(people);
    console.log(families);

    renderPeople(people);
    renderFamilies(families, people);
  });

//--------------------------------------------------
// GEDCOM PARSER
//--------------------------------------------------

function parseGedcom(text) {
  const people = {};
  const families = {};

  const lines = text.split("\n");

  let currentPerson = null;
  let currentFamily = null;

  for (let line of lines) {
    line = line.trim();

    //------------------------------------------
    // New Person
    //------------------------------------------

    if (line.startsWith("0 @I") && line.includes("INDI")) {
      const id = line.match(/@I\d+@/)[0];

      currentPerson = {
        id,
        name: "",
        sex: "",
        FAMS: "",
        FAMC: "",
      };

      people[id] = currentPerson;
      currentFamily = null;
    }

    //------------------------------------------
    // Person Fields
    //------------------------------------------
    else if (currentPerson && line.startsWith("1 NAME")) {
      const name = line.replace("1 NAME", "").replace(/\//g, "").trim();

      if (name !== "") {
        currentPerson.name = name;
      }
    } else if (currentPerson && line.startsWith("1 SEX")) {
      currentPerson.sex = line.replace("1 SEX", "").trim();
    } else if (currentPerson && line.startsWith("1 FAMS")) {
      currentPerson.FAMS = line.replace("1 FAMS", "").trim();
    } else if (currentPerson && line.startsWith("1 FAMC")) {
      currentPerson.FAMC = line.replace("1 FAMC", "").trim();
    }

    //------------------------------------------
    // New Family
    //------------------------------------------
    else if (line.startsWith("0 @F") && line.includes("FAM")) {
      const id = line.match(/@F\d+@/)[0];

      currentFamily = {
        id,
        husb: "",
        wife: "",
        chil: [],
      };

      families[id] = currentFamily;
      currentPerson = null;
    }

    //------------------------------------------
    // Family Fields
    //------------------------------------------
    else if (currentFamily && line.startsWith("1 HUSB")) {
      currentFamily.husb = line.replace("1 HUSB", "").trim();
    } else if (currentFamily && line.startsWith("1 WIFE")) {
      currentFamily.wife = line.replace("1 WIFE", "").trim();
    } else if (currentFamily && line.startsWith("1 CHIL")) {
      currentFamily.chil.push(line.replace("1 CHIL", "").trim());
    }
  }

  return { people, families };
}

//--------------------------------------------------
// PEOPLE
//--------------------------------------------------

function renderPeople(people) {
  const output = document.getElementById("peopleOutput");

  output.innerHTML = "<h2>People Found</h2>";

  for (const id in people) {
    const person = people[id];

    const div = document.createElement("div");

    div.textContent = `${person.id} ${person.name} (${person.sex}) (${person.FAMS}) (${person.FAMC})`;

    output.appendChild(div);
  }
}

//--------------------------------------------------
// FAMILIES
//--------------------------------------------------

function renderFamilies(families, people) {
  const output = document.getElementById("familyOutput");

  output.innerHTML = "<h2>Families Found</h2>";

  for (const id in families) {
    const family = families[id];

    // Husband
    const husband = people[family.husb];
    const husbandName = husband ? husband.name : "(unknown)";

    // Wife
    const wife = people[family.wife];
    const wifeName = wife ? wife.name : "(unknown)";

    // Children
    const children = family.chil.map((childId) => {
      const child = people[childId];

      return child ? child.name : childId;
    });

    const div = document.createElement("div");

    div.style.marginBottom = "12px";

    div.innerHTML = `
            <strong>${family.id}</strong><br>
            Husband: ${husbandName}<br>
            Wife: ${wifeName}<br>
            Children: ${children.join(", ")}
        `;

    output.appendChild(div);
  }
}
