const image = document.getElementById('thumbnail-img');

const refreshEveryMS = 60000;

setInterval(() => {
  if (!image.src.includes('?')) {
    image.src = `${image.src}?${Date.now()}`;
  } else {
    image.src =
      image.src.slice(0, image.src.indexOf('?') + 1) +
      Date.now();
  }

  console.log('image refreshed');

  console.log(image.src);
}, refreshEveryMS);

// Background Button

const backG1 = " url('" + "https://wallpaperaccess.com/full/9336992.gif" + "')"
const backG2 = " url('" + "https://gifdb.com/images/thumbnail/anime-rain-swamp-3fkql7s9ykask3qh.gif" + "')"
const backG3 = " url('" + "https://i.pinimg.com/originals/3e/4d/1b/3e4d1b712345ef6294447891ec6ddd5c.gif" + "')"
const backG4 = " url('" + "https://img.wattpad.com/e55fde72193a133be88fac7cadbec989651d5ad7/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f2d4c6269774c4c4c3368737a46673d3d2d313139333635323039372e3137333766333735396431613662636639303339373937383834342e676966" + "')"
const backG5 = " url('" + "https://media.indiedb.com/images/groups/1/25/24269/f3SoU49.1.gif" + "')"

function changeB1() {
  const name = document.querySelector(".body")
  document.body.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60))," + backG1;
}

function changeB2() {
  const name = document.querySelector(".body")
  document.body.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60))," + backG2;
}

function changeB3() {
  const name = document.querySelector(".body")
  document.body.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60))," + backG3;
}

function changeB4() {
  const name = document.querySelector(".body")
  document.body.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60))," + backG4;
}

function changeB5() {
  const name = document.querySelector(".body")
  document.body.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60))," + backG5;
}

// Getting Form Input for Background Url


