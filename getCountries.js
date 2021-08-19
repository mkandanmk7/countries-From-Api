//fetch part of web api:

fetch("https://restcountries.eu/rest/v2/all")
  .then((data) => data.json())  //convert to data
  .then((countries) => countries.forEach((country) => createFlag(country)));
// .catch((data) => console.log("user Not found"));



function createFlag({ name, flag, population, region, capital }) {
  const info = document.createElement("div");
  info.className = "container";
  info.innerHTML = `
  <div class="flag-container">
  <img class="flag" src="${flag} " width="250px" heigth="150px">

  </div>
  <div class="details">
  <h3>${name}</h3>
  <p><b>Population:</b>${population}</p>
  <p><b>Region:</b>${region}</p>
  <p><b>Capital:</b>${capital}</p>
  </div>
  
  
  `;
  document.body.append(info);
}

// console.log(fetch("https://restcountries.eu/rest/v2/all"));
