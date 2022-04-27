const container = document.querySelector(".container");
const googleImages = [
  {
    name: "Chromebook",
    image: "/img/browser-1666982_1280.png"
  },
  {
    name: "Chrome",
    image: "/img/chromebook-5270032_1920.jpg"
  }
];

const showGoogleImages = () => {
  let output = "";
  googleImages.forEach(
    ({ name, image }) =>
      (output += `
              <div class="gimage">
                <img class="gimage--picture" src=${image} />
                <h1 class="gimage--title">${name}</h1>
              </div>
              `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showGoogleImages);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}
