const btn = document.getElementById('btn');

const image = document.getElementById('thumbnail-img');

btn.addEventListener('click', () => {
  if (!image.src.includes('?')) {
    image.src = `${image.src}?${Date.now()}`;
  } else {
    image.src =
      image.src.slice(0, image.src.indexOf('?') + 1) +
      Date.now();
  }

  console.log('image refreshed');

  console.log(image.src);
});


function imgWidth() {
  const imgW = document.getElementById('thumbnail-img').clientWidth;
  console.log(imgW)
}

function outline() {
  const element = document.querySelector('.outline');
  element.style.borderColor = 'transparent';
}

