//All files mentioned here can be found in the "Commentary" folder
const allPeriods = {
  Windsor: {
    name: "Windsor Past and Present",
    file: "../content/commentary/Windsor_past_present.html",
    category: "UK",
    startYear: null,
    endYear: null,
  },
  early_middle: {
    name: "Early Middle Ages",
    file: "../content/commentary/early_middle_ages.html",
    category: "UK",
    startYear: 476,
    endYear: 1000,
  },

  high_middle: {
    name: "High Middle Ages",
    file: "../content/commentary/high_middle_ages.html",
    category: "UK",
    startYear: 1000,
    endYear: 1300,
  },

  anglo_saxon: {
    name: "Late Anglo-Saxon & Norman Period",
    file: "../content/commentary/late_anglo-saxon_&_norman_period.html",
    category: "UK",
    startYear: 1040,
    endYear: 1154,
  },

  medieval: {
    name: "Medieval Period",
    file: "../content/commentary/medieval_period.html",
    category: "UK",
    startYear: 1066,
    endYear: 1485,
  },

  late_middle: {
    name: "Late Middle Ages",
    file: "../content/commentary/late_middle_ages.html",
    category: "UK",
    startYear: 1300,
    endYear: 1500,
  },

  early_modern: {
    name: "Early Middle Period",
    file: "../content/commentary/early_middle_period.html",
    category: "UK",
    startYear: 1500,
    endYear: 1800,
  },

  civil_war: {
    name: "Civil War and Commonwealth Period",
    file: "civil_war_and_commonwealth_period.html",
    category: "UK",
    startYear: 1642,
    endYear: 1660,
  },

  restor: {
    name: "Restoration and Enlightenment Period",
    file: "../content/commentary/restoration_and_enlightenment_period.html",
    category: "UK",
    startYear: 1660,
    endYear: 1750,
  },

  georgian: {
    name: "Georgian Period",
    file: "../content/commentary/georgian_period.html",
    category: "UK",
    startYear: 1714,
    endYear: 1837,
  },

  tudor: {
    name: "Tudor and Early Stuart Period",
    file: "../content/commentary/tudor_and_early_stuart_period.html",
    category: "UK",
    startYear: 1485,
    endYear: 1714,
  },

  industrial: {
    name: "Industrial and Revolutionary Age",
    file: "../content/commentary/industrial_and_revolutionary_age.html",
    category: "UK",
    startYear: 1800,
    endYear: 1914,
  },

  victorian: {
    name: "Victorian Period",
    file: "../content/commentary/victorian_period.html",
    category: "UK",
    startYear: 1837,
    endYear: 1901,
  },

  edwardian: {
    name: "Edwardian Period",
    file: "../content/commentary/edwardian_period.html",
    category: "UK",
    startYear: 1901,
    endYear: 1914,
  },

  ww1: {
    name: "First World War Period",
    file: "../content/commentary/first_world_war_period.html",
    category: "UK",
    startYear: 1914,
    endYear: 1918,
  },

  interwar: {
    name: "Interwar Period",
    file: "../content/commentary/interwar_period.html",
    category: "UK",
    startYear: 1918,
    endYear: 1939,
  },

  ww2: {
    name: "Second World War Period",
    file: "../content/commentary/second_world_war_period.html",
    category: "UK",
    startYear: 1939,
    endYear: 1945,
  },

  postwar: {
    name: "Post War Period",
    file: "../content/commentary/post_war_period.html",
    category: "UK",
    startYear: 1945,
    endYear: 1970,
  },

  late_20_cent: {
    name: "Late 20th Century Period",
    file: "../content/commentary/late_20th_century_period.html",
    category: "UK",
    startYear: 1970,
    endYear: 1999,
  },
  contemporary: {
    name: "Contemporary Period",
    file: "../content/commentary/contemporary_period.html",
    category: "UK",
    startYear: 2000,
    endYear: null,
  },

  suffolk: {
    name: "Suffolk History 1830 - 1839",
    file: "../content/commentary/suffolk_history_1830_to_1839.html",
    category: "UK",
    startYear: 1830,
    endYear: 1839,
  },

  // the following cover Ireland (IE)

  AoU: {
    name: "Act of Union",
    file: "../content/commentary/Ireland_Act_of_Union.html",
    category: "IE",
    startYear: 1801,
    endYear: 1845,
  },

  tiger: {
    name: "Celtic Tiger and Crash",
    file: "../content/commentary/celtic_tiger_and_crash.html",
    category: "IE",
    startYear: 1998,
    endYear: 2010,
  },

  ie_contemporary: {
    name: "Contemporary Ireland",
    file: "../content/commentary/Ireland_Contemporary_Ireland.html",
    category: "IE",
    startYear: 2010,
    endYear: null,
  },

  eu_m: {
    name: "EU Membership and Modernisation",
    file: "../content/commentary/Ireland_EU_Membership_and_Modernisation.html",
    category: "IE",
    startYear: 1973,
    endYear: 1998,
  },

  ie_post_war: {
    name: "Post War and Social Change",
    file: "../content/commentary/Ireland_Post_War_and_Social_Change.html",
    category: "IE",
    startYear: 1950,
    endYear: 1973,
  },

  revolution: {
    name: "Revolutionary Period",
    file: "../content/commentary/Ireland_Revolutionary_Period.html",
    category: "IE",
    startYear: 1916,
    endYear: 1923,
  },

  free_state: {
    name: "The Free State and Early Republic",
    file: "../content/commentary/Ireland_The_Free_State_and_Early_Republic.html",
    category: "IE",
    startYear: 1923,
    endYear: 1949,
  },

  famine: {
    name: "The Great Famine",
    file: "../content/commentary/Ireland_The_Great_Famine.html",
    category: "IE",
    startYear: 1845,
    endYear: 1870,
  },

  //the following cover the USA for the period from 1850 to present day.

  antebellum: {
    name: "Antebellum Period 1850 - 1861",
    file: "../content/commentary/antebellum_period.html",
    category: "US",
    startYear: 1850,
    endYear: 1861,
  },

  us_civil_war: {
    name: "USA Civil War Period 1861 - 1865",
    file: "../content/commentary/us_civil_war_period.html",
    category: "US",
    startYear: 1861,
    endYear: 1865,
  },

  reconstruction: {
    name: "Reconstruction Period 1865 - 1877",
    file: "../content/commentary/reconstruction_period.html",
    category: "US",
    startYear: 1865,
    endYear: 1877,
  },

  gilded_age: {
    name: "Gilded Age 1877 - 1900",
    file: "../content/commentary/gilded_age.html",
    category: "US",
    startYear: 1877,
    endYear: 1900,
  },

  progressive_era: {
    name: "Progressive Era 1900 - 1917",
    file: "../content/commentary/progressive_era.html",
    category: "US",
    startYear: 1900,
    endYear: 1917,
  },

  ww1_period: {
    name: "World War 1 Period 1917 - 1918",
    file: "../content/commentary/ww1_period.html",
    category: "US",
    startYear: 1917,
    endYear: 1918,
  },

  interwar_period: {
    name: "US Interwar Period 1919 - 1941",
    file: "../content/commentary/interwar_period_us.html",
    category: "US",
    startYear: 1919,
    endYear: 1941,
  },

  ww2_period: {
    name: "Second World War Period 1941 - 1945",
    file: "../content/commentary/ww2_period.html",
    category: "US",
    startYear: 1941,
    endYear: 1945,
  },

  post_war: {
    name: "Post War America 1945 - 1960",
    file: "../content/commentary/post_war.html",
    category: "US",
    startYear: 1945,
    endYear: 1960,
  },

  modern_period: {
    name: "Civil Rights and Modern America 1960–1980",
    file: "../content/commentary/modern_period.html",
    category: "US",
    startYear: 1960,
    endYear: 1980,
  },

  us_contemporary: {
    name: "Contemporary America 1980 - present",
    file: "../content/commentary/contemporary.html",
    category: "US",
    startYear: 1980,
    endYear: null,
  },
};
function renderPeriods(elementId, personPeriods) {
  const html = personPeriods
    .map((key) => {
      console.log("KEY:", key);

      const p = allPeriods[key];

      console.log("MATCH:", p);

      if (!p) {
        return "[ERROR]";
      }

      return `
        <a class="period-link"
           href="../../../commentary/${p.file}">
           ${p.name}
        </a>
      `;
    })
    .join(", ");

  document.getElementById(elementId).innerHTML =
    "Lived during the " + html + ".";
}
function renderPeriodButtons(elementId) {
  const html = Object.values(allPeriods)
    .map(
      (p) => `
        <a class="period-button ${p.category}-button"
          href="../../../commentary/${p.file}">
           ${p.name}
                 </a>
        
      `,
    )
    .join("");

  document.getElementById(elementId).innerHTML = html;
}
