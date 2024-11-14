const URL = "https://api.pexels.com/v1/search";
const apiKey = "yTULgze86CRA1xNYKh8q8ScUFBcQdno0066ed3csL3OKEmvRCtkdZVC5";

const getImages1 = function () {
  fetch("https://api.pexels.com/v1/search?query=cat", {
    method: "GET",
    headers: { Authorization: apiKey }
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((imagesObj) => {
        imagesObj.photos.src.original.forEach( => {
            console.log(value);
            
        });
    })
    .catch((error) => console.error(error));
};

window.addEventListener("DOMContentLoaded", function () {
  getImages1();
});
