//All files mentioned here can be found in the "Commentary" folder
const allPeriods = {
  Windsor: {
    name: "Windsor Past and Present",
    filename: "Windsor_past_present.html",
    category: "UK",
    startYear: null,
    endYear: null,
  },
  early_middle: {
    name: "Early Middle Ages",
    filename: "early_middle_ages.html",
    category: "UK",
    startYear: 476,
    endYear: 1000,
  },

  high_middle: {
    name: "High Middle Ages",
    filename: "high_middle_ages.html",
    category: "UK",
    startYear: 1000,
    endYear: 1300,
  },

  anglo_saxon: {
    name: "Late Anglo-Saxon & Norman Period",
    filename: "late_anglo-saxon_&_norman_period.html",
    category: "UK",
    startYear: 1040,
    endYear: 1154,
  },

  medieval: {
    name: "Medieval Period",
    filename: "medieval_period.html",
    category: "UK",
    startYear: 1066,
    endYear: 1485,
  },

  late_middle: {
    name: "Late Middle Ages",
    filename: "late_middle_ages.html",
    category: "UK",
    startYear: 1300,
    endYear: 1500,
  },

  early_modern: {
    name: "Early Middle Period",
    filename: "early_middle_period.html",
    category: "UK",
    startYear: 1500,
    endYear: 1800,
  },

  civil_war: {
    name: "Civil War and Commonwealth Period",
    filename: "civil_war_and_commonwealth_period.html",
    category: "UK",
    startYear: 1642,
    endYear: 1660,
  },

  restor: {
    name: "Restoration and Enlightenment Period",
    filename: "restoration_and_enlightenment_period.html",
    category: "UK",
    startYear: 1660,
    endYear: 1750,
  },

  georgian: {
    name: "Georgian Period",
    filename: "georgian_period.html",
    category: "UK",
    startYear: 1714,
    endYear: 1837,
  },

  tudor: {
    name: "Tudor and Early Stuart Period",
    filename: "tudor_and_early_stuart_period.html",
    category: "UK",
    startYear: 1485,
    endYear: 1714,
  },

  industrial: {
    name: "Industrial and Revolutionary Age",
    filename: "industrial_and_revolutionary_age.html",
    category: "UK",
    startYear: 1800,
    endYear: 1914,
  },

  victorian: {
    name: "Victorian Period",
    filename: "victorian_period.html",
    category: "UK",
    startYear: 1837,
    endYear: 1901,
  },

  edwardian: {
    name: "Edwardian Period",
    filename: "edwardian_period.html",
    category: "UK",
    startYear: 1901,
    endYear: 1914,
  },

  ww1: {
    name: "First World War Period",
    filename: "first_world_war_period.html",
    category: "UK",
    startYear: 1914,
    endYear: 1918,
  },

  interwar: {
    name: "Interwar Period",
    filename: "interwar_period.html",
    category: "UK",
    startYear: 1918,
    endYear: 1939,
  },

  ww2: {
    name: "Second World War Period",
    filename: "second_world_war_period.html",
    category: "UK",
    startYear: 1939,
    endYear: 1945,
  },

  postwar: {
    name: "Post War Period",
    filename: "post_war_period.html",
    category: "UK",
    startYear: 1945,
    endYear: 1970,
  },

  late_20_cent: {
    name: "Late 20th Century Period",
    filename: "late_20th_century_period.html",
    category: "UK",
    startYear: 1970,
    endYear: 1999,
  },
  contemporary: {
    name: "Contemporary Period",
    filename: "contemporary_period.html",
    category: "UK",
    startYear: 2000,
    endYear: null,
  },

  suffolk: {
    name: "Suffolk History 1830 - 1839",
    filename: "suffolk_history_1830_to_1839.html",
    category: "UK",
    startYear: 1830,
    endYear: 1839,
  },

  // the following cover Ireland (IE)

  AoU: {
    name: "Act of Union",
    filename: "Ireland_Act_of_Union.html",
    category: "IE",
    startYear: 1801,
    endYear: 1845,
  },

  tiger: {
    name: "Celtic Tiger and Crash",
    filename: "celtic_tiger_and_crash.html",
    category: "IE",
    startYear: 1998,
    endYear: 2010,
  },

  ie_contemporary: {
    name: "Contemporary Ireland",
    filename: "Ireland_Contemporary_Ireland.html",
    category: "IE",
    startYear: 2010,
    endYear: null,
  },

  eu_m: {
    name: "EU Membership and Modernisation",
    filename: "Ireland_EU_Membership_and_Modernisation.html",
    category: "IE",
    startYear: 1973,
    endYear: 1998,
  },

  ie_post_war: {
    name: "Post War and Social Change",
    filename: "Ireland_Post_War_and_Social_Change.html",
    category: "IE",
    startYear: 1950,
    endYear: 1973,
  },

  revolution: {
    name: "Revolutionary Period",
    filename: "Ireland_Revolutionary_Period.html",
    category: "IE",
    startYear: 1916,
    endYear: 1923,
  },

  free_state: {
    name: "The Free State and Early Republic",
    filename: "Ireland_The_Free_State_and_Early_Republic.html",
    category: "IE",
    startYear: 1923,
    endYear: 1949,
  },

  famine: {
    name: "The Great Famine",
    filename: "Ireland_The_Great_Famine.html",
    category: "IE",
    startYear: 1845,
    endYear: 1870,
  },

  //the following cover the USA for the period from 1850 to present day.

  antebellum: {
    name: "Antebellum Period 1850 - 1861",
    filename: "antebellum_period.html",
    category: "US",
    startYear: 1850,
    endYear: 1861,
  },

  us_civil_war: {
    name: "USA Civil War Period 1861 - 1865",
    filename: "us_civil_war_period.html",
    category: "US",
    startYear: 1861,
    endYear: 1865,
  },

  reconstruction: {
    name: "Reconstruction Period 1865 - 1877",
    filename: "reconstruction_period.html",
    category: "US",
    startYear: 1865,
    endYear: 1877,
  },

  gilded_age: {
    name: "Gilded Age 1877 - 1900",
    filename: "gilded_age.html",
    category: "US",
    startYear: 1877,
    endYear: 1900,
  },

  progressive_era: {
    name: "Progressive Era 1900 - 1917",
    filename: "progressive_era.html",
    category: "US",
    startYear: 1900,
    endYear: 1917,
  },

  ww1_period: {
    name: "World War 1 Period 1917 - 1918",
    filename: "ww1_period.html",
    category: "US",
    startYear: 1917,
    endYear: 1918,
  },

  interwar_period: {
    name: "US Interwar Period 1919 - 1941",
    filename: "interwar_period_us.html",
    category: "US",
    startYear: 1919,
    endYear: 1941,
  },

  ww2_period: {
    name: "Second World War Period 1941 - 1945",
    filename: "ww2_period.html",
    category: "US",
    startYear: 1941,
    endYear: 1945,
  },

  post_war: {
    name: "Post War America 1945 - 1960",
    filename: "post_war.html",
    category: "US",
    startYear: 1945,
    endYear: 1960,
  },

  modern_period: {
    name: "Civil Rights and Modern America 1960–1980",
    filename: "modern_period.html",
    category: "US",
    startYear: 1960,
    endYear: 1980,
  },

  us_contemporary: {
    name: "Contemporary America 1980 - present",
    filename: "contemporary.html",
    category: "US",
    startYear: 1980,
    endYear: null,
  },
};
function renderPeriods(elementId, personPeriods, commentaryPath) {
  const html = personPeriods
    .map((key) => {
      const p = allPeriods[key];

      if (!p) {
        return "[ERROR]";
      }

      return `
        <a class="period-link"
           href="${commentaryPath}${p.filename}">
           ${p.name}
        </a>
      `;
    })
    .join(", ");

  document.getElementById(elementId).innerHTML =
    "Lived during the " + html + ".";
}
