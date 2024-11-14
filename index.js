const URL = "https://api.pexels.com/v1/search";
const apiKey = "yTULgze86CRA1xNYKh8q8ScUFBcQdno0066ed3csL3OKEmvRCtkdZVC5";

const loadBtn1 = document.getElementById("loadBtn");
const loadBtn2 = document.getElementById("loadBtn2");
const mainDiv = document.getElementById("mainContainer");

//funzione creazione cards
const createCards = (obj) => {
  obj.photos.forEach((photo) => {
    //console.log(photo.src.original);
    const card = document.createElement("div");
    card.className = "card mb-4 shadow-sm";
    card.innerHTML = `
        <img src="${photo.src.original}" class="bd-placeholder-img card-img-top img-fluid" />
                <div class="card-body">
                  <h5 class="card-title">Lorem Ipsum</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
        `;
    const col = document.createElement("div");
    col.className = "col-md-4";
    mainDiv.appendChild(col);
    col.appendChild(card);
  });
};
//funzione di fetch da api
const getImages = function (queryName) {
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
  mainDiv.innerHTML = "";
  getImages("tropical");
};

//gestione click secondo btn
loadBtn2.onclick = () => {
  mainDiv.innerHTML = "";
  getImages("mountains");
};

//window.addEventListener("DOMContentLoaded", function () {
//  getImages1();
//});
