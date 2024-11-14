const URL = "https://api.pexels.com/v1/search";
const apiKey = "yTULgze86CRA1xNYKh8q8ScUFBcQdno0066ed3csL3OKEmvRCtkdZVC5";

const loadBtn1 = document.getElementById("loadBtn");
const loadBtn2 = document.getElementById("loadBtn2");
const mainDiv = document.getElementById("mainContainer");

const searchForm = document.querySelector("form");
const searchInput = document.querySelector("form-control");

//funzione creazione cards
const createCards = (obj) => {
  mainDiv.innerHTML = "";
  obj.photos.forEach((photo) => {
    //console.log(photo.src.original);
    const col = document.createElement("div");
    col.className = "col-md-4";
    const card = document.createElement("div");
    card.className = "card mb-4 shadow-sm";
    card.innerHTML = `
        <img src="${photo.src.landscape}" class="bd-placeholder-img card-img-top img-fluid object-fit" style="heigth: 200px;"/>
                <div class="card-body">
                  <h5 class="card-title"><a href="./details.html?pexelsId=${photo.id}">${photo.photographer}</a></h5>
                  <p class="card-text">
                    ${photo.alt}
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">Hide</button>
                    </div>
                    <small class="text-muted">${photo.id}</small>
                  </div>
        `;
    //aggiungo gli elementi nell'html
    mainDiv.appendChild(col);
    col.appendChild(card);
  });
};
//funzione di fetch da api
const handleAPIfetch = function (queryName) {
  fetch("https://api.pexels.com/v1/search?query=" + queryName, {
    method: "GET",
    headers: { Authorization: apiKey }
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((imagesObj) => {
      createCards(imagesObj);
    })
    .catch((error) => console.error(error));
};

//gestione click di Load btn
loadBtn1.onclick = () => {
  handleAPIfetch("tropical");
};

//gestione click secondo btn
loadBtn2.onclick = () => {
  handleAPIfetch("mountains");
};

//gestione SearchForm submit
searchForm.onsubmit = (event) => {
  event.preventDefault();
  const searchValue = event.target.elements.userQuery.value;
  handleAPIfetch(searchValue);
};

//window.addEventListener("DOMContentLoaded", function () {
//  getImages1();
//});
